"use client";

import { useEffect, useState } from "react";
import {
  CalculatorWidget,
  type ShareHelpers,
} from "@/components/calculator/CalculatorWidget";
import { PrintCopyShare } from "@/components/calculator/PrintCopyShare";
import type { CalculatorLabels } from "@/components/calculator/forms/types";
import { recordRecentCalculator } from "@/components/layout/RecentlyViewed";
import type { CalculatorId } from "@/lib/calculators/types";

export type CalculatorPageClientProps = {
  calculatorId: CalculatorId;
  locale: "en" | "es";
  title: string;
  href: string;
  labels: CalculatorLabels;
  className?: string;
};

export function CalculatorPageClient({
  calculatorId,
  locale,
  title,
  href,
  labels,
  className,
}: CalculatorPageClientProps) {
  const [shareHelpers, setShareHelpers] = useState<ShareHelpers | null>(null);

  useEffect(() => {
    recordRecentCalculator({ id: calculatorId, title, href });
  }, [calculatorId, title, href]);

  return (
    <CalculatorWidget
      key={calculatorId}
      calculatorId={calculatorId}
      locale={locale}
      labels={labels}
      className={className}
      onShareHelpersChange={setShareHelpers}
      actions={
        shareHelpers ? (
          <PrintCopyShare
            getShareText={shareHelpers.getShareText}
            getShareUrl={shareHelpers.getShareUrl}
            labels={{
              print: labels.ui.print,
              copyResults: labels.ui.copyResults,
              copyLink: labels.ui.copyLink,
              share: labels.ui.share,
              copied: labels.ui.copied,
              shareFailed: labels.ui.shareFailed,
            }}
          />
        ) : null
      }
    />
  );
}
