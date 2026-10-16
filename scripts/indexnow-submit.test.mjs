import { test } from "node:test";
import { strict as assert } from "node:assert";
import { parseSitemap, getDifferences, impactedByFiles } from "./indexnow-submit.mjs";
const a = "https://buildsitecalc.com/en/calculators/paint";
const b = "https://buildsitecalc.com/es/calculators/pintura";
const c = "https://buildsitecalc.com/en/about";

test("parses sitemap URLs and lastmod", () => {
  const entries = parseSitemap(`<urlset><url><loc>${a}</loc><lastmod>2026-10-16</lastmod></url><url><loc>${b}</loc></url></urlset>`);
  assert.equal(entries.get(a), "2026-10-16");
  assert.equal(entries.get(b), "");
});

test("detects added, updated and deleted URLs", () => {
  const delta = getDifferences(new Map([[a, "2026-09-01"], [b, "2026-10-16"]]),
    new Map([[a, "2026-10-16"], [c, ""]]));
  assert.deepEqual([...delta].sort(), [a, b, c].sort());
});

test("initial submission includes all URLs", () => {
  assert.deepEqual([...getDifferences(null, new Map([[a, ""], [b, ""]]))], [a, b]);
});

test("selects localized content changes; ignores docs", () => {
  const urls = new Set([a, b, c]);
  assert.deepEqual([...impactedByFiles(["scripts/i18n-data/es-calculators.mjs"], urls)], [b]);
  assert.equal(impactedByFiles(["docs/seo/indexnow.md"], urls).size, 0);
  assert.equal(impactedByFiles(["src/lib/seo.tsx"], urls).size, 3);
});

test("rejects offsite sitemap entries", () => {
  assert.throws(() => parseSitemap("<url><loc>https://example.com/evil</loc></url>"), /Unexpected sitemap URL/);
});
