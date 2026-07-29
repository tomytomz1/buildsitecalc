import { cn } from "@/lib/utils";

export type FormulaBlockProps = {
  formula: string;
  label?: string;
  className?: string;
};

export function FormulaBlock({
  formula,
  label = "Formula",
  className,
}: FormulaBlockProps) {
  return (
    <figure
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-4 shadow-sm",
        className,
      )}
    >
      <figcaption className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
        {label}
      </figcaption>
      <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-slate-800">
        <code>{formula}</code>
      </pre>
    </figure>
  );
}
