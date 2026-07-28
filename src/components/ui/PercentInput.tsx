import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ErrorMessage } from "./ErrorMessage";
import { inputClassName } from "./Input";

export type PercentInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  hint?: string;
  error?: string;
  suffix?: string;
  wrapperClassName?: string;
  labelClassName?: string;
};

export const PercentInput = forwardRef<HTMLInputElement, PercentInputProps>(
  function PercentInput(
    {
      id,
      label,
      hint,
      error,
      required,
      suffix = "%",
      className,
      wrapperClassName,
      labelClassName,
      ...props
    },
    ref,
  ) {
    const inputId = id ?? props.name;
    const hintId = hint && inputId ? `${inputId}-hint` : undefined;
    const errorId = error && inputId ? `${inputId}-error` : undefined;

    return (
      <div className={cn("w-full", wrapperClassName)}>
        <label
          htmlFor={inputId}
          className={cn(
            "mb-1.5 block text-sm font-medium text-slate-800",
            labelClassName,
          )}
        >
          {label}
          {required ? (
            <span className="ml-0.5 text-red-600" aria-hidden="true">
              *
            </span>
          ) : null}
          {required ? <span className="sr-only"> (required)</span> : null}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type="number"
            inputMode="decimal"
            step="any"
            min={props.min ?? 0}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              [hintId, errorId].filter(Boolean).join(" ") || undefined
            }
            className={cn(
              inputClassName(Boolean(error)),
              "pr-10",
              className,
            )}
            {...props}
          />
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500"
            aria-hidden="true"
          >
            {suffix}
          </span>
        </div>
        {hint ? (
          <p id={hintId} className="mt-1.5 text-sm text-slate-500">
            {hint}
          </p>
        ) : null}
        {error ? <ErrorMessage id={errorId}>{error}</ErrorMessage> : null}
      </div>
    );
  },
);
