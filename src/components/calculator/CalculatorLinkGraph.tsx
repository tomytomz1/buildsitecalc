import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { getCalculatorById } from "@/lib/calculators/registry";
import type { CalculatorId } from "@/lib/calculators/types";
import type { Dictionary } from "@/lib/i18n/types";
import { getOutboundLinks, type LinkPlacement } from "@/lib/linking/graph";
import { calculatorPath } from "@/lib/routes";

interface ResolvedLink {
  href: string;
  anchor: string;
  title: string;
  placement: LinkPlacement;
}

const GROUP_LABELS: Record<
  Exclude<LinkPlacement, "inline">,
  { en: string; es: string }
> = {
  prereq: { en: "Work these out first", es: "Calcule esto primero" },
  "next-step": { en: "What to do with this result", es: "Qué hacer con este resultado" },
  related: { en: "Related calculators", es: "Calculadoras relacionadas" },
};

const GROUP_ORDER: Exclude<LinkPlacement, "inline">[] = [
  "prereq",
  "next-step",
  "related",
];

/**
 * Renders the internal link graph for one calculator.
 *
 * This replaces the old related-tools strip, which was driven by `relatedIds`
 * and always used the target's page title as the anchor. Anchor text is the
 * strongest on-page relevance signal a site controls, and spending every
 * inbound link on the literal string "Paint Calculator" wastes it. Here the
 * anchor is a descriptive phrase and the title is demoted to supporting text.
 *
 * Links are grouped by intent, so the ordering also reflects how someone
 * actually moves through a project rather than an arbitrary list.
 */
export function CalculatorLinkGraph({
  calculatorId,
  locale,
  dict,
}: {
  calculatorId: CalculatorId;
  locale: Locale;
  dict: Dictionary;
}) {
  const resolved: ResolvedLink[] = getOutboundLinks(calculatorId)
    .map((edge) => {
      const target = getCalculatorById(edge.to);
      if (!target) return null;
      return {
        href: calculatorPath(locale, target),
        anchor: locale === "es" ? edge.anchorEs : edge.anchorEn,
        title: dict.calculators[edge.to].title,
        placement: edge.placement,
      };
    })
    .filter((link): link is ResolvedLink => link !== null);

  if (resolved.length === 0) return null;

  return (
    <div className="space-y-8">
      {GROUP_ORDER.map((placement) => {
        const items = resolved.filter((link) => link.placement === placement);
        if (items.length === 0) return null;

        const label = GROUP_LABELS[placement][locale === "es" ? "es" : "en"];

        return (
          <section key={placement} className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">{label}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={`${placement}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/30 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    <span className="flex items-start justify-between gap-2 font-medium text-slate-900 group-hover:text-amber-800">
                      <span className="first-letter:uppercase">{item.anchor}</span>
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-600"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-1 text-sm text-slate-600">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
