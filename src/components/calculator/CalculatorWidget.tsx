"use client";

import { useCallback, useEffect } from "react";
import { CalculatorForm } from "@/components/calculator/forms";
import type { CalculatorLabels } from "@/components/calculator/forms/types";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Button } from "@/components/ui/Button";
import { useCalculatorState } from "@/hooks/useCalculatorState";
import type { CalcResultField, CalcSuccess, CalculatorId } from "@/lib/calculators/types";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export type CalculatorWidgetProps = {
  calculatorId: CalculatorId;
  locale: "en" | "es";
  labels: CalculatorLabels;
  actions?: React.ReactNode;
  className?: string;
  onShareHelpersChange?: (helpers: ShareHelpers | null) => void;
  /** SSR-computed default result so initial HTML includes numbers for crawlers. */
  initialResult?: CalcSuccess | null;
};

export type ShareHelpers = {
  getShareText: () => string;
  getShareUrl: () => string;
};

function mapResultFields(
  fields: CalcResultField[],
  resultLabels: Record<string, string>,
): CalcResultField[] {
  return fields.map((field) => ({
    ...field,
    key: resultLabels[field.key] ?? field.key,
  }));
}

function formatFieldForShare(field: CalcResultField, locale: "en" | "es"): string {
  if (typeof field.value === "string") {
    return field.unit ? `${field.value} ${field.unit}` : field.value;
  }

  let formatted: string;
  switch (field.format) {
    case "currency":
      formatted = formatCurrency(field.value, locale);
      break;
    case "percent":
      formatted = formatPercent(field.value, locale);
      break;
    case "integer":
      formatted = formatNumber(field.value, locale, { maximumFractionDigits: 0 });
      break;
    default:
      formatted = formatNumber(field.value, locale);
  }

  return field.unit ? `${formatted} ${field.unit}` : formatted;
}

function buildShareText(result: CalcSuccess | null, locale: "en" | "es"): string {
  if (!result) return "";

  const lines: string[] = [];
  for (const field of [...result.primary, ...result.secondary]) {
    lines.push(`${field.key}: ${formatFieldForShare(field, locale)}`);
  }
  return lines.join("\n");
}

export function CalculatorWidget({
  calculatorId,
  locale,
  labels,
  actions,
  className,
  onShareHelpersChange,
  initialResult = null,
}: CalculatorWidgetProps) {
  const { inputs, result, errors, calculate, reset, setField, setInputs, hasCalculated } =
    useCalculatorState(calculatorId, { initialResult });

  const getShareUrl = useCallback(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const getShareText = useCallback(() => {
    if (!result) return "";
    const mappedPrimary = mapResultFields(result.primary, labels.results);
    const mappedSecondary = mapResultFields(result.secondary, labels.results);
    return buildShareText(
      { ...result, primary: mappedPrimary, secondary: mappedSecondary },
      locale,
    );
  }, [result, labels.results, locale]);

  useEffect(() => {
    if (!onShareHelpersChange) return;
    if (hasCalculated && result) {
      onShareHelpersChange({ getShareText, getShareUrl });
    } else {
      onShareHelpersChange(null);
    }
  }, [hasCalculated, result, getShareText, getShareUrl, onShareHelpersChange]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculate();
  };

  const primaryResults = result ? mapResultFields(result.primary, labels.results) : [];
  const secondaryResults = result
    ? mapResultFields(result.secondary, labels.results)
    : [];

  return (
    <div className={className}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
        <form
          noValidate
          className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          onSubmit={handleSubmit}
        >
          <CalculatorForm
            calculatorId={calculatorId}
            inputs={inputs}
            errors={errors}
            labels={labels}
            locale={locale}
            setField={setField}
            setInputs={setInputs}
          />

          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit" variant="primary">
              {labels.ui.calculate}
            </Button>
            <Button type="button" variant="outline" onClick={reset}>
              {labels.ui.reset}
            </Button>
          </div>
        </form>

        <aside className="space-y-4 lg:sticky lg:top-6">
          <ResultCard
            title={labels.ui.results}
            primary={primaryResults}
            secondary={secondaryResults}
            locale={locale}
            emptyMessage={
              labels.ui.emptyResults ?? "Enter values and calculate to see results."
            }
          />
          {result?.meta ? (
            <div className="space-y-2">
              {typeof result.meta.disclaimer === "string" ? (
                <p
                  role="note"
                  className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950"
                >
                  {result.meta.disclaimer}
                </p>
              ) : null}
              {typeof result.meta.manualJDisclaimer === "string" ? (
                <p
                  role="note"
                  className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950"
                >
                  {result.meta.manualJDisclaimer}
                </p>
              ) : null}
              {typeof result.meta.riserWarning === "string" ? (
                <p
                  role="status"
                  className="rounded-md border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-950"
                >
                  {result.meta.riserWarning}
                </p>
              ) : null}
            </div>
          ) : null}
          {actions}
        </aside>
      </div>
    </div>
  );
}

export { mapResultFields, buildShareText };
