import { cn } from "@/lib/utils";

export type LogoIconProps = {
  className?: string;
  /** Accessible title; omit when decorative (aria-hidden). */
  title?: string;
  decorative?: boolean;
};

/**
 * ProjectCalc Hub mark — steel grid + amber measurement accent.
 */
export function LogoIcon({
  className,
  title = "ProjectCalc Hub",
  decorative = false,
}: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      className={cn("h-8 w-8 shrink-0", className)}
    >
      {!decorative && <title>{title}</title>}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="6"
        className="fill-slate-800"
      />
      <path
        d="M8 12h24M8 20h24M8 28h16"
        className="stroke-slate-500"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 26l8 8"
        className="stroke-amber-500"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="24"
        y="22"
        width="10"
        height="4"
        rx="1"
        className="fill-amber-500"
        transform="rotate(-45 29 24)"
      />
      <circle cx="12" cy="12" r="2" className="fill-amber-400" />
    </svg>
  );
}
