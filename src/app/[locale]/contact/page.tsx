import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, siteConfig, type Locale } from "@/config/site";
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

  const page = getDictionary(localeParam).pages.contact;

  return buildPageMetadata({
    locale: localeParam,
    title: page.title,
    description: page.metaDescription,
    pathWithoutLocale: "contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const page = getDictionary(locale).pages.contact;
  const subject =
    locale === "es" ? "Consulta desde BuildSiteCalc" : "Inquiry from BuildSiteCalc";
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="animate-fade-up mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">{page.title}</h1>
      </header>

      <StaticPageSections sections={page.sections} />

      <p className="mt-8">
        <a
          href={mailto}
          className="inline-flex rounded-md bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
        >
          {siteConfig.contactEmail}
        </a>
      </p>
    </div>
  );
}
