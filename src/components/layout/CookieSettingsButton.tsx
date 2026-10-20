"use client";

import { reopenConsentChoice } from "@/lib/analytics";

/** Lets visitors change or withdraw their cookie consent at any time. */
export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={reopenConsentChoice}
      className="text-left text-sm text-slate-400 underline-offset-2 hover:text-amber-300 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
    >
      {label}
    </button>
  );
}
