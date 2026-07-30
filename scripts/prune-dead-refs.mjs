/**
 * Removes reference entries whose URL host is known-unreachable.
 * Run: node scripts/prune-dead-refs.mjs
 *
 * Kept in-repo so dead citations can be pruned again later. A reference that
 * does not resolve is worse than no reference at all — it reads as fabricated.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "i18n-data");

// Verified unreachable 2026-07-30: returns an empty body on repeated fetches.
// The ANSI Z765 claim it supported is already covered by the Fannie Mae
// SEL-2021-11 citation on the same page, which does resolve.
const DEAD_HOSTS = ["homeinnovation.com"];

for (const [locale, exportName] of [
  ["en", "enCalculators"],
  ["es", "esCalculators"],
]) {
  const file = path.join(dir, `${locale}-calculators.mjs`);
  const mod = await import(file);
  const data = mod[exportName];
  let removed = 0;

  for (const id of Object.keys(data)) {
    const refs = data[id].references;
    if (!refs) continue;
    const kept = refs.filter((r) => !DEAD_HOSTS.some((h) => r.url.includes(h)));
    if (kept.length !== refs.length) {
      removed += refs.length - kept.length;
      data[id].references = kept;
    }
  }

  const body = Object.keys(data)
    .map((id) => `  ${JSON.stringify(id)}: calc(${JSON.stringify(data[id], null, 2)}),`)
    .join("\n");

  fs.writeFileSync(
    file,
    `import { calc } from "./helpers.mjs";\n\nexport const ${exportName} = {\n${body}\n};\n`,
    "utf8",
  );
  console.log(`${locale}: removed ${removed} dead reference(s)`);
}
