/**
 * Turns a Search Console "Performance on Search" export into the four metrics
 * the 90-day plan tracks, and compares a re-export against the baseline.
 *
 * Snapshot:  node scripts/gsc-track.mjs <export.xlsx> --label day-30 --out docs/seo/metrics/day-30.json
 * Compare:   node scripts/gsc-track.mjs <export.xlsx> --against docs/seo/metrics/baseline.json
 *
 * Why a script and not a spreadsheet: the day-60 decision is a rule, not a
 * judgement call, and a rule that lives in a script cannot be quietly relaxed
 * when the numbers are disappointing. The metric order here is deliberate -
 * impressions move first, then query count, then position, and clicks lag by
 * 60-90 days on a domain this young, so clicks are reported but never used as a
 * gate before day 90.
 */
import { execFileSync } from "child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Money pages come from the link graph so the two never drift apart. */
export function readMoneyPageSlugs() {
  const graph = readFileSync(join(root, "src/lib/linking/graph.ts"), "utf8");
  const block = /export const MONEY_PAGE_IDS[^=]*=\s*\[([\s\S]*?)\]/.exec(graph);
  if (!block) throw new Error("MONEY_PAGE_IDS not found in src/lib/linking/graph.ts");
  const ids = [...block[1].matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]);

  const registry = readFileSync(join(root, "src/lib/calculators/registry.ts"), "utf8");
  const slugs = new Set();
  for (const id of ids) {
    const entry = new RegExp(
      `id:\\s*"${id}",[\\s\\S]{0,400}?slugEn:\\s*"([a-z0-9-]+)",\\s*slugEs:\\s*"([a-z0-9-]+)"`,
    ).exec(registry);
    if (!entry) throw new Error(`No registry slugs for money page "${id}"`);
    slugs.add(entry[1]);
    slugs.add(entry[2]);
  }
  return { ids, slugs };
}

