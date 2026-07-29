import { cn, formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import type { CalcResultField } from "@/lib/calculators/types";

export type ResultCardProps = {
  title?: string;
  primary: CalcResultField[];
  secondary?: CalcResultField[];
  locale?: "en" | "es";
  emptyMessage?: string;
  className?: string;
};

function formatFieldValue(field: CalcResultField, locale: "en" | "es"): string {
  if (typeof field.value === "string") return field.value;

  switch (field.format) {
    case "currency":
      return formatCurrency(field.value, locale);
    case "percent":
      return formatPercent(field.value, locale);
    case "integer":
      return formatNumber(field.value, locale, { maximumFractionDigits: 0 });
    case "number":
    default:
      return formatNumber(field.value, locale);
  }
}

function ResultRow({
  field,
  locale,
  emphasized,
}: {
  field: CalcResultField;
  locale: "en" | "es";
  emphasized?: boolean;
}) {
  const formatted = formatFieldValue(field, locale);
  const display = field.unit ? `${formatted} ${field.unit}` : formatted;

  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4",
        emphasized ? "text-lg font-semibold text-slate-900" : "text-sm text-slate-700",
      )}
    >
      <dt className="font-medium">{field.key}</dt>
      <dd className={cn("tabular-nums", emphasized && "text-amber-700")}>{display}</dd>
    </div>
  );
}

export function ResultCard({
  title = "Results",
  primary,
  secondary = [],
  locale = "en",
  emptyMessage = "Enter values to see results.",
  className,
}: ResultCardProps) {
  const hasResults = primary.length > 0 || secondary.length > 0;

  return (
    <section
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm",
        className,
      )}
    >
      <h2 className="mb-4 text-base font-semibold text-slate-900">{title}</h2>

      {!hasResults ? (
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      ) : (
        <dl className="space-y-3">
          {primary.map((field) => (
            <ResultRow key={field.key} field={field} locale={locale} emphasized />
          ))}
          {secondary.length > 0 ? (
            <div className="space-y-2 border-t border-slate-200 pt-3">
              {secondary.map((field) => (
                <ResultRow key={field.key} field={field} locale={locale} />
              ))}
            </div>
          ) : null}
        </dl>
      )}
    </section>
  );
}
