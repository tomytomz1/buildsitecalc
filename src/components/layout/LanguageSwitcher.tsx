"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { type Locale } from "@/config/site";
import { switchLocalePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

export type LanguageSwitcherProps = {
  locale: Locale;
  labels?: {
    switchTo?: string;
    current?: string;
  };
  className?: string;
};

export function LanguageSwitcher({
  locale,
  labels = {},
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const otherLocale: Locale = locale === "en" ? "es" : "en";
  // Must use switchLocalePath — calculator and category slugs are localized
  // (concrete-slab <-> losa-de-concreto), so swapping only the locale prefix
  // produces a 404 in both directions.
  const href = switchLocalePath(pathname, otherLocale);
  const languageName = otherLocale === "en" ? "English" : "Español";
  const switchLabel = labels.switchTo ?? `Switch to ${languageName}`;

  return (
    <Link
      href={href}
      hrefLang={otherLocale}
      lang={otherLocale}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700",
        "hover:bg-slate-100 hover:text-slate-900",
        "focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      aria-label={switchLabel}
      title={switchLabel}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span aria-hidden="true">{otherLocale.toUpperCase()}</span>
      <span className="sr-only">{switchLabel}</span>
    </Link>
  );
}
