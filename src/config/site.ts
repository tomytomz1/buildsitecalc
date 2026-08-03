/**
 * Central site configuration - brand, domain, contact, analytics, ads.
 * Update values here; do not scatter across components.
 */
export const siteConfig = {
  brand: {
    name: "BuildSiteCalc",
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
  /**
   * Absolute profile URLs. Anything set here is emitted as `sameAs` on the
   * Organization JSON-LD, which is how a search engine ties this domain to the
   * accounts that talk about it — a real entity signal for a site with no
   * backlink history.
   *
   * Read from the environment rather than hard-coded so a profile can be added
   * the moment it exists, without a code change. Invalid or empty values are
   * dropped by `getConfiguredSocialLinks`, so a half-filled config never emits a
   * `sameAs` pointing at a profile that does not exist.
   */
  social: {
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
    pinterest: process.env.NEXT_PUBLIC_SOCIAL_PINTEREST ?? "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
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
    companyName: "BuildSiteCalc",
    jurisdiction: "United States",
    lastUpdated: "2026-07-28",
  },
} as const;

export type Locale = (typeof siteConfig.locale.supported)[number];

export type SocialNetwork = keyof typeof siteConfig.social;

const SOCIAL_LABELS: Record<SocialNetwork, string> = {
  twitter: "Twitter / X",
  facebook: "Facebook",
  youtube: "YouTube",
  pinterest: "Pinterest",
  linkedin: "LinkedIn",
};

/** True when a social profile value is a usable absolute http(s) URL. */
export function isValidSocialUrl(value: string | undefined | null): boolean {
  if (!value || typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/** Configured social profiles only — empty strings are omitted. */
export function getConfiguredSocialLinks(): {
  network: SocialNetwork;
  url: string;
  label: string;
}[] {
  return (Object.keys(siteConfig.social) as SocialNetwork[])
    .filter((network) => isValidSocialUrl(siteConfig.social[network]))
    .map((network) => ({
      network,
      url: siteConfig.social[network].trim(),
      label: SOCIAL_LABELS[network],
    }));
}

export function isLocale(value: string): value is Locale {
  return (siteConfig.locale.supported as readonly string[]).includes(value);
}

export function absoluteUrl(path = ""): string {
  const base = siteConfig.domain.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}
