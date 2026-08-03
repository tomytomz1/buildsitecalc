"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { BookmarkCheck, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/config/site";
import type { EstimateSnapshot } from "@/components/calculator/CalculatorWidget";
import { estimateLabel } from "@/lib/estimates/labels";
import { saveEstimate } from "@/lib/estimates/store";
import { localePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

export type SaveEstimateButtonProps = {
  calculatorId: string;
  locale: Locale;
  title: string;
  href: string;
  getSnapshot: () => EstimateSnapshot | null;
  className?: string;
};

export function SaveEstimateButton({
  calculatorId,
  locale,
  title,
  href,
  getSnapshot,
  className,
}: SaveEstimateButtonProps) {
  const [state, setState] = useState<"idle" | "saved" | "failed">("idle");

  const handleSave = useCallback(() => {
    const snapshot = getSnapshot();
    if (!snapshot) {
      setState("failed");
      return;
    }

    const saved = saveEstimate({
      calculatorId,
      locale,
      title,
      href,
      query: snapshot.query,
      inputs: snapshot.inputs,
      results: snapshot.results,
    });

    setState(saved ? "saved" : "failed");
  }, [calculatorId, getSnapshot, href, locale, title]);

  return (
    <div className={cn("space-y-2 print:hidden", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={handleSave}>
          {state === "saved" ? (
            <BookmarkCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
          ) : (
            <BookmarkPlus className="h-4 w-4" aria-hidden="true" />
          )}
          {estimateLabel(locale, "save")}
        </Button>

        {state === "saved" ? (
          <Link
            href={localePath(locale, "my-estimates")}
            className="text-sm font-medium text-amber-800 underline underline-offset-2 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {estimateLabel(locale, "viewAll")}
          </Link>
        ) : null}
      </div>

      <p aria-live="polite" className="text-xs text-slate-600">
        {state === "saved"
          ? `${estimateLabel(locale, "saved")}. ${estimateLabel(locale, "privacyNote")}`
          : state === "failed"
            ? estimateLabel(locale, "saveFailed")
            : estimateLabel(locale, "privacyNote")}
      </p>
    </div>
  );
}
