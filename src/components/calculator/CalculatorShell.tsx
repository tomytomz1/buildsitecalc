import { cn } from "@/lib/utils";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

export type CalculatorShellProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  form: React.ReactNode;
  results?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

export function CalculatorShell({
  title,
  description,
  breadcrumbs,
  form,
  results,
  actions,
  children,
  aside,
  className,
}: CalculatorShellProps) {
  return (
    <article className={cn("mx-auto w-full max-w-6xl px-4 py-8", className)}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}

      <header className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {description}
          </p>
        ) : null}
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start">
        <div className="space-y-8">
          <section
            aria-labelledby="calculator-form-heading"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2 id="calculator-form-heading" className="sr-only">
              Calculator inputs
            </h2>
            {form}
          </section>

          {children ? (
            <div className="space-y-10">{children}</div>
          ) : null}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6">
          {results ? (
            <section aria-labelledby="calculator-results-heading">
              <h2 id="calculator-results-heading" className="sr-only">
                Calculator results
              </h2>
              {results}
            </section>
          ) : null}
          {actions}
          {aside}
        </aside>
      </div>
    </article>
  );
}
