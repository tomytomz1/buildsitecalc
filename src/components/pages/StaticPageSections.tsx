import type { PageSection } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function StaticPageSections({
  sections,
  className,
}: {
  sections: PageSection[];
  className?: string;
}) {
  return (
    <div className={cn("prose-pch space-y-8", className)}>
      {sections.map((section, index) => (
        <section key={section.heading ?? index}>
          {section.heading ? (
            <h2 className="font-display text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
          ) : null}
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
