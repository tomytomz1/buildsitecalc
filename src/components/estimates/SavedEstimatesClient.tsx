"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, type Locale } from "@/config/site";
import { estimateLabel } from "@/lib/estimates/labels";
import {
  estimateHeadline,
  estimateHref,
  findEstimate,
  type SavedEstimate,
} from "@/lib/estimates/model";
import {
  clearSavedEstimates,
  deleteSavedEstimate,
  useSavedEstimates,
} from "@/lib/estimates/store";
import { localePath } from "@/lib/routes";

export type SavedEstimatesClientProps = {
  locale: Locale;
};

function formatSavedAt(iso: string, locale: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale === "es" ? "es-419" : "en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function SavedEstimatesClient({ locale }: SavedEstimatesClientProps) {
  const estimates = useSavedEstimates();
  const [openId, setOpenId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const open = useMemo(() => findEstimate(estimates, openId), [estimates, openId]);

  const handleCopyLink = useCallback(async (estimate: SavedEstimate) => {
    setCopyFailed(false);
    const url = `${siteConfig.domain}${estimateHref(estimate)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyFailed(true);
    }
  }, []);

  if (estimates.length === 0) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">
          {estimateLabel(locale, "emptyTitle")}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {estimateLabel(locale, "emptyBody")}
        </p>
        <p className="mt-4">
          <Link
            href={localePath(locale, "calculators")}
            className="text-sm font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {estimateLabel(locale, "emptyCta")}
          </Link>
        </p>
      </section>
    );
  }

  if (open) {
    return (
      <section className="space-y-4">
        <div className="no-print flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setOpenId(null)}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {estimateLabel(locale, "backToList")}
          </Button>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            {estimateLabel(locale, "print")}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleCopyLink(open)}
          >
            {copied ? estimateLabel(locale, "copied") : estimateLabel(locale, "copyLink")}
          </Button>
          <Link
            href={estimateHref(open)}
            className="text-sm font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {estimateLabel(locale, "open")}
          </Link>
          {copyFailed ? (
            <p role="alert" className="w-full text-sm text-red-700">
              {estimateLabel(locale, "copyFailed")}
            </p>
          ) : null}
        </div>

        <EstimateSheet estimate={open} locale={locale} />
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <ul className="space-y-3">
        {estimates.map((estimate) => {
          const headline = estimateHeadline(estimate);

          return (
            <li
              key={estimate.id}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-base font-semibold text-slate-900">
                  {estimate.title}
                </h2>
                <p className="text-xs text-slate-500">
                  {`${estimateLabel(locale, "savedOn")} ${formatSavedAt(estimate.savedAt, locale)}`}
                </p>
              </div>

              {headline ? (
                <p className="mt-1 text-sm text-slate-700">
                  <span className="text-slate-500">{headline.label}: </span>
                  <span className="font-semibold tabular-nums">{headline.value}</span>
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Link
                  href={estimateHref(estimate)}
                  className="text-sm font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                >
                  {estimateLabel(locale, "open")}
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setOpenId(estimate.id)}
                >
                  {estimateLabel(locale, "printSheet")}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteSavedEstimate(estimate.id)}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  {estimateLabel(locale, "remove")}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => clearSavedEstimates()}
        >
          {estimateLabel(locale, "clearAll")}
        </Button>
      </div>
    </section>
  );
}

/**
 * The printable sheet. Kept compact on purpose: the whole point is that it fits
 * on one sheet of paper next to a materials list at the supplier counter. Site
 * chrome and ads are already hidden by the `@media print` block in globals.css.
 */
function EstimateSheet({
  estimate,
  locale,
}: {
  estimate: SavedEstimate;
  locale: Locale;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 print:rounded-none print:border-0 print:p-0">
      <header className="border-b border-slate-200 pb-3">
        <h2 className="font-display text-xl font-bold text-slate-900">
          {estimate.title}
        </h2>
        <p className="mt-1 text-xs text-slate-600">
          {`${estimateLabel(locale, "savedOn")} ${formatSavedAt(estimate.savedAt, locale)}`}
        </p>
        <p className="text-xs text-slate-600">
          {`${estimateLabel(locale, "sheetSource")} ${siteConfig.domain}${estimate.href}`}
        </p>
      </header>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {estimate.inputs.length > 0 ? (
          <section>
            <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              {estimateLabel(locale, "inputsHeading")}
            </h3>
            <dl className="mt-2 space-y-1 text-sm">
              {estimate.inputs.map((line) => (
                <div key={line.label} className="flex justify-between gap-4">
                  <dt className="text-slate-600">{line.label}</dt>
                  <dd className="text-slate-900 tabular-nums">{line.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section>
          <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            {estimateLabel(locale, "resultsHeading")}
          </h3>
          <dl className="mt-2 space-y-1 text-sm">
            {estimate.results.map((line) => (
              <div key={line.label} className="flex justify-between gap-4">
                <dt className="text-slate-600">{line.label}</dt>
                <dd className="font-semibold text-slate-900 tabular-nums">
                  {line.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <footer className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-600">
        {estimateLabel(locale, "sheetDisclaimer")}
      </footer>
    </article>
  );
}
