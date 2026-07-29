import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { RichText } from "@/components/calculator/RichText";

export type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export type FaqAccordionProps = {
  title?: string;
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({
  title = "Frequently asked questions",
  items,
  className,
}: FaqAccordionProps) {
  if (items.length === 0) return null;

  return (
    <section className={cn("space-y-4", className)} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
              {typeof item.answer === "string" ? (
                <RichText text={item.answer} />
              ) : (
                item.answer
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
