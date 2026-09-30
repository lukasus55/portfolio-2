import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "brand" | "outline" | "ghost" | "link";
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
  accent:
    "bg-accent text-white font-medium hover:opacity-90 active:scale-[0.98]",
  brand:
    "bg-primary text-text font-medium hover:opacity-90 active:scale-[0.98]",
  outline:
    "bg-transparent text-text border border-text/20 hover:border-accent hover:text-accent active:scale-[0.98]",
  ghost:
    "bg-transparent text-text hover:text-accent hover:bg-neutral-100 active:scale-[0.98]",
  link:
    "bg-transparent text-text hover:text-accent underline-offset-4 hover:underline p-0 h-auto",
};


const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium",
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-7 py-3.5 text-base font-semibold",
};

const rippleColorStyles: Partial<Record<ButtonVariant, string>> = {
  primary: "bg-accent",
  accent: "bg-text",
  brand: "bg-text",
  secondary: "bg-neutral-300/60",
  outline: "bg-neutral-100",
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
    const isGhostVariant = variant === "ghost";
    const rippleColor = rippleColorStyles[variant];

    const baseClasses =
      "relative inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer transition-all duration-200 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]";

    const variantClass = variantStyles[variant];
    const sizeClass = isLinkVariant ? "" : sizeStyles[size];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()}
        {...props}
      >
        {rippleColor && !isLinkVariant && !isGhostVariant && (
          <span
            aria-hidden="true"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 transition-all duration-500 ease-out rounded-full group-hover:w-80 group-hover:h-80 pointer-events-none ${rippleColor}`}
          />
        )}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";