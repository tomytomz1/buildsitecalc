import { siteConfig } from "@/config/site";

let consentGranted = false;

const CONSENT_KEY = "pch-consent";
const SCRIPT_ID = "buildsitecalc-ga4";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
} & Record<string, unknown>;

export function setAnalyticsConsent(granted: boolean): void {
  consentGranted = granted;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  }
}

export function getAnalyticsConsent(): boolean {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") return true;
    if (stored === "denied") return false;
  }
  return consentGranted;
}

/**
 * Production analytics run only on the canonical production host, so Vercel
 * preview deployments and local builds never send hits to the production
 * GA4 property even if the measurement ID is present in their environment.
 */
export function isProductionAnalyticsHost(hostname: string): boolean {
  const canonical = new URL(siteConfig.domain).hostname;
  return hostname === canonical || hostname === `www.${canonical}`;
}

/**
 * gtag.js only processes commands pushed as an `arguments` object. A rest
 * parameter array (`...args`) is a plain Array, which gtag.js silently
 * ignores, so the `config` command never runs and no page_view is sent.
 */
function ensureGtag(w: GtagWindow): (...args: unknown[]) => void {
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer?.push(arguments);
    };
  }
  return w.gtag;
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
  if (!isProductionAnalyticsHost(window.location.hostname)) return;

  const w = window as unknown as GtagWindow;

  // Re-granting consent later in the same page session: lift the opt-out
  // instead of loading the tag a second time.
  if (document.getElementById(SCRIPT_ID)) {
    if (w[`ga-disable-${gaId}`]) {
      w[`ga-disable-${gaId}`] = false;
      ensureGtag(w)("consent", "update", { analytics_storage: "granted" });
    }
    return;
  }

  // Load the Google tag only after explicit consent, and only once.
  w[`ga-disable-${gaId}`] = false;
  const gtag = ensureGtag(w);
  gtag("consent", "default", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.appendChild(script);
}

/**
 * Called when a visitor withdraws consent. Stops any further GA4 hits in the
 * current page session and removes the first-party GA cookies.
 */
export function revokeAnalytics(): void {
  if (typeof window === "undefined") return;
  const gaId = siteConfig.analytics.googleAnalyticsId;
  if (!gaId) return;
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${gaId}`] = true;
  if (w.gtag) {
    w.gtag("consent", "update", { analytics_storage: "denied" });
  }
  deleteGaCookies();
}

function deleteGaCookies(): void {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = ["", host, `.${host}`];
  if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);
  document.cookie.split(";").forEach((raw) => {
    const name = raw.split("=")[0]?.trim();
    if (!name || !(name === "_ga" || name.startsWith("_ga_"))) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

/** Clears the stored choice so the consent banner is shown again. */
export function reopenConsentChoice(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new Event("pch-consent-change"));
}
