import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={`w-full px-3.5 py-2.5 rounded-sm bg-background text-text text-sm border transition-colors duration-150 placeholder:text-text/40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? "border-accent" : "border-text/20 hover:border-text/40 focus:border-accent"
        } ${className}`.trim()}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";