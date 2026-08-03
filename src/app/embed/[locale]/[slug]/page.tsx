import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, siteConfig, type Locale } from "@/config/site";
import { CalculatorWidget } from "@/components/calculator/CalculatorWidget";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { getAllCalculators, getCalculatorBySlug } from "@/lib/calculators/registry";
import { getCalculatorEngine } from "@/lib/calculators/engine";
import type { CalcSuccess } from "@/lib/calculators/types";
import { getDictionary } from "@/lib/i18n";
import { buildCalculatorLabels, getCalculatorSlug } from "@/lib/page-helpers";
import { calculatorPath } from "@/lib/routes";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "es"];

  return locales.flatMap((locale) =>
    getAllCalculators().map((calc) => ({
      locale,
      slug: getCalculatorSlug(locale, calc),
    })),
  );
}

/**
 * Embeds must never compete with the calculator page they are a copy of, so
 * they are excluded from indexing and canonicalised to the real page. The
 * canonical is belt-and-braces: a `noindex` page's canonical is not used for
 * consolidation, but it makes the relationship explicit to any crawler that
 * reads one signal and not the other.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const calc = getCalculatorBySlug(localeParam, slug);
  if (!calc) return {};

  const content = getDictionary(localeParam).calculators[calc.id];

  return {
    title: { absolute: content.title },
    description: content.metaDescription,
    robots: { index: false, follow: true },
    alternates: {
      canonical: absoluteUrl(calculatorPath(localeParam, calc)),
    },
  };
}

export default async function EmbedCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const calc = getCalculatorBySlug(locale, slug);
  if (!calc) notFound();

  const dict = getDictionary(locale);
  const content = dict.calculators[calc.id];
  const href = calculatorPath(locale, calc);
  const canonicalUrl = absoluteUrl(href);
  const labels = buildCalculatorLabels(dict, calc.id);

  const engine = getCalculatorEngine(calc.id);
  const defaultOutput = engine.calculate(engine.defaultInputs);
  const initialResult: CalcSuccess | null = defaultOutput.ok ? defaultOutput : null;

  const attribution =
    locale === "es"
      ? `Calculadora por ${siteConfig.brand.name}`
      : `Calculator by ${siteConfig.brand.name}`;
  const fullVersion =
    locale === "es" ? "Ver la versión completa" : "Open the full version";

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-4 p-4">
      <HtmlLang locale={locale} />

      <h1 className="font-display text-xl font-semibold text-slate-900">
        {content.title}
      </h1>

      {/* The bare widget, not CalculatorPageClient: that wrapper writes to
          "recently viewed", and a visitor reading a third-party page has not
          visited this site. */}
      <CalculatorWidget
        calculatorId={calc.id}
        locale={locale}
        labels={labels}
        initialResult={initialResult}
      />

      {/* The attribution link is the entire point of the widget: it is what the
          host site gives back in exchange for the tool. `target="_blank"` so a
          click leaves the iframe rather than loading the full site inside it. */}
      <footer className="mt-auto border-t border-slate-200 pt-3 text-xs text-slate-600">
        <Link
          href={canonicalUrl}
          target="_blank"
          rel="noopener"
          className="font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          {attribution}
        </Link>
        <span className="mx-1.5 text-slate-400">·</span>
        <Link
          href={canonicalUrl}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-2 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          {fullVersion}
        </Link>
      </footer>
    </div>
  );
}
