import type { Metadata } from "next";
import { absoluteUrl, siteConfig, type Locale } from "@/config/site";

export function buildAlternates(
  locale: Locale,
  pathWithoutLocale: string,
): Metadata["alternates"] {
  const clean = pathWithoutLocale.replace(/^\//, "");
  const enPath = clean ? `/en/${clean}` : "/en";
  const esPath = clean ? `/es/${clean}` : "/es";
  return {
    canonical: absoluteUrl(locale === "es" ? esPath : enPath),
    languages: {
      en: absoluteUrl(enPath),
      es: absoluteUrl(esPath),
      "x-default": absoluteUrl(enPath),
    },
  };
}

export function buildPageMetadata(options: {
  locale: Locale;
  title: string;
  description: string;
  pathWithoutLocale: string;
  ogType?: "website" | "article";
}): Metadata {
  const { locale, title, description, pathWithoutLocale, ogType = "website" } =
    options;
  const fullTitle = title.includes(siteConfig.brand.name)
    ? title
    : `${title} | ${siteConfig.brand.name}`;
  const clean = pathWithoutLocale.replace(/^\//, "");
  const path = clean ? `/${locale}/${clean}` : `/${locale}`;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: buildAlternates(locale, pathWithoutLocale),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    url: siteConfig.domain,
    email: siteConfig.contactEmail,
    description: siteConfig.brand.description.en,
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
        text: faq.answer,
      },
    })),
  };
}

export function webApplicationJsonLd(options: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
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
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
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

export function itemListJsonLd(
  name: string,
  items: { name: string; url: string }[],
) {
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

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
