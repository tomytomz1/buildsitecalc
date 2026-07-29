import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import { getAllCategories, getCalculatorsByCategory } from "@/lib/calculators/registry";
import { breadcrumbJsonLd, buildPageMetadata, itemListJsonLd, JsonLd } from "@/lib/seo";
import { calculatorPath, categoryPath, localePath } from "@/lib/routes";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

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
    title: dict.common.labels.categories,
    description: dict.home.subtitle,
    pathWithoutLocale: "categories",
  });
}

export default async function CategoriesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const categories = getAllCategories();

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd(
            dict.common.labels.categories,
            categories.map((category) => ({
              name: dict.categories[category.id].title,
              url: absoluteUrl(categoryPath(locale, category)),
            })),
          ),
          breadcrumbJsonLd([
            { name: dict.common.nav.home, url: absoluteUrl(localePath(locale)) },
            {
              name: dict.common.labels.categories,
              url: absoluteUrl(localePath(locale, "categories")),
            },
          ]),
        ]}
      />

      <div className="animate-fade-up mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-4 text-sm">
          <Link href={localePath(locale)} className="text-slate-600 hover:text-amber-700">
            {dict.common.nav.home}
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="font-medium text-slate-900">
            {dict.common.labels.categories}
          </span>
        </nav>

        <header className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-slate-900">
            {dict.common.labels.categories}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {dict.home.subtitle}
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const content = dict.categories[category.id];
            const calculators = getCalculatorsByCategory(category.id);

            return (
              <li
                key={category.id}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  <Link
                    href={categoryPath(locale, category)}
                    className="hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    {content.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {content.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {calculators.map((calc) => (
                    <li key={calc.id}>
                      <Link
                        href={calculatorPath(locale, calc)}
                        className="text-sm text-slate-700 underline-offset-2 hover:text-amber-700 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                      >
                        {dict.calculators[calc.id].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
