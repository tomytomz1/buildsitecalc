import type { PageSection } from "@/lib/i18n/types";
import { RichText } from "@/components/calculator/RichText";

export function CalculatorSections({ sections }: { sections: PageSection[] }) {
  if (sections.length === 0) return null;

  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <section key={`${section.heading ?? "section"}-${index}`} className="space-y-3">
          {section.heading ? (
            <h2 className="text-lg font-semibold text-slate-900">{section.heading}</h2>
          ) : null}
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className="text-sm leading-relaxed text-slate-700">
              <RichText text={paragraph} />
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
