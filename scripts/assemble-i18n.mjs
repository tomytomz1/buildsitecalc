/**
 * Assembles complete en.ts and es.ts from structured data modules.
 * Run: node scripts/assemble-i18n.mjs
 *
 * IMPORTANT: Only replaces top-level `calculators` and `pages`.
 * Hand-maintained `common` (including inputLabels / uiLabels) is preserved.
 * If you need calculator-specific labels regenerated, put them in
 * scripts/i18n-data/*-calculators.mjs -- never rely on assembling to keep
 * edits made only under `calculators` in en.ts/es.ts.
 */
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { enCalculators } from "./i18n-data/en-calculators.mjs";
import { enPages } from "./i18n-data/en-pages.mjs";
import { enWorkflows } from "./i18n-data/en-workflows.mjs";
import { esCalculators } from "./i18n-data/es-calculators.mjs";
import { esPages } from "./i18n-data/es-pages.mjs";
import { esWorkflows } from "./i18n-data/es-workflows.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18nDir = join(__dirname, "..", "src", "lib", "i18n");

function indentJson(value, pad) {
  return JSON.stringify(value, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : pad + line))
    .join("\n");
}

function findMatchingEnd(src, valueStart) {
  let i = valueStart;
  while (i < src.length && /\s/.test(src[i])) i++;
  const open = src[i];
  if (open !== "{" && open !== "[") {
    throw new Error(`Expected object/array at index ${valueStart}`);
  }
  let depth = 0;
  let inString = false;
  let escape = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inString) {
      if (escape) escape = false;
      else if (ch === "\\") escape = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "{" || ch === "[") depth++;
    if (ch === "}" || ch === "]") {
      depth--;
      if (depth === 0) {
        let end = i + 1;
        if (src[end] === ",") end++;
        return end;
      }
    }
  }
  throw new Error("Unbalanced value");
}

function replaceTopLevelObject(src, key, value) {
  // Top-level keys in the dictionary use exactly two-space indent and `{` on same/next line
  const re = new RegExp(`^  ${key}:\\s*\\{`, "m");
  const match = re.exec(src);
  if (!match) {
    throw new Error(`Could not find top-level ${key}`);
  }
  const start = match.index;
  const valueStart = start + match[0].length - 1; // at `{`
  const end = findMatchingEnd(src, valueStart);
  const replacement = `  ${key}: ${indentJson(value, "  ")},`;
  return src.slice(0, start) + replacement + src.slice(end);
}

/** Writes a top-level key, inserting it before `anchorKey` when it does not exist yet. */
function upsertTopLevelObject(src, key, value, anchorKey) {
  if (new RegExp(`^  ${key}:\\s*\\{`, "m").test(src)) {
    return replaceTopLevelObject(src, key, value);
  }
  const anchor = new RegExp(`^  ${anchorKey}:\\s*\\{`, "m").exec(src);
  if (!anchor) {
    throw new Error(`Could not find anchor key ${anchorKey} to insert ${key} before`);
  }
  const insertion = `  ${key}: ${indentJson(value, "  ")},\n`;
  return src.slice(0, anchor.index) + insertion + src.slice(anchor.index);
}

function assemble(locale, calculators, pages, workflows) {
  let src = readFileSync(join(i18nDir, `${locale}.ts`), "utf8");
  if (src.includes("PLACEHOLDER_CALCULATORS")) {
    src = src.replace(
      "  calculators: PLACEHOLDER_CALCULATORS,",
      `  calculators: ${indentJson(calculators, "  ")},`,
    );
    src = src.replace(
      "  pages: PLACEHOLDER_PAGES,",
      `  pages: ${indentJson(pages, "  ")},`,
    );
  } else {
    src = replaceTopLevelObject(src, "calculators", calculators);
    src = replaceTopLevelObject(src, "pages", pages);
  }
  src = upsertTopLevelObject(src, "workflows", workflows, "footer");
  writeFileSync(join(i18nDir, `${locale}.ts`), src, "utf8");
  console.log(`Assembled ${locale}.ts`);
}

assemble("en", enCalculators, enPages, enWorkflows);
assemble("es", esCalculators, esPages, esWorkflows);
