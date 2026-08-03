import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { SavedEstimatesClient } from "@/components/estimates/SavedEstimatesClient";
import { estimateLabel } from "@/lib/estimates/labels";
import { getDictionary } from "@/lib/i18n";
import { localePath } from "@/lib/routes";
import { buildAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

/**
 * Deliberately `noindex`: the content of this page lives in one visitor's
 * browser, so what a crawler would see is an empty shell. It is still a real
 * page with hreflang pairs because it is linked from the header and is meant to
 * be bookmarked.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return {
    title: { absolute: estimateLabel(localeParam, "pageTitle") },
    description: estimateLabel(localeParam, "metaDescription"),
    robots: { index: false, follow: true },
    alternates: buildAlternates(localeParam, "my-estimates"),
  };
}

export default async function MyEstimatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const title = estimateLabel(locale, "pageTitle");

  return (
    <div className="animate-fade-up mx-auto max-w-3xl px-4 py-8">
      <nav className="no-print mb-4 text-sm">
        <Link href={localePath(locale)} className="text-slate-600 hover:text-amber-700">
          {dict.common.nav.home}
        </Link>
        <span className="mx-2 text-slate-400">/</span>
        <span className="font-medium text-slate-900">{title}</span>
      </nav>

      <header className="no-print">
        <h1 className="font-display text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {estimateLabel(locale, "pageDescription")}
        </p>
        <p className="mt-2 text-xs text-slate-500">
          {estimateLabel(locale, "privacyNote")}
        </p>
      </header>

      <div className="mt-8">
        <SavedEstimatesClient locale={locale} />
      </div>

      <p className="no-print mt-8 text-xs text-slate-500">
        <Link
          href={absoluteUrl(localePath(locale, "calculators"))}
          className="underline underline-offset-2 hover:text-amber-800"
        >
          {estimateLabel(locale, "emptyCta")}
        </Link>
      </p>
    </div>
  );
}
