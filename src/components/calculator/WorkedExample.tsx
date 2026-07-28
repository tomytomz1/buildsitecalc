import { cn } from "@/lib/utils";

export type WorkedExampleProps = {
  title?: string;
  steps: React.ReactNode[];
  result?: React.ReactNode;
  className?: string;
};

export function WorkedExample({
  title = "Worked example",
  steps,
  result,
  className,
}: WorkedExampleProps) {
  if (steps.length === 0) return null;

  return (
    <section
      className={cn(
        "rounded-lg border border-amber-200 bg-amber-50/50 p-5",
        className,
      )}
    >
      <h2 className="mb-4 text-lg font-semibold text-slate-900">{title}</h2>
      <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-700">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {result ? (
        <p className="mt-4 rounded-md border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-slate-900">
          {result}
        </p>
      ) : null}
    </section>
  );
}
