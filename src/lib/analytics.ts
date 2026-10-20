import { siteConfig } from "@/config/site";

let consentGranted = false;

export function setAnalyticsConsent(granted: boolean): void {
  consentGranted = granted;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("pch-consent", granted ? "granted" : "denied");
  }
}

export function getAnalyticsConsent(): boolean {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("pch-consent");
    if (stored === "granted") return true;
    if (stored === "denied") return false;
  }
  return consentGranted;
}

/**
 * Analytics remain inactive without measurement IDs and explicit consent.
 * Call from a client effect after consent is granted.
 */
export function initAnalytics(): void {
  if (process.env.NODE_ENV !== "production") return;
  if (!getAnalyticsConsent()) return;

  const gaId = siteConfig.analytics.googleAnalyticsId;
  if (!gaId || typeof window === "undefined") return;

  // Load the Google tag only after explicit consent, and only once.
  // Without the script, gtag() just queues commands and no data reaches GA4.
  if (document.getElementById("buildsitecalc-ga4")) return;
  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer?.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", gaId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "buildsitecalc-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}
