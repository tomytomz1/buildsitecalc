import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/config/site";
import { StaticPageSections } from "@/components/pages/StaticPageSections";
import { getDictionary } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const page = getDictionary(localeParam).pages.glossary;

  return buildPageMetadata({
    locale: localeParam,
    title: page.title,
    description: page.metaDescription,
    pathWithoutLocale: "glossary",
  });
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const page = getDictionary(locale).pages.glossary;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 animate-fade-up">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          {page.title}
        </h1>
      </header>

      <StaticPageSections sections={page.sections} />

      <dl className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {page.terms.map((entry) => (
          <div key={entry.term} className="px-5 py-4">
            <dt className="font-semibold text-slate-900">{entry.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-700">
              {entry.definition}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
