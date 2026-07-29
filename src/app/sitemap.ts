import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllCalculators, getAllCategories } from "@/lib/calculators/registry";
import { STATIC_PAGE_SLUGS } from "@/lib/routes";

const base = siteConfig.domain.replace(/\/$/, "");

type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * Builds one entry per locale carrying `alternates.languages`, so Google
 * receives a reciprocal hreflang cluster straight from the sitemap. Paths are
 * supplied per locale because calculator and category slugs are translated.
 */
function entry(
  paths: { en: string; es: string },
  locale: "en" | "es",
  lastModified: Date,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
): SitemapEntry {
  const enUrl = paths.en ? `${base}/en/${paths.en}` : `${base}/en`;
  const esUrl = paths.es ? `${base}/es/${paths.es}` : `${base}/es`;

  return {
    url: locale === "es" ? esUrl : enUrl,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "en-US": enUrl,
        "es-ES": esUrl,
        "x-default": enUrl,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locale.supported) {
    entries.push(entry({ en: "", es: "" }, locale, now, "weekly", 1));
    entries.push(
      entry({ en: "calculators", es: "calculators" }, locale, now, "weekly", 0.9),
    );
    entries.push(
      entry({ en: "categories", es: "categories" }, locale, now, "weekly", 0.7),
    );

    for (const slug of STATIC_PAGE_SLUGS) {
      entries.push(entry({ en: slug, es: slug }, locale, now, "monthly", 0.4));
    }

    for (const category of getAllCategories()) {
      entries.push(
        entry(
          {
            en: `categories/${category.slugEn}`,
            es: `categories/${category.slugEs}`,
          },
          locale,
          now,
          "weekly",
          0.7,
        ),
      );
    }

    for (const calc of getAllCalculators()) {
      entries.push(
        entry(
          {
            en: `calculators/${calc.slugEn}`,
            es: `calculators/${calc.slugEs}`,
          },
          locale,
          now,
          "monthly",
          0.8,
        ),
      );
    }
  }

  return entries;
}
