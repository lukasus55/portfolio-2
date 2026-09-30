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
    "bg-text text-background active:scale-[0.98]",
  secondary:
    "bg-neutral-100 text-text active:scale-[0.98]",
  accent:
    "bg-accent text-white font-medium active:scale-[0.98]",
  brand:
    "bg-primary text-text font-medium active:scale-[0.98]",
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
  lg: "px-7 py-3.5 text-base font-medium",
};

// Kolory fali morskiego przypływu w zależności od wariantu przycisku
const tideColorStyles: Partial<Record<ButtonVariant, string>> = {
  primary: "text-accent", // Pomarańczowa fala akcentu na czarnym tle
  accent: "text-text", // Czarna głębinowa fala na pomarańczowym tle
  brand: "text-text", // Czarna fala na żółtym tle
  secondary: "text-neutral-200", // Subtelna szara fala na jasnym tle
  outline: "text-neutral-100", // Cicha fala wewnątrz ramki
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
    const tideColor = tideColorStyles[variant];

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
        {/* Tematyczny morski onhover: fala przypływu wznosząca się od dołu */}
        {tideColor && !isLinkVariant && !isGhostVariant && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm"
          >
            <div
              className={`absolute inset-x-0 bottom-0 h-full translate-y-[calc(100%+24px)] transition-transform duration-500 ease-out group-hover:translate-y-0 ${tideColor}`}
            >
              {/* Grzebień fali morskiej na szczycie wznoszącej się wody */}
              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                className="absolute -top-[13px] left-0 w-[200%] h-[15px] fill-current text-inherit animate-tide-drift"
              >
                <path d="M 0 10 C 25 0, 75 20, 100 10 C 125 0, 175 20, 200 10 L 200 20 L 0 20 Z" />
              </svg>
              {/* Tafla wody wypełniająca button */}
              <div className="w-full h-full bg-current" />
            </div>
          </div>
        )}

        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";