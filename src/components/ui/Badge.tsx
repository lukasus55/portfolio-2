import * as React from "react";

export type BadgeVariant = "default" | "secondary" | "outline" | "accent";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-text text-background",
  secondary: "bg-neutral-200/70 text-text/80",
  outline: "border border-text/15 text-text/75 bg-transparent",
  accent: "bg-accent/10 text-accent border border-accent/20",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs font-mono",
  md: "px-2.5 py-1 text-xs font-mono",
};

export function Badge({
  className = "",
  variant = "outline",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-sm font-medium tracking-wide transition-colors select-none";
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  return (
    <span
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
