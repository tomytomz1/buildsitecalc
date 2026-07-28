import {
  cloneElement,
  forwardRef,
  isValidElement,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-600 text-white shadow-sm hover:bg-amber-700 active:bg-amber-800",
  secondary:
    "bg-slate-700 text-white shadow-sm hover:bg-slate-800 active:bg-slate-900",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
  outline:
    "border border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-50 active:bg-slate-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 gap-1.5 px-3 text-sm",
  md: "h-10 gap-2 px-4 text-sm",
  lg: "h-12 gap-2.5 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
  };

type AsChildProps = ButtonBaseProps & {
  asChild: true;
  children: ReactElement<
    ButtonHTMLAttributes<HTMLButtonElement> &
      AnchorHTMLAttributes<HTMLAnchorElement>
  >;
};

export type ButtonProps = NativeButtonProps | AsChildProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      className,
      asChild = false,
      ...rest
    } = props as NativeButtonProps & { asChild?: boolean };

    const classes = buttonClassName({ variant, size, className });

    if (asChild) {
      const child = (props as AsChildProps).children;
      if (!isValidElement(child)) {
        throw new Error("Button with asChild expects a single valid element.");
      }
      return cloneElement(child, {
        ...rest,
        className: cn(classes, child.props.className),
        ref,
      } as Record<string, unknown>);
    }

    return (
      <button
        ref={ref}
        type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);
