import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export type AffiliateDisclaimerProps = {
  message?: string;
  className?: string;
};

export function AffiliateDisclaimer({
  message = "Some links on this page are affiliate links. We may earn a commission at no extra cost to you.",
  className,
}: AffiliateDisclaimerProps) {
  const enabled = siteConfig.affiliates.enabled;

  return (
    <p
      className={cn(
        "rounded-md border px-3 py-2 text-xs leading-relaxed",
        enabled
          ? "border-amber-200 bg-amber-50 text-amber-950"
          : "border-slate-200 bg-slate-50 text-slate-400",
        className,
      )}
      data-affiliate-disclaimer={enabled ? "active" : "inactive"}
    >
      {enabled ? (
        <>
          <span className="font-semibold">Sponsored: </span>
          <span>{message}</span>
          <span className="sr-only"> External affiliate links use rel=nofollow.</span>
        </>
      ) : (
        <span aria-hidden="true">{message}</span>
      )}
    </p>
  );
}
