import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type RelatedCalculator = {
  href: string;
  title: string;
  description?: string;
};

export type RelatedCalculatorsProps = {
  title?: string;
  items: RelatedCalculator[];
  className?: string;
};

export function RelatedCalculators({
  title = "Related calculators",
  items,
  className,
}: RelatedCalculatorsProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span className="flex items-center justify-between gap-2 font-medium text-slate-900 group-hover:text-amber-800">
                {item.title}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-600"
                  aria-hidden="true"
                />
              </span>
              {item.description ? (
                <span className="mt-1 text-sm text-slate-600">
                  {item.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
