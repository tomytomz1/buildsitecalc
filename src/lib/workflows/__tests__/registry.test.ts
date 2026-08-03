import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getCalculatorById } from "@/lib/calculators/registry";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/config/site";
import { MONEY_PAGE_IDS } from "@/lib/linking/graph";
import { workflowPath } from "@/lib/routes";
import {
  getAllWorkflows,
  getWorkflowBySlug,
  getWorkflowsUsingCalculator,
  WORKFLOWS,
} from "@/lib/workflows/registry";

const LOCALES: Locale[] = ["en", "es"];
const MIN_STEPS = 5;

describe("workflow registry", () => {
  it("defines the four project hubs", () => {
    expect(WORKFLOWS).toHaveLength(4);
    expect(getAllWorkflows().map((workflow) => workflow.id)).toEqual([
      "deck-build",
      "room-repaint",
      "bathroom-tile",
      "driveway-concrete",
    ]);
  });

  it(`chains at least ${MIN_STEPS} calculators per hub`, () => {
    for (const workflow of WORKFLOWS) {
      expect(workflow.steps.length, `${workflow.id} is too short`).toBeGreaterThanOrEqual(
        MIN_STEPS,
      );
    }
  });

  it("references only real calculators, each once", () => {
    for (const workflow of WORKFLOWS) {
      const ids = workflow.steps.map((step) => step.calculatorId);

      for (const id of ids) {
        expect(getCalculatorById(id), `${workflow.id} -> unknown ${id}`).toBeDefined();
      }
      expect(new Set(ids).size, `${workflow.id} repeats a step`).toBe(ids.length);
    }
  });

  it("has unique slugs in both locales and resolves them back", () => {
    for (const locale of LOCALES) {
      const slugs = WORKFLOWS.map((workflow) =>
        locale === "es" ? workflow.slugEs : workflow.slugEn,
      );
      expect(new Set(slugs).size, `${locale} slugs collide`).toBe(slugs.length);

      for (const workflow of WORKFLOWS) {
        const slug = locale === "es" ? workflow.slugEs : workflow.slugEn;
        expect(getWorkflowBySlug(locale, slug)?.id).toBe(workflow.id);
      }
    }
  });

  it("gives every step a bilingual purpose line", () => {
    for (const workflow of WORKFLOWS) {
      for (const step of workflow.steps) {
        expect(
          step.purposeEn.trim().length,
          `${workflow.id}/${step.calculatorId}`,
        ).toBeGreaterThan(0);
        expect(
          step.purposeEs.trim().length,
          `${workflow.id}/${step.calculatorId}`,
        ).toBeGreaterThan(0);
        expect(
          step.purposeEs,
          `${workflow.id}/${step.calculatorId} is untranslated`,
        ).not.toBe(step.purposeEn);
      }
    }
  });
});

describe("workflow copy", () => {
  for (const locale of LOCALES) {
    it(`has complete ${locale} content for every hub`, () => {
      const dict = getDictionary(locale);

      for (const workflow of WORKFLOWS) {
        const content = dict.workflows[workflow.id];
        expect(content, `${locale}/${workflow.id} missing`).toBeDefined();
        expect(content.title.trim().length).toBeGreaterThan(0);
        expect(content.metaTitle.trim().length).toBeGreaterThan(0);
        expect(content.metaDescription.length).toBeGreaterThan(70);
        expect(content.metaDescription.length).toBeLessThanOrEqual(165);
        expect(content.intro.length).toBeGreaterThanOrEqual(2);
        expect(content.outcome.trim().length).toBeGreaterThan(0);
        expect(content.faqs.length).toBeGreaterThanOrEqual(3);
        expect(content.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    });
  }

  it("does not reuse English copy in the Spanish dictionary", () => {
    const en = getDictionary("en").workflows;
    const es = getDictionary("es").workflows;

    for (const workflow of WORKFLOWS) {
      expect(es[workflow.id].title, `${workflow.id} title untranslated`).not.toBe(
        en[workflow.id].title,
      );
      expect(es[workflow.id].outcome, `${workflow.id} outcome untranslated`).not.toBe(
        en[workflow.id].outcome,
      );
    }
  });

  it("leads every FAQ answer with a bolded direct answer", () => {
    for (const locale of LOCALES) {
      for (const workflow of WORKFLOWS) {
        for (const faq of getDictionary(locale).workflows[workflow.id].faqs) {
          expect(
            faq.answer.startsWith("**"),
            `${locale}/${workflow.id}: ${faq.question}`,
          ).toBe(true);
        }
      }
    }
  });
});

describe("workflows feed the internal link graph", () => {
  it("routes every money page through at least one hub", () => {
    for (const id of MONEY_PAGE_IDS) {
      expect(
        getWorkflowsUsingCalculator(id).length,
        `${id} is not part of any project workflow`,
      ).toBeGreaterThan(0);
    }
  });

  it("reports hubs in build order for a shared calculator", () => {
    // square-footage opens all four workflows, so it is the strongest test that
    // the "used in" lookup stays ordered rather than registry-insertion ordered.
    const ids = getWorkflowsUsingCalculator("square-footage").map(
      (workflow) => workflow.id,
    );
    expect(ids).toEqual([
      "deck-build",
      "room-repaint",
      "bathroom-tile",
      "driveway-concrete",
    ]);
  });
});

describe("workflows are in the sitemap", () => {
  const entries = sitemap();
  const byUrl = new Map(entries.map((entry) => [entry.url, entry]));

  it("lists the projects index and every hub in both locales", () => {
    for (const locale of LOCALES) {
      expect(byUrl.has(`https://buildsitecalc.com/${locale}/projects`)).toBe(true);

      for (const workflow of WORKFLOWS) {
        const url = `https://buildsitecalc.com${workflowPath(locale, workflow)}`;
        expect(byUrl.has(url), `${url} missing from sitemap`).toBe(true);
      }
    }
  });

  it("pairs each hub with the translated slug via language-only hreflang", () => {
    for (const workflow of WORKFLOWS) {
      const enUrl = `https://buildsitecalc.com/en/projects/${workflow.slugEn}`;
      const esUrl = `https://buildsitecalc.com/es/projects/${workflow.slugEs}`;

      for (const url of [enUrl, esUrl]) {
        const languages = byUrl.get(url)?.alternates?.languages;
        expect(languages, `${url} has no alternates`).toBeDefined();
        expect(languages?.en).toBe(enUrl);
        expect(languages?.es).toBe(esUrl);
        expect(languages?.["x-default"]).toBe(enUrl);
        expect(languages).not.toHaveProperty("en-US");
        expect(languages).not.toHaveProperty("es-ES");
      }
    }
  });

  it("dates hubs from their content, not from build time", () => {
    for (const workflow of WORKFLOWS) {
      const entry = byUrl.get(`https://buildsitecalc.com/en/projects/${workflow.slugEn}`);
      const expected = getDictionary("en").workflows[workflow.id].lastUpdated;
      expect(new Date(entry?.lastModified as Date).toISOString()).toBe(
        `${expected}T00:00:00.000Z`,
      );
    }
  });
});
