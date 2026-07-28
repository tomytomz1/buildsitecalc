import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, isLocale, type Locale } from "@/config/site";
import { CategoryIcon } from "@/components/pages/CategoryIcon";
import { HomeSearch } from "@/components/pages/HomeSearch";
import { RecentlyViewed } from "@/components/layout/RecentlyViewed";
import { getDictionary } from "@/lib/i18n";
import { getAllCalculators, getAllCategories } from "@/lib/calculators/registry";
import {
  buildPageMetadata,
  JsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import {
  buildSearchCalculators,
  getCategoryTitle,
} from "@/lib/page-helpers";
import { calculatorPath, categoryPath } from "@/lib/routes";

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
    title: dict.home.title,
    description: siteConfig.brand.description[localeParam],
    pathWithoutLocale: "",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const categories = getAllCategories();
  const popular = getAllCalculators().filter((calc) => calc.popular);
  const searchCalculators = buildSearchCalculators(locale, dict);

  return (
    <>
      <JsonLd data={[websiteJsonLd(locale), organizationJsonLd()]} />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <section className="animate-fade-up text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            {siteConfig.brand.name}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {dict.home.title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            {dict.home.subtitle}
          </p>
          <div className="mt-6">
            <HomeSearch
              locale={locale}
              placeholder={dict.home.searchPlaceholder}
              calculators={searchCalculators}
            />
          </div>
        </section>

        {popular.length > 0 ? (
          <section
            className="mt-10 animate-fade-up"
            style={{ animationDelay: "80ms" }}
            aria-labelledby="popular-heading"
          >
            <h2
              id="popular-heading"
              className="font-display text-xl font-semibold text-slate-900"
            >
              {dict.home.popularTitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {popular.map((calc) => (
                <li key={calc.id}>
                  <Link
                    href={calculatorPath(locale, calc)}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {dict.calculators[calc.id].title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section
          className="mt-12 animate-fade-up"
          style={{ animationDelay: "120ms" }}
          aria-labelledby="categories-heading"
        >
          <h2
            id="categories-heading"
            className="font-display text-xl font-semibold text-slate-900"
          >
            {dict.home.categoriesTitle}
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={categoryPath(locale, category)}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-amber-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                    <CategoryIcon name={category.icon} />
                  </span>
                  <span className="mt-3 font-display text-lg font-semibold text-slate-900 group-hover:text-amber-900">
                    {getCategoryTitle(locale, dict, category)}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-slate-600">
                    {dict.categories[category.id].description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up"
          style={{ animationDelay: "160ms" }}
          aria-labelledby="how-estimates-heading"
        >
          <h2
            id="how-estimates-heading"
            className="font-display text-xl font-semibold text-slate-900"
          >
            {dict.home.howEstimatesWork.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            {dict.home.howEstimatesWork.body}
          </p>
        </section>

        <section
          className="mt-10 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <RecentlyViewed title={dict.home.recentlyTitle} />
        </section>
      </div>
    </>
  );
}
