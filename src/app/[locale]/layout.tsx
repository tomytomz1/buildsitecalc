import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, siteConfig, type Locale } from "@/config/site";
import { AppHeader } from "@/components/layout/AppHeader";
import { ConsentBanner } from "@/components/layout/ConsentBanner";
import { Footer } from "@/components/layout/Footer";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { SkipNav } from "@/components/ui/SkipNav";
import { getDictionary } from "@/lib/i18n";
import { buildCategoryLinks, buildSearchCalculators } from "@/lib/page-helpers";
import { workflowLabel } from "@/lib/workflows/labels";

export function generateStaticParams() {
  return siteConfig.locale.supported.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const categoryLinks = buildCategoryLinks(locale, dict);
  const searchCalculators = buildSearchCalculators(locale, dict);

  return (
    <>
      <HtmlLang locale={locale} />
      <SkipNav label={dict.common.buttons.skipToContent} />
      <div className="flex min-h-screen flex-col">
        <AppHeader
          locale={locale}
          labels={{
            home: dict.common.nav.home,
            calculators: dict.common.nav.calculators,
            categories: dict.common.nav.categories,
            projects: workflowLabel(locale, "indexTitle"),
            search: dict.common.buttons.search,
          }}
          categoryLinks={categoryLinks}
          searchCalculators={searchCalculators}
          searchHref={`/${locale}/calculators`}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} links={dict.footer.links} />
        <ConsentBanner />
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  return {
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}
