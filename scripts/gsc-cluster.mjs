/**
 * Clusters a Search Console query export and assigns each cluster an owning URL.
 *
 * Run: node scripts/gsc-report.mjs export.xlsx > gsc.json
 *      node scripts/gsc-cluster.mjs gsc.json [--format=canvas]
 *
 * The rules are ordered and the first match wins, so a query lands in exactly
 * one cluster and every assignment is reproducible rather than a judgment call.
 * Reverse-direction paint queries are matched before general paint queries
 * because "how many square feet does a gallon cover" is a different intent from
 * "how much paint do I need" and is answered by a different block on the page.
 *
 * Winnability is a score, not an opinion: it rewards impressions and proximity
 * to page 1, and penalises clusters with no owning page. Positions in this
 * export run 41-100, so a query at 45 with real impressions is worth many at 95.
 */
import { readFileSync, writeFileSync } from "fs";

const [, , jsonPath, ...flags] = process.argv;

if (!jsonPath) {
  console.error(
    "Usage: node scripts/gsc-cluster.mjs <gsc.json> [--format=canvas] [--out file.txt]",
  );
  process.exit(1);
}

const outPath = flags.includes("--out") ? flags[flags.indexOf("--out") + 1] : undefined;
const emit = outPath
  ? (() => {
      const lines = [];
      process.on("exit", () => writeFileSync(outPath, lines.join("\n"), "utf8"));
      return (line = "") => lines.push(line);
    })()
  : (line = "") => console.log(line);

const EN = (slug) => `/en/calculators/${slug}`;
const ES = (slug) => `/es/calculators/${slug}`;

/**
 * Ordered cluster rules. `owner` is the URL that should rank; `surface` names
 * the specific block on that page which answers the intent, so a cluster with no
 * surface is a page-level target and one with a surface is a content target.
 */
const RULES = [
  {
    id: "paint-reverse",
    label: "Paint: gallons to area (reverse)",
    owner: EN("paint"),
    surface: "QuickAnswers block",
    test: (q) =>
      /paint/.test(q) &&
      (/(sq|square)\s*(ft|feet|foot)/.test(q) ||
        /surface area/.test(q) ||
        /coverage/.test(q) ||
        /cover/.test(q)),
  },
  {
    id: "paint-quantity",
    label: "Paint: area to gallons",
    owner: EN("paint"),
    test: (q) => /paint|gallon|qt |quart|pint/.test(q),
  },
  {
    id: "stair-code",
    label: "Stair: code limits",
    owner: EN("stair"),
    surface: "QuickAnswers block",
    test: (q) => /(max|maximum|standard)/.test(q) && /(stair|rise|riser|step)/.test(q),
  },
  {
    id: "stair-geometry",
    label: "Stair: rise and run",
    owner: EN("stair"),
    test: (q) => /stair|staircase|riser|rise|tread|step/.test(q),
  },
  {
    id: "hvac-btu",
    label: "HVAC: BTU sizing",
    owner: EN("hvac-btu"),
    // No bare "ton": "how many cubic yards of topsoil in a ton" is a soil
    // question, and cooling tonnage always appears alongside BTU in this export.
    test: (q) =>
      /btu|b t u|aircon|air condition|air conditioner|air conditioning|hvac|cooling|heater|heating|\bac\b|cfm/.test(
        q,
      ),
  },
  {
    id: "tile-waste",
    label: "Tile: overage and waste",
    owner: EN("tile"),
    surface: "competes with project-waste-factor",
    test: (q) => /tile/.test(q) && /(overage|extra|waste)/.test(q),
  },
  {
    id: "tile-count",
    label: "Tile: count and layout",
    owner: EN("tile"),
    test: (q) => /tile|azulejo/.test(q),
  },
  {
    id: "flooring",
    label: "Flooring: area and boxes",
    owner: EN("flooring"),
    test: (q) => /floor|vloer/.test(q),
  },
  {
    id: "topsoil",
    label: "Topsoil: volume and weight",
    owner: EN("topsoil"),
    test: (q) => /topsoil|top soil|soil|dirt/.test(q),
  },
  {
    id: "mulch",
    label: "Mulch: cubic yards and bags",
    owner: EN("mulch"),
    test: (q) => /mulch/.test(q),
  },
  {
    id: "drywall",
    label: "Drywall and sheetrock",
    owner: EN("drywall"),
    test: (q) => /drywall|dry wall|sheetrock/.test(q),
  },
  {
    id: "board-foot",
    label: "Board feet and lumber",
    owner: EN("board-foot"),
    test: (q) => /board\s*f|boardfeet|bd ft|board foot/.test(q),
  },
  {
    id: "moving",
    label: "Moving truck and volume",
    owner: EN("moving-truck-size"),
    test: (q) => /moving/.test(q),
  },
  {
    id: "dumpster",
    label: "Dumpster size",
    owner: EN("dumpster-size"),
    test: (q) => /dumpster/.test(q),
  },
  {
    id: "labor-markup",
    label: "Labor markup",
    owner: EN("labor-markup"),
    test: (q) => /markup/.test(q),
  },
  {
    id: "material-cost",
    label: "Material cost estimating",
    owner: EN("material-cost"),
    test: (q) => /material|estimated cost/.test(q),
  },
  {
    id: "project-price",
    label: "Project price and budget",
    owner: EN("project-budget"),
    test: (q) => /project (price|cost)|precio proyecto|obra online/.test(q),
  },
  {
    id: "waste-factor",
    label: "Waste percentage",
    owner: EN("project-waste-factor"),
    test: (q) => /waste/.test(q),
  },
  {
    id: "room-volume",
    label: "Room volume and cubic footage",
    owner: EN("room-volume"),
    test: (q) =>
      /volume|cubic (foot|footage)|metri cubi|volumen/.test(q) ||
      /building dimension|volume of (a )?(house|building)/.test(q),
  },
  {
    id: "square-footage",
    label: "Square footage and area",
    owner: EN("square-footage"),
    test: (q) =>
      /square (foot|feet|footage)|sq ft|sq feet|area|metros cuadrados|room calculation|40 x 40/.test(
        q,
      ),
  },
];

