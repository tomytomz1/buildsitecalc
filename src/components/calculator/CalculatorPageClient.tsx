"use client";

import { useEffect, useState } from "react";
import {
  CalculatorWidget,
  type ShareHelpers,
} from "@/components/calculator/CalculatorWidget";
import { PrintCopyShare } from "@/components/calculator/PrintCopyShare";
import { SaveEstimateButton } from "@/components/calculator/SaveEstimateButton";
import type { CalculatorLabels } from "@/components/calculator/forms/types";
import { recordRecentCalculator } from "@/components/layout/RecentlyViewed";
import type { CalcSuccess, CalculatorId } from "@/lib/calculators/types";

export type CalculatorPageClientProps = {
  calculatorId: CalculatorId;
  locale: "en" | "es";
  title: string;
  href: string;
  labels: CalculatorLabels;
  className?: string;
  initialResult?: CalcSuccess | null;
};

export function CalculatorPageClient({
  calculatorId,
  locale,
  title,
  href,
  labels,
  className,
  initialResult = null,
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
      initialResult={initialResult}
      onShareHelpersChange={setShareHelpers}
      actions={
        shareHelpers ? (
          <div className="space-y-3">
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
            <SaveEstimateButton
              calculatorId={calculatorId}
              locale={locale}
              title={title}
              href={href}
              getSnapshot={shareHelpers.getEstimateSnapshot}
            />
          </div>
        ) : null
      }
    />
  );
}
