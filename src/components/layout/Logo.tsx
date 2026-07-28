"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LogoIcon } from "@/components/brand/LogoIcon";
import { cn } from "@/lib/utils";

export type LogoProps = {
  locale?: "en" | "es";
  className?: string;
  showTagline?: boolean;
  tagline?: string;
};

export function Logo({
  locale = "en",
  className,
  showTagline = false,
  tagline,
}: LogoProps) {
  const href = `/${locale}`;
  const resolvedTagline =
    tagline ?? siteConfig.brand.tagline[locale];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
        className,
      )}
      aria-label={`${siteConfig.brand.name} home`}
    >
      <LogoIcon decorative />
      <span className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-slate-900 group-hover:text-amber-800">
          <span className="text-slate-800">Build</span>
          <span className="text-amber-700">Site</span>
          <span className="font-semibold text-slate-600">Calc</span>
        </span>
        {showTagline ? (
          <span className="hidden text-xs text-slate-500 sm:block">
            {resolvedTagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
