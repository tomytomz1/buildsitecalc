"use client";

import {
  forwardRef,
  useId,
  useMemo,
  type InputHTMLAttributes,
} from "react";
import { parseFraction } from "@/lib/calculators/fractions";
import { cn, formatNumber } from "@/lib/utils";
import { ErrorMessage } from "./ErrorMessage";
import { inputClassName } from "./Input";

export type FractionalInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  hint?: string;
  error?: string;
  locale?: "en" | "es";
  parsedHintLabel?: string;
  wrapperClassName?: string;
  labelClassName?: string;
};

export const FractionalInput = forwardRef<HTMLInputElement, FractionalInputProps>(
  function FractionalInput(
    {
      id,
      label,
      hint,
      error,
      required,
      value,
      defaultValue,
      locale = "en",
      parsedHintLabel = "Parsed value",
      className,
      wrapperClassName,
      labelClassName,
      onChange,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id ?? props.name ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const parsedId = `${inputId}-parsed`;
    const errorId = error ? `${inputId}-error` : undefined;

    const displayValue =
      value !== undefined && value !== null
        ? String(value)
        : defaultValue !== undefined && defaultValue !== null
          ? String(defaultValue)
          : "";

    const parsed = useMemo(() => {
      if (!displayValue.trim()) return null;
      return parseFraction(displayValue);
    }, [displayValue]);

    const parsedHint =
      parsed !== null
        ? `${parsedHintLabel}: ${formatNumber(parsed, locale)}`
        : displayValue.trim()
          ? `${parsedHintLabel}: —`
          : undefined;

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
        <input
          ref={ref}
          id={inputId}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          required={required}
          {...(value !== undefined ? { value } : { defaultValue })}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hintId, parsedId, errorId].filter(Boolean).join(" ") || undefined
          }
          placeholder='e.g. 10 1/2 or 3/4'
          className={cn(inputClassName(Boolean(error)), className)}
          onChange={onChange}
          {...props}
        />
        {hint ? (
          <p id={hintId} className="mt-1.5 text-sm text-slate-500">
            {hint}
          </p>
        ) : null}
        {parsedHint ? (
          <p
            id={parsedId}
            className={cn(
              "mt-1.5 text-sm",
              parsed !== null ? "text-slate-600" : "text-amber-700",
            )}
            aria-live="polite"
          >
            {parsedHint}
          </p>
        ) : null}
        {error ? <ErrorMessage id={errorId}>{error}</ErrorMessage> : null}
      </div>
    );
  },
);
