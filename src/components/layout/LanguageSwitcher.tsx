"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { siteConfig, type Locale } from "@/config/site";
import { cn } from "@/lib/utils";

export type LanguageSwitcherProps = {
  locale: Locale;
  labels?: {
    switchTo?: string;
    current?: string;
  };
  className?: string;
};

function swapLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (
    segments.length > 0 &&
    (siteConfig.locale.supported as readonly string[]).includes(segments[0])
  ) {
    segments[0] = target;
    return `/${segments.join("/")}`;
  }

  return `/${target}${pathname === "/" ? "" : pathname}`;
}

export function LanguageSwitcher({
  locale,
  labels = {},
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const href = swapLocalePath(pathname, otherLocale);
  const languageName = otherLocale === "en" ? "English" : "Español";
  const switchLabel =
    labels.switchTo ?? `Switch to ${languageName}`;

  return (
    <Link
      href={href}
      hrefLang={otherLocale}
      lang={otherLocale}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700",
        "hover:bg-slate-100 hover:text-slate-900",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
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