function loadExport(path) {
  if (path.endsWith(".json")) {
    return JSON.parse(readFileSync(path, "utf8"));
  }

  // Reuse the xlsx reader rather than duplicating it.
  const dir = mkdtempSync(join(tmpdir(), "gsc-track-"));
  const temp = join(dir, "export.json");
  try {
    execFileSync(
      process.execPath,
      [join(root, "scripts/gsc-report.mjs"), path, "--out", temp],
      { stdio: "pipe" },
    );
    return JSON.parse(readFileSync(temp, "utf8"));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function num(value) {
  if (typeof value === "number") return value;
  const parsed = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function sheetRows(data, name) {
  const key = Object.keys(data).find((k) => k.toLowerCase() === name.toLowerCase());
  return key ? data[key] : [];
}

function column(row, candidates) {
  for (const key of Object.keys(row)) {
    const normalized = key.toLowerCase().replace(/\s+/g, " ").trim();
    if (candidates.includes(normalized)) return row[key];
  }
  return undefined;
}

const IMPRESSION_KEYS = ["impressions", "impresiones"];
const CLICK_KEYS = ["clicks", "clics"];
const POSITION_KEYS = ["position", "average position", "posición", "posicion media"];
const PAGE_KEYS = ["page", "top pages", "página", "pagina"];

export function metricsFrom(data, moneyPageSlugs) {
  const devices = sheetRows(data, "Devices");
  const queries = sheetRows(data, "Queries");
  const pages = sheetRows(data, "Pages");

  // The Devices sheet is the authoritative total: the Queries sheet omits
  // impressions from anonymized queries, which was ~30% of the baseline.
  const deviceImpressions = devices.reduce(
    (sum, row) => sum + num(column(row, IMPRESSION_KEYS)),
    0,
  );
  const queryImpressions = queries.reduce(
    (sum, row) => sum + num(column(row, IMPRESSION_KEYS)),
    0,
  );
  const clicks = devices.reduce((sum, row) => sum + num(column(row, CLICK_KEYS)), 0);

  let moneyImpressions = 0;
  let moneyWeightedPosition = 0;
  let pagesWithImpressions = 0;

  for (const row of pages) {
    const impressions = num(column(row, IMPRESSION_KEYS));
    if (impressions > 0) pagesWithImpressions += 1;

    const url = String(column(row, PAGE_KEYS) ?? "");
    const slug = url.split("?")[0].replace(/\/$/, "").split("/").pop() ?? "";
    if (!moneyPageSlugs.has(slug)) continue;

    moneyImpressions += impressions;
    moneyWeightedPosition += impressions * num(column(row, POSITION_KEYS));
  }

  return {
    impressions: deviceImpressions || queryImpressions,
    impressionsFromNamedQueries: queryImpressions,
    anonymizedImpressions: Math.max(0, deviceImpressions - queryImpressions),
    uniqueQueries: queries.length,
    pagesWithImpressions,
    moneyPageAvgPosition:
      moneyImpressions > 0
        ? Number((moneyWeightedPosition / moneyImpressions).toFixed(2))
        : null,
    moneyPageImpressions: moneyImpressions,
    clicks,
  };
}

/** Both gates must fail before the plan's day-60 kill criterion fires. */
export function evaluateGates(baselineMetrics, currentMetrics) {
  const impressionsRatio =
    baselineMetrics.impressions > 0
      ? currentMetrics.impressions / baselineMetrics.impressions
      : 0;
  const positionGain =
    typeof baselineMetrics.moneyPageAvgPosition === "number" &&
    typeof currentMetrics.moneyPageAvgPosition === "number"
      ? baselineMetrics.moneyPageAvgPosition - currentMetrics.moneyPageAvgPosition
      : 0;

  const impressionsDoubled = impressionsRatio >= 2;
  const positionImproved = positionGain >= 15;
  return {
    impressionsRatio,
    positionGain,
    impressionsDoubled,
    positionImproved,
    killCriterionMet: !impressionsDoubled && !positionImproved,
  };
}

// Guarded so the metric functions above can be imported by the unit test.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  runCli();
}

function runCli() {
  const args = process.argv.slice(2);
  const inputPath = args.find((arg) => !arg.startsWith("--"));
  const flag = (name) => {
    const index = args.indexOf(`--${name}`);
    return index === -1 ? undefined : args[index + 1];
  };

  if (!inputPath) {
    console.error(
      "Usage: node scripts/gsc-track.mjs <export.xlsx|export.json> [--label day-30] [--out file.json] [--against baseline.json] [--gate day-60]",
    );
    process.exit(1);
  }

  const { ids: moneyPageIds, slugs: moneyPageSlugs } = readMoneyPageSlugs();
  const snapshot = {
    label: flag("label") ?? "unlabelled",
    source: inputPath,
    capturedAt: new Date().toISOString().slice(0, 10),
    moneyPages: moneyPageIds,
    metrics: metricsFrom(loadExport(inputPath), moneyPageSlugs),
  };

  const outPath = flag("out");
  if (outPath) {
    const absolute = join(root, outPath);
    mkdirSync(dirname(absolute), { recursive: true });
    writeFileSync(absolute, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
    console.log(`Wrote ${outPath}`);
  }

  const rows = [
    ["Impressions", "impressions"],
    ["Unique queries", "uniqueQueries"],
    ["Money-page avg position", "moneyPageAvgPosition"],
    ["Pages with impressions", "pagesWithImpressions"],
    ["Clicks (lagging)", "clicks"],
    ["Anonymized impressions", "anonymizedImpressions"],
  ];

  const againstPath = flag("against");
  const baseline = againstPath
    ? JSON.parse(readFileSync(join(root, againstPath), "utf8"))
    : null;

  console.log(`\n${snapshot.label} (${snapshot.capturedAt})`);
  for (const [label, key] of rows) {
    const value = snapshot.metrics[key];
    if (!baseline) {
      console.log(`  ${label.padEnd(26)} ${value ?? "n/a"}`);
      continue;
    }

    const before = baseline.metrics[key];
    const delta =
      typeof value === "number" && typeof before === "number"
        ? key === "moneyPageAvgPosition"
          ? // Position improves downward, so report the improvement as positive.
            `${(before - value).toFixed(2)} better`
          : `${value - before >= 0 ? "+" : ""}${(value - before).toFixed(0)}`
        : "n/a";
    console.log(
      `  ${label.padEnd(26)} ${before ?? "n/a"} -> ${value ?? "n/a"}  (${delta})`,
    );
  }

  if (baseline) {
    const gates = evaluateGates(baseline.metrics, snapshot.metrics);

    console.log(`\nAgainst ${baseline.label} (${baseline.capturedAt}):`);
    console.log(
      `  Impressions x${gates.impressionsRatio.toFixed(2)} ${gates.impressionsDoubled ? "(doubled)" : "(not doubled)"}`,
    );
    console.log(
      `  Money-page position ${gates.positionGain.toFixed(2)} places better ${gates.positionImproved ? "(15+ met)" : "(15+ not met)"}`,
    );

    if (gates.killCriterionMet) {
      console.log(
        "\n  KILL CRITERION MET. If this is the day-60 export: stop publishing new\n  content and move 80% of effort to the authority workstream.",
      );
      if (flag("gate") === "day-60") process.exitCode = 2;
    } else {
      console.log("\n  Kill criterion not met. Continue the current plan.");
    }
  }
}
