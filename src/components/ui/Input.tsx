import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ErrorMessage } from "./ErrorMessage";

export const inputClassName = (hasError?: boolean) =>
  cn(
    "block w-full rounded-md border bg-white px-3 py-2 text-slate-900 shadow-sm",
    "placeholder:text-slate-400",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
      : "border-slate-300 focus:border-amber-500 focus:ring-amber-500/30",
  );

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  type?: "text" | "number" | "email" | "password" | "search" | "tel" | "url";
  hint?: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      id,
      label,
      type = "text",
      hint,
      error,
      required,
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
        <input
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [hintId, errorId].filter(Boolean).join(" ") || undefined
          }
          className={cn(inputClassName(Boolean(error)), className)}
          {...props}
        />
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
