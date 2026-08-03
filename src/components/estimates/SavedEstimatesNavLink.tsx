"use client";

import Link from "next/link";
import type { Locale } from "@/config/site";
import { estimateLabel } from "@/lib/estimates/labels";
import { useSavedEstimates } from "@/lib/estimates/store";
import { localePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

export type SavedEstimatesNavLinkProps = {
  locale: Locale;
  className?: string;
  onNavigate?: () => void;
};

/**
 * Renders nothing until the visitor has saved something, so a first-time
 * visitor is not offered a link to an empty page. Once there is a saved
 * estimate, this is the return path that makes the feature worth building.
 */
export function SavedEstimatesNavLink({
  locale,
  className,
  onNavigate,
}: SavedEstimatesNavLinkProps) {
  const estimates = useSavedEstimates();
  if (estimates.length === 0) return null;

  return (
    <Link
      href={localePath(locale, "my-estimates")}
      onClick={onNavigate}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none",
        className,
      )}
    >
      {estimateLabel(locale, "navLabel")}
      <span className="ml-1.5 rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-900 tabular-nums">
        {estimates.length}
      </span>
    </Link>
  );
}
