/**
 * Central site configuration - brand, domain, contact, analytics, ads.
 * Update values here; do not scatter across components.
 */
export const siteConfig = {
  brand: {
    name: "BuildSite Calc",
    nameShort: "BuildSiteCalc",
    tagline: {
      en: "Every measurement, material, and project-cost calculator a homeowner or contractor needs.",
      es: "Todas las calculadoras de medidas, materiales y costos que necesita para su proyecto.",
    },
    description: {
      en: "Free home-improvement calculators for concrete, paint, flooring, roofing, landscaping, fencing, HVAC, moving, and project costs. Transparent formulas, US customary and metric units.",
      es: "Calculadoras gratuitas de mejoras del hogar para concreto, pintura, pisos, techos, jardinería, cercas, HVAC, mudanzas y costos de proyecto. Fórmulas transparentes, unidades US y métricas.",
    },
  },
  domain: "https://buildsitecalc.com",
  contactEmail: "hello@buildsitecalc.com",
  locale: {
    default: "en" as const,
    supported: ["en", "es"] as const,
  },
  social: {
    twitter: "",
    facebook: "",
    youtube: "",
    pinterest: "",
    linkedin: "",
  },
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  },
  ads: {
    adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "",
    enabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true",
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "",
  },
  affiliates: {
    enabled: process.env.NEXT_PUBLIC_AFFILIATES_ENABLED === "true",
  },
  legal: {
    companyName: "BuildSite Calc",
    jurisdiction: "United States",
    lastUpdated: "2026-07-28",
  },
} as const;

export type Locale = (typeof siteConfig.locale.supported)[number];

export function isLocale(value: string): value is Locale {
  return (siteConfig.locale.supported as readonly string[]).includes(value);
}

export function absoluteUrl(path = ""): string {
  const base = siteConfig.domain.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}
