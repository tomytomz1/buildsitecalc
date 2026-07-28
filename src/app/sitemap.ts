import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllCalculators, getAllCategories } from "@/lib/calculators/registry";
import { STATIC_PAGE_SLUGS } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain.replace(/\/$/, "");
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locale.supported) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    });
    entries.push({
      url: `${base}/${locale}/calculators`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const slug of STATIC_PAGE_SLUGS) {
      entries.push({
        url: `${base}/${locale}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.4,
      });
    }

    for (const category of getAllCategories()) {
      const catSlug = locale === "es" ? category.slugEs : category.slugEn;
      entries.push({
        url: `${base}/${locale}/categories/${catSlug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    for (const calc of getAllCalculators()) {
      const calcSlug = locale === "es" ? calc.slugEs : calc.slugEn;
      entries.push({
        url: `${base}/${locale}/calculators/${calcSlug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
