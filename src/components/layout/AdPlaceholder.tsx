import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export type AdPlaceholderProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  minHeight?: number;
};

const formatClasses: Record<
  NonNullable<AdPlaceholderProps["format"]>,
  string
> = {
  auto: "min-h-[250px]",
  rectangle: "min-h-[250px] max-w-[336px]",
  horizontal: "min-h-[90px] w-full",
  vertical: "min-h-[600px] max-w-[300px]",
};

export function AdPlaceholder({
  slot = "default",
  format = "auto",
  className,
  minHeight,
}: AdPlaceholderProps) {
  if (!siteConfig.ads.enabled) {
    return null;
  }

  return (
    <aside
      className={cn(
        "relative flex items-center justify-center rounded-md border border-dashed border-slate-200 bg-slate-50",
        formatClasses[format],
        className,
      )}
      style={minHeight ? { minHeight } : undefined}
      aria-label="Advertisement"
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-client={siteConfig.ads.adsenseClientId || undefined}
      data-ad-publisher={siteConfig.ads.publisherId || undefined}
    >
      <span className="sr-only">Advertisement</span>
      <ins
        className="adsbygoogle block h-full w-full"
        style={{ display: "block" }}
        data-ad-client={siteConfig.ads.adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
