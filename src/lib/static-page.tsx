import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/config/site";
import { StaticPageSections } from "@/components/pages/StaticPageSections";
import { getDictionary } from "@/lib/i18n";
import type { PagesDictionary } from "@/lib/i18n/types";
import { buildPageMetadata } from "@/lib/seo";

type StaticPageKey = keyof PagesDictionary;

export function createStaticPageHandlers(pageKey: StaticPageKey) {
  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale: localeParam } = await params;
    if (!isLocale(localeParam)) return {};

    const page = getDictionary(localeParam).pages[pageKey];

    return buildPageMetadata({
      locale: localeParam,
      title: page.title,
      description: page.metaDescription,
      pathWithoutLocale: pageKey,
    });
  }

  async function Page({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale: localeParam } = await params;
    if (!isLocale(localeParam)) notFound();

    const locale: Locale = localeParam;
    const page = getDictionary(locale).pages[pageKey];

    return (
      <div className="mx-auto max-w-3xl px-4 py-8 animate-fade-up">
        <header className="mb-8">
          <h1 className="font-display text-3xl font-bold text-slate-900">
            {page.title}
          </h1>
        </header>
        <StaticPageSections sections={page.sections} />
      </div>
    );
  }

  return { generateMetadata, default: Page };
}