/** Spanish-language rules run first: they must not be swallowed by English ones. */
const ES_RULES = [
  {
    id: "es-stair",
    label: "ES Stair: rise and run",
    owner: ES("escaleras"),
    test: (q) => /escalera/.test(q),
  },
  {
    id: "es-hvac",
    label: "ES HVAC: BTU sizing",
    owner: ES("btu-hvac"),
    test: (q) => /btu/.test(q) && /(cuant|como|calcular|c.lculo|necesit|aire)/.test(q),
  },
  {
    id: "es-tile",
    label: "ES Tile: count per m2",
    owner: ES("azulejos"),
    test: (q) => /azulejo/.test(q),
  },
  {
    id: "es-area",
    label: "ES Square footage and area",
    owner: ES("pies-cuadrados"),
    test: (q) => /metros cuadrados/.test(q),
  },
  {
    id: "es-project",
    label: "ES Project price and budget",
    owner: ES("presupuesto-proyecto"),
    test: (q) => /precio proyecto|obra online/.test(q),
  },
];

const UNCLUSTERED = {
  id: "other-language",
  label: "Other language, no page",
  owner: null,
  test: () => true,
};

function classify(query) {
  const q = query.toLowerCase();
  for (const rule of [...ES_RULES, ...RULES]) {
    if (rule.test(q)) return rule;
  }
  return UNCLUSTERED;
}

const raw = JSON.parse(readFileSync(jsonPath, "utf8"));
const queries = raw.Queries.map((row) => ({
  query: String(row["Top queries"]),
  impressions: Number(row.Impressions) || 0,
  position: Number(row.Position) || 0,
  clicks: Number(row.Clicks) || 0,
}));

const pageImpressions = new Map(
  raw.Pages.map((row) => [
    String(row["Top pages"]).replace("https://buildsitecalc.com", ""),
    Number(row.Impressions) || 0,
  ]),
);

const clusters = new Map();

for (const entry of queries) {
  const rule = classify(entry.query);
  if (!clusters.has(rule.id)) {
    clusters.set(rule.id, {
      id: rule.id,
      label: rule.label,
      owner: rule.owner,
      surface: rule.surface ?? null,
      queries: [],
    });
  }
  clusters.get(rule.id).queries.push({ ...entry, cluster: rule.id });
}

/**
 * Score = impressions weighted by how close the cluster already is to page one.
 * Position 41 scores ~1.0 and position 100 ~0.0, so an existing near-miss beats
 * volume sitting at the bottom of the index. Clusters with no owning page are
 * halved: they need a page built before any of it is reachable.
 */
function score(cluster) {
  const impressions = cluster.queries.reduce((sum, q) => sum + q.impressions, 0);
  const best = Math.min(...cluster.queries.map((q) => q.position));
  const proximity = Math.max(0, (100 - best) / 59);
  const raw = impressions * (0.35 + proximity);
  return cluster.owner ? raw : raw * 0.5;
}

