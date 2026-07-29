import { cn } from "@/lib/utils";

export type FieldsetProps = {
  legend: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  legendClassName?: string;
};

export function Fieldset({
  legend,
  description,
  children,
  className,
  legendClassName,
}: FieldsetProps) {
  return (
    <fieldset
      className={cn("space-y-4 rounded-lg border border-slate-200 p-4", className)}
    >
      <legend
        className={cn("px-1 text-sm font-semibold text-slate-900", legendClassName)}
      >
        {legend}
      </legend>
      {description ? <p className="text-sm text-slate-600">{description}</p> : null}
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}
