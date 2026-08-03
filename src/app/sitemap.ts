import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllCalculators, getAllCategories } from "@/lib/calculators/registry";
import type { CalculatorId } from "@/lib/calculators/types";
import type { WorkflowId } from "@/lib/workflows/registry";
import { getDictionary } from "@/lib/i18n";
import { STATIC_PAGE_SLUGS } from "@/lib/routes";
import { getAllWorkflows } from "@/lib/workflows/registry";

const base = siteConfig.domain.replace(/\/$/, "");

type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * Builds one entry per locale carrying `alternates.languages`, so Google
 * receives a reciprocal hreflang cluster straight from the sitemap. Paths are
 * supplied per locale because calculator and category slugs are translated.
 *
 * Language codes are deliberately region-free (`en`, `es`). A region-qualified
 * code only matches searchers in that region, so `es-ES` would exclude the
 * Latin American audience that makes up most of the Spanish traffic.
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
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    },
  };
}

const LEGAL_DATE = new Date(`${siteConfig.legal.lastUpdated}T00:00:00.000Z`);

function toDate(value: string | undefined): Date | undefined {
  return value ? new Date(`${value}T00:00:00.000Z`) : undefined;
}

function latest(dates: (Date | undefined)[], fallback: Date): Date {
  return dates.reduce<Date>(
    (max, current) => (current && current > max ? current : max),
    fallback,
  );
}

/**
 * `lastmod` has to be truthful or Google learns to ignore it, so dates come
 * from each calculator's `lastUpdated` rather than from build time: rebuilding
 * without a content change must not move any date. Locales are updated
 * together, but taking the later of the two keeps the date honest if one is
 * edited on its own.
 */
function calculatorDate(id: CalculatorId): Date {
  return latest(
    [
      toDate(getDictionary("en").calculators[id].lastUpdated),
      toDate(getDictionary("es").calculators[id].lastUpdated),
    ],
    LEGAL_DATE,
  );
}

function workflowDate(id: WorkflowId): Date {
  return latest(
    [
      toDate(getDictionary("en").workflows[id].lastUpdated),
      toDate(getDictionary("es").workflows[id].lastUpdated),
    ],
    LEGAL_DATE,
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const calculators = getAllCalculators();
  const categories = getAllCategories();
  const workflows = getAllWorkflows();

  const dateById = new Map<CalculatorId, Date>(
    calculators.map((calc) => [calc.id, calculatorDate(calc.id)]),
  );
  const newestContent = latest([...dateById.values()], LEGAL_DATE);

  for (const locale of siteConfig.locale.supported) {
    entries.push(entry({ en: "", es: "" }, locale, newestContent, "weekly", 1));
    entries.push(
      entry(
        { en: "calculators", es: "calculators" },
        locale,
        newestContent,
        "weekly",
        0.9,
      ),
    );
    entries.push(
      entry({ en: "categories", es: "categories" }, locale, newestContent, "weekly", 0.7),
    );
    entries.push(
      entry(
        { en: "projects", es: "projects" },
        locale,
        latest(
          workflows.map((workflow) => workflowDate(workflow.id)),
          LEGAL_DATE,
        ),
        "weekly",
        0.8,
      ),
    );

    for (const slug of STATIC_PAGE_SLUGS) {
      entries.push(entry({ en: slug, es: slug }, locale, LEGAL_DATE, "monthly", 0.4));
    }

    for (const category of categories) {
      const memberDates = calculators
        .filter((calc) => calc.categoryId === category.id)
        .map((calc) => dateById.get(calc.id));

      entries.push(
        entry(
          {
            en: `categories/${category.slugEn}`,
            es: `categories/${category.slugEs}`,
          },
          locale,
          latest(memberDates, LEGAL_DATE),
          "weekly",
          0.7,
        ),
      );
    }

    for (const calc of calculators) {
      entries.push(
        entry(
          {
            en: `calculators/${calc.slugEn}`,
            es: `calculators/${calc.slugEs}`,
          },
          locale,
          dateById.get(calc.id) ?? LEGAL_DATE,
          "monthly",
          0.8,
        ),
      );
    }

    for (const workflow of workflows) {
      entries.push(
        entry(
          {
            en: `projects/${workflow.slugEn}`,
            es: `projects/${workflow.slugEs}`,
          },
          locale,
          workflowDate(workflow.id),
          "monthly",
          0.8,
        ),
      );
    }
  }

  return entries;
}
