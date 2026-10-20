"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import { initAnalytics, revokeAnalytics, setAnalyticsConsent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "pch-consent";

function isTrackingConfigured(): boolean {
  return Boolean(
    siteConfig.analytics.googleAnalyticsId ||
    siteConfig.analytics.googleTagManagerId ||
    siteConfig.ads.enabled ||
    siteConfig.ads.adsenseClientId,
  );
}

function subscribeConsent(onStoreChange: () => void): () => void {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("pch-consent-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("pch-consent-change", onStoreChange);
  };
}

function getConsentSnapshot(): "granted" | "denied" | "unset" | "disabled" {
  if (!isTrackingConfigured()) return "disabled";
  const stored = window.localStorage.getItem(CONSENT_KEY);
  if (stored === "granted" || stored === "denied") return stored;
  return "unset";
}

const SERVER_CONSENT_SNAPSHOT = "disabled" as const;

function getServerConsentSnapshot(): "granted" | "denied" | "unset" | "disabled" {
  return SERVER_CONSENT_SNAPSHOT;
}

function notifyConsentChange(): void {
  window.dispatchEvent(new Event("pch-consent-change"));
}

export type ConsentBannerProps = {
  labels?: {
    message?: string;
    accept?: string;
    decline?: string;
  };
  className?: string;
};

export function ConsentBanner({ labels = {}, className }: ConsentBannerProps) {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  useEffect(() => {
    if (consent === "granted") {
      setAnalyticsConsent(true);
      initAnalytics();
    } else if (consent === "denied") {
      // Covers consent withdrawn here or in another tab after it was granted.
      revokeAnalytics();
    }
  }, [consent]);

  const accept = useCallback(() => {
    setAnalyticsConsent(true);
    initAnalytics();
    notifyConsentChange();
  }, []);

  const decline = useCallback(() => {
    setAnalyticsConsent(false);
    revokeAnalytics();
    notifyConsentChange();
  }, []);

  if (consent !== "unset") return null;

  const message =
    labels.message ??
    "We use optional analytics and ads to improve BuildSiteCalc. Accept to allow cookies; decline to continue without tracking.";
  const acceptLabel = labels.accept ?? "Accept";
  const declineLabel = labels.decline ?? "Decline";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-4 shadow-lg sm:p-5",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-700">{message}</p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {declineLabel}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
