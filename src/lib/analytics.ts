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

  // Integration point: load gtag only when ID + consent are present.
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
}
