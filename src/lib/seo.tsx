import type { Metadata } from "next";
import {
  absoluteUrl,
  getConfiguredSocialLinks,
  siteConfig,
  type Locale,
} from "@/config/site";

/**
 * Per-locale paths (without the locale prefix) for pages whose slug differs
 * between locales — e.g. `calculators/concrete-slab` in EN is
 * `calculators/losa-de-concreto` in ES. Omit for pages that share a slug.
 */
export type LocalizedPaths = Record<Locale, string>;

function normalizePaths(
  pathWithoutLocale: string,
  pathsByLocale?: LocalizedPaths,
): LocalizedPaths {
  const fallback = pathWithoutLocale.replace(/^\//, "");
  return {
    en: (pathsByLocale?.en ?? fallback).replace(/^\//, ""),
    es: (pathsByLocale?.es ?? fallback).replace(/^\//, ""),
  };
}

/** Strips a trailing "| BuildSiteCalc" so the OG card doesn't show the brand
 *  twice — the card already draws the wordmark. */
function stripBrandSuffix(value: string): string {
  const suffix = ` | ${siteConfig.brand.name}`;
  return value.endsWith(suffix) ? value.slice(0, -suffix.length) : value;
}

export function buildAlternates(
  locale: Locale,
  pathWithoutLocale: string,
  pathsByLocale?: LocalizedPaths,
): Metadata["alternates"] {
  const paths = normalizePaths(pathWithoutLocale, pathsByLocale);
  const enPath = paths.en ? `/en/${paths.en}` : "/en";
  const esPath = paths.es ? `/es/${paths.es}` : "/es";
  return {
    canonical: absoluteUrl(locale === "es" ? esPath : enPath),
    languages: {
      "en-US": absoluteUrl(enPath),
      "es-ES": absoluteUrl(esPath),
      "x-default": absoluteUrl(enPath),
    },
  };
}

export function buildPageMetadata(options: {
  locale: Locale;
  title: string;
  description: string;
  pathWithoutLocale: string;
  /** Supply when the slug differs per locale, so hreflang targets resolve. */
  pathsByLocale?: LocalizedPaths;
  ogType?: "website" | "article";
}): Metadata {
  const {
    locale,
    title,
    description,
    pathWithoutLocale,
    pathsByLocale,
    ogType = "website",
  } = options;
  const fullTitle = title.includes(siteConfig.brand.name)
    ? title
    : `${title} | ${siteConfig.brand.name}`;
  const paths = normalizePaths(pathWithoutLocale, pathsByLocale);
  const localePath = paths[locale];
  const path = localePath ? `/${locale}/${localePath}` : `/${locale}`;
  const url = absoluteUrl(path);
  const ogTitle = stripBrandSuffix(title);
  const ogImage = absoluteUrl(
    `/api/og?title=${encodeURIComponent(ogTitle)}&locale=${locale}`,
  );

  return {
    // `absolute` bypasses the root layout's `%s | BuildSiteCalc` template.
    // Without it the brand is appended twice.
    title: { absolute: fullTitle },
    description,
    alternates: buildAlternates(locale, pathWithoutLocale, pathsByLocale),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      type: ogType,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand.name,
    url: absoluteUrl(`/${locale}`),
    description: siteConfig.brand.description[locale],
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl(`/${locale}/calculators?q={search_term_string}`),
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  const sameAs = getConfiguredSocialLinks().map((link) => link.url);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    url: siteConfig.domain,
    email: siteConfig.contactEmail,
    description: siteConfig.brand.description.en,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\*\*/g, ""),
      },
    })),
  };
}

export function webApplicationJsonLd(options: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: options.name,
    description: options.description,
    url: options.url,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    inLanguage: options.locale,
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListJsonLd(name: string, items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
