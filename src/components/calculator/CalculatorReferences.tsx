import type { CalculatorReference } from "@/lib/i18n/types";

export function CalculatorReferences({
  title,
  updatedLabel,
  lastUpdated,
  references,
  locale,
}: {
  title: string;
  updatedLabel: string;
  lastUpdated?: string;
  references: CalculatorReference[];
  locale: "en" | "es";
}) {
  if (references.length === 0 && !lastUpdated) return null;

  const formattedDate = lastUpdated
    ? new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${lastUpdated}T00:00:00Z`))
    : null;

  return (
    <section className="space-y-3" aria-labelledby="references-heading">
      <h2 id="references-heading" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      {formattedDate ? (
        <p className="text-sm text-slate-600">
          {updatedLabel}: <time dateTime={lastUpdated}>{formattedDate}</time>
        </p>
      ) : null}
      {references.length > 0 ? (
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
          {references.map((reference) => (
            <li key={reference.url}>
              <a
                href={reference.url}
                className="font-medium text-amber-800 underline decoration-amber-300 underline-offset-2 hover:text-amber-950"
              >
                {reference.label}
              </a>{" "}
              — {reference.publisher} ({reference.year})
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
}
