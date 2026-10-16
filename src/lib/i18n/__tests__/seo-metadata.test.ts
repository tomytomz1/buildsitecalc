import { describe, expect, it } from "vitest";
import { seoMetadataOverrides, getSeoMetadataOverride } from "@/lib/seo-metadata-overrides";
import { getAllCalculators, getAllCategories } from "@/lib/calculators/registry";
import { getAllWorkflows } from "@/lib/workflows/registry";
import { STATIC_PAGE_SLUGS } from "@/lib/routes";
import type { Locale } from "@/config/site";

function validPageKeys(locale: Locale): Set<string> {
  return new Set([
    "", "calculators", "categories", "projects", ...STATIC_PAGE_SLUGS,
    ...getAllCategories().map(cat => `categories/${locale === "es" ? cat.slugEs : cat.slugEn}`),
    ...getAllCalculators().map(calc => `calculators/${locale === "es" ? calc.slugEs : calc.slugEn}`),
    ...getAllWorkflows().map(flow => `projects/${locale === "es" ? flow.slugEs : flow.slugEn}`),
  ]);
}

describe("Bing SEO metadata improvements", () => {
  it("audits all 104 sitemap page paths", () => {
    expect(validPageKeys("en").size).toBe(52);
    expect(validPageKeys("es").size).toBe(52);
  });

  it("does not target nonexistent or wrong-language routes", () => {
    for (const locale of ["en", "es"] as const) {
      const valid = validPageKeys(locale);
      for (const key of Object.keys(seoMetadataOverrides[locale])) {
        expect(valid.has(key), `${locale}/${key} is not a sitemap route`).toBe(true);
      }
    }
  });

  it("provides unique, useful descriptions without stuffing or truncation", () => {
    const used = new Set<string>();
    for (const locale of ["en", "es"] as const) {
      for (const [path, metadata] of Object.entries(seoMetadataOverrides[locale])) {
        expect(metadata.description.length, `${locale}/${path} is too short`).toBeGreaterThanOrEqual(120);
        expect(metadata.description.length, `${locale}/${path} is too long`).toBeLessThanOrEqual(170);
        expect(used.has(metadata.description), `${locale}/${path} reuses a description`).toBe(false);
        used.add(metadata.description);
        if (metadata.title) expect(metadata.title.length + " | BuildSiteCalc".length).toBeLessThanOrEqual(75);
      }
    }
  });

  it("maps high-intent Bing queries to appropriate calculator snippets", () => {
    expect(getSeoMetadataOverride("en", "calculators/room-volume")?.description).toContain("cubic feet");
    expect(getSeoMetadataOverride("en", "calculators/square-footage")?.description).toContain("square feet");
    expect(getSeoMetadataOverride("es", "calculators/pisos")?.description).toContain("cajas");
    expect(getSeoMetadataOverride("es", "categories/techos")?.description).toContain("tejas");
    expect(getSeoMetadataOverride("en", "/calculators")?.description).toContain("25");
    expect(getSeoMetadataOverride("en", "projects")).toBeUndefined();
  });
});
