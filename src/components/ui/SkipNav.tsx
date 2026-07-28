import { cn } from "@/lib/utils";

export type SkipNavProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function SkipNav({
  href = "#main-content",
  label = "Skip to main content",
  className,
}: SkipNavProps) {
  return (
    <a href={href} className={cn("skip-link", className)}>
      {label}
    </a>
  );
}
