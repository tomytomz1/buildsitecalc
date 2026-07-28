/**
 * Assembles complete en.ts and es.ts from structured data modules.
 * Run: node scripts/assemble-i18n.mjs
 */
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { enCalculators } from "./i18n-data/en-calculators.mjs";
import { enPages } from "./i18n-data/en-pages.mjs";
import { esCalculators } from "./i18n-data/es-calculators.mjs";
import { esPages } from "./i18n-data/es-pages.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18nDir = join(__dirname, "..", "src", "lib", "i18n");

function assemble(locale, calculators, pages) {
  let src = readFileSync(join(i18nDir, `${locale}.ts`), "utf8");
  const calcJson = JSON.stringify(calculators, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");
  const pagesJson = JSON.stringify(pages, null, 2)
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");
  src = src.replace("  calculators: PLACEHOLDER_CALCULATORS,", `  calculators: ${calcJson},`);
  src = src.replace("  pages: PLACEHOLDER_PAGES,", `  pages: ${pagesJson},`);
  writeFileSync(join(i18nDir, `${locale}.ts`), src, "utf8");
  console.log(`Assembled ${locale}.ts`);
}

assemble("en", enCalculators, enPages);
assemble("es", esCalculators, esPages);
