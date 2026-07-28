import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import {
  getAllCategories,
  getCalculatorsByCategory,
  getCategoryBySlug,
} from "@/lib/calculators/registry";
import {
  buildPageMetadata,
  itemListJsonLd,
  JsonLd,
} from "@/lib/seo";
import { calculatorPath, localePath } from "@/lib/routes";

function getCategorySlug(locale: Locale, category: { slugEn: string; slugEs: string }) {
  return locale === "es" ? category.slugEs : category.slugEn;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "es"];

  return locales.flatMap((locale) =>
    getAllCategories().map((category) => ({
      locale,
      slug: getCategorySlug(locale, category),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const category = getCategoryBySlug(localeParam, slug);
  if (!category) return {};

  const content = getDictionary(localeParam).categories[category.id];

  return buildPageMetadata({
    locale: localeParam,
    title: content.title,
    description: content.description,
    pathWithoutLocale: `categories/${slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const category = getCategoryBySlug(locale, slug);
  if (!category) notFound();

  const dict = getDictionary(locale);
  const content = dict.categories[category.id];
  const calculators = getCalculatorsByCategory(category.id);

  const listItems = calculators.map((calc) => ({
    name: dict.calculators[calc.id].title,
    url: absoluteUrl(calculatorPath(locale, calc)),
  }));

  return (
    <>
      <JsonLd
        data={itemListJsonLd(content.title, listItems)}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 animate-fade-up">
        <nav className="mb-4 text-sm">
          <Link
            href={localePath(locale)}
            className="text-slate-600 hover:text-amber-700"
          >
            {dict.common.nav.home}
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="font-medium text-slate-900">{content.title}</span>
        </nav>

        <header className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-slate-900">
            {content.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {content.description}
          </p>
        </header>

        <ul className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {calculators.map((calc) => {
            const calcContent = dict.calculators[calc.id];

            return (
              <li key={calc.id}>
                <Link
                  href={calculatorPath(locale, calc)}
                  className="block px-5 py-4 transition-colors hover:bg-amber-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
                >
                  <span className="font-medium text-slate-900">
                    {calcContent.title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {calcContent.description}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
