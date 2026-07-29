import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import { getAllCalculators } from "@/lib/calculators/registry";
import { buildPageMetadata } from "@/lib/seo";
import { calculatorPath } from "@/lib/routes";
import { search } from "@/lib/search";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    title: dict.common.labels.allCalculators,
    description: dict.common.labels.allCalculators,
    pathWithoutLocale: "calculators",
  });
}

export default async function CalculatorsDirectoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { q } = await searchParams;

  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const query = q?.trim() ?? "";
  const allCalculators = getAllCalculators();
  const filtered = query ? search(query, locale) : allCalculators;

  return (
    <div className="animate-fade-up mx-auto max-w-6xl px-4 py-8">
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          {dict.common.labels.allCalculators}
        </h1>
        <p className="mt-2 text-slate-600">
          {dict.common.nav.calculators} — {filtered.length} {query ? `"${query}"` : ""}
        </p>
      </header>

      {query && filtered.length === 0 ? (
        <p className="mt-8 text-slate-600">{dict.common.labels.noResults}</p>
      ) : (
        <ul className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {filtered.map((calc) => {
            const content = dict.calculators[calc.id];
            const categoryTitle = dict.categories[calc.categoryId].title;

            return (
              <li key={calc.id}>
                <Link
                  href={calculatorPath(locale, calc)}
                  className="block px-5 py-4 transition-colors hover:bg-amber-50/40 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-inset"
                >
                  <span className="font-medium text-slate-900">{content.title}</span>
                  <span className="mt-0.5 block text-xs font-medium tracking-wide text-amber-700 uppercase">
                    {categoryTitle}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {content.shortDescription}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
