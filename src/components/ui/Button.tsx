import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-text text-background hover:opacity-90 active:scale-[0.98]",
  secondary:
    "bg-neutral-100 text-text hover:bg-neutral-200 active:scale-[0.98]",
  outline:
    "bg-transparent text-text border border-text/20 hover:border-text/40 hover:bg-neutral-50 active:scale-[0.98]",
  ghost:
    "bg-transparent text-text hover:bg-neutral-100 active:scale-[0.98]",
  link:
    "bg-transparent text-text underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-7 py-3.5 text-base font-semibold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isLinkVariant = variant === "link";
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text";

    const variantClass = variantStyles[variant];
    const sizeClass = isLinkVariant ? "" : sizeStyles[size];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";