import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { getCalculatorById } from "@/lib/calculators/registry";
import type { Dictionary } from "@/lib/i18n/types";
import { calculatorPath } from "@/lib/routes";
import type { WorkflowDefinition } from "@/lib/workflows/registry";

/**
 * The ordered calculator sequence for a workflow hub.
 *
 * Rendered as an ordered list because the order is the substance of the page:
 * the hub exists to say which calculation comes before which, and a numbered
 * sequence is the only presentation that carries that. Each step's anchor is
 * the calculator title, which is correct here — unlike on calculator pages,
 * this is a directory-style list where the reader needs to recognise the tool.
 */
export function WorkflowSteps({
  workflow,
  locale,
  dict,
  stepLabel,
}: {
  workflow: WorkflowDefinition;
  locale: Locale;
  dict: Dictionary;
  stepLabel: string;
}) {
  const steps = workflow.steps
    .map((step) => {
      const calc = getCalculatorById(step.calculatorId);
      if (!calc) return null;
      return {
        href: calculatorPath(locale, calc),
        title: dict.calculators[step.calculatorId].title,
        purpose: locale === "es" ? step.purposeEs : step.purposeEn,
      };
    })
    .filter((step): step is NonNullable<typeof step> => step !== null);

  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={step.href}>
          <Link
            href={step.href}
            className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/30 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-900"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-start justify-between gap-2 font-medium text-slate-900 group-hover:text-amber-800">
                <span>
                  <span className="sr-only">{`${stepLabel} ${index + 1}: `}</span>
                  {step.title}
                </span>
                <ArrowRight
                  className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-600"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                {step.purpose}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
