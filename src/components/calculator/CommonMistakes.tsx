import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type CommonMistakesProps = {
  title?: string;
  items: string[];
  className?: string;
};

export function CommonMistakes({
  title = "Common mistakes",
  items,
  className,
}: CommonMistakesProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("space-y-3", className)}>
      <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
        <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
        {title}
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
