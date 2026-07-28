import { cn } from "@/lib/utils";

export type AssumptionsListProps = {
  title?: string;
  items: string[];
  className?: string;
};

export function AssumptionsList({
  title = "Assumptions",
  items,
  className,
}: AssumptionsListProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("space-y-3", className)}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