const ranked = [...clusters.values()]
  .map((cluster) => {
    const impressions = cluster.queries.reduce((sum, q) => sum + q.impressions, 0);
    const positions = cluster.queries.map((q) => q.position);
    return {
      ...cluster,
      queryCount: cluster.queries.length,
      impressions,
      bestPosition: Math.min(...positions),
      avgPosition:
        Math.round((positions.reduce((a, b) => a + b, 0) / positions.length) * 10) / 10,
      ownerImpressions: cluster.owner ? (pageImpressions.get(cluster.owner) ?? 0) : 0,
      score: Math.round(score(cluster) * 10) / 10,
    };
  })
  .sort((a, b) => b.score - a.score)
  .map((cluster, index) => ({ ...cluster, rank: index + 1 }));

/**
 * A page owning two clusters is not cannibalisation — one page can hold two
 * intents. True cannibalisation is two *pages* competing for one intent, which
 * this export cannot prove: GSC's UI export gives queries and pages as separate
 * lists, never the query-by-page cross-tab. So the flag records the ambiguity
 * rather than asserting a conclusion.
 */
const ownerCounts = new Map();
for (const cluster of ranked) {
  if (!cluster.owner) continue;
  ownerCounts.set(cluster.owner, (ownerCounts.get(cluster.owner) ?? 0) + 1);
}

const withFlags = ranked.map((cluster) => ({
  ...cluster,
  sharesOwner: cluster.owner ? ownerCounts.get(cluster.owner) > 1 : false,
}));

const claimedOwners = new Set(withFlags.map((cluster) => cluster.owner).filter(Boolean));

/**
 * Pages drawing impressions that no named query maps to. Their demand sits
 * entirely in the ~30% of impressions Google anonymises, so these pages cannot
 * be optimised from this export at all — they need an external keyword source.
 */
const unclaimedPages = raw.Pages.map((row) => ({
  path: String(row["Top pages"]).replace("https://buildsitecalc.com", ""),
  impressions: Number(row.Impressions) || 0,
  position: Number(row.Position) || 0,
}))
  .filter((page) => !claimedOwners.has(page.path))
  .sort((a, b) => b.impressions - a.impressions || a.position - b.position);

if (flags.includes("--format=canvas")) {
  const clusterIds = withFlags.map((c) => c.id);
  const rows = queries
    .map((entry) => {
      const rule = classify(entry.query);
      return [
        entry.query,
        entry.impressions,
        entry.position,
        clusterIds.indexOf(rule.id),
      ];
    })
    .sort((a, b) => b[1] - a[1] || a[2] - b[2]);

  emit(
    "const CLUSTERS = " +
      JSON.stringify(
        withFlags.map((c) => ({
          id: c.id,
          label: c.label,
          owner: c.owner,
          surface: c.surface,
          rank: c.rank,
          score: c.score,
          queryCount: c.queryCount,
          impressions: c.impressions,
          bestPosition: c.bestPosition,
          avgPosition: c.avgPosition,
          ownerImpressions: c.ownerImpressions,
          sharesOwner: c.sharesOwner,
        })),
        null,
        2,
      ) +
      " as const;",
  );
  emit();
  emit(
    "const QUERIES: [string, number, number, number][] = " + JSON.stringify(rows) + ";",
  );
  emit();
  emit(
    "const UNCLAIMED_PAGES = " + JSON.stringify(unclaimedPages, null, 2) + " as const;",
  );
} else {
  const totalImpressions = queries.reduce((sum, q) => sum + q.impressions, 0);
  emit(
    `${queries.length} queries, ${totalImpressions} impressions, ${withFlags.length} clusters\n`,
  );
  for (const cluster of withFlags) {
    emit(
      [
        String(cluster.rank).padStart(2),
        cluster.label.padEnd(34),
        `q=${String(cluster.queryCount).padStart(3)}`,
        `imp=${String(cluster.impressions).padStart(3)}`,
        `best=${String(cluster.bestPosition).padStart(5)}`,
        `avg=${String(cluster.avgPosition).padStart(5)}`,
        `score=${String(cluster.score).padStart(6)}`,
        cluster.owner ?? "NO PAGE",
        cluster.sharesOwner ? "[shared owner]" : "",
        cluster.surface ? `[${cluster.surface}]` : "",
      ].join(" "),
    );
  }

  emit("\nPages with impressions that no named query maps to:");
  for (const page of unclaimedPages) {
    emit(
      `   imp=${String(page.impressions).padStart(3)} pos=${String(page.position).padStart(6)} ${page.path}`,
    );
  }
}
