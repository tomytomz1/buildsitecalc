import type { Locale } from "@/config/site";

/**
 * Chrome for the project-hub surface.
 *
 * Kept here rather than in `common.labels` because `en.ts` and `es.ts` are
 * assembled by `scripts/assemble-i18n.mjs`, which only regenerates the
 * `calculators`, `pages` and `workflows` keys — anything added to `common` by
 * hand survives, but is easy to lose track of. These strings belong to one
 * feature, so they live with it.
 */
const LABELS = {
  indexTitle: {
    en: "Project workflows",
    es: "Flujos de proyecto",
  },
  indexDescription: {
    en: "Whole projects, calculated in the order the work happens. Each workflow chains the calculators a job needs, from first measurement to final budget, so nothing gets priced before the quantity it depends on is settled.",
    es: "Proyectos completos, calculados en el orden en que ocurre la obra. Cada flujo encadena las calculadoras que un trabajo necesita, desde la primera medida hasta el presupuesto final, para que nada se cotice antes de fijar la cantidad de la que depende.",
  },
  steps: {
    en: "Calculators in order",
    es: "Calculadoras en orden",
  },
  step: {
    en: "Step",
    es: "Paso",
  },
  stepCount: {
    en: "calculators",
    es: "calculadoras",
  },
  outcome: {
    en: "What you end up with",
    es: "Con qué termina",
  },
  faqs: {
    en: "Questions about this project",
    es: "Preguntas sobre este proyecto",
  },
  otherWorkflows: {
    en: "Other project workflows",
    es: "Otros flujos de proyecto",
  },
  usedIn: {
    en: "Projects that use this calculator",
    es: "Proyectos que usan esta calculadora",
  },
  lastUpdated: {
    en: "Last updated",
    es: "Última actualización",
  },
} as const;

export type WorkflowLabelKey = keyof typeof LABELS;

export function workflowLabel(locale: Locale, key: WorkflowLabelKey): string {
  return LABELS[key][locale === "es" ? "es" : "en"];
}
