import Link from "next/link";
import type { Locale } from "@/config/site";
import type { CalculatorId } from "@/lib/calculators/types";
import type { Dictionary } from "@/lib/i18n/types";
import { workflowPath } from "@/lib/routes";
import { workflowLabel } from "@/lib/workflows/labels";
import { getWorkflowsUsingCalculator } from "@/lib/workflows/registry";

/**
 * Links from a calculator up to the project workflows that include it.
 *
 * This is the reciprocal half of the hub-and-spoke topology. Without it the
 * hubs would only be reachable from the projects index, which is one shallow
 * entry point; with it every workflow collects inbound links from all of its
 * steps, and a visitor who landed on a single calculator can see the larger
 * job it belongs to.
 */
export function WorkflowsUsingCalculator({
  calculatorId,
  locale,
  dict,
}: {
  calculatorId: CalculatorId;
  locale: Locale;
  dict: Dictionary;
}) {
  const workflows = getWorkflowsUsingCalculator(calculatorId);
  if (workflows.length === 0) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">
        {workflowLabel(locale, "usedIn")}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {workflows.map((workflow) => (
          <li key={workflow.id}>
            <Link
              href={workflowPath(locale, workflow)}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/30 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <span className="font-medium text-slate-900">
                {dict.workflows[workflow.id].title}
              </span>
              <span className="mt-1 text-sm text-slate-600">
                {dict.workflows[workflow.id].shortDescription}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
