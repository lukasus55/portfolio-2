import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", error, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        rows={rows}
        className={`w-full px-3.5 py-2.5 rounded-sm bg-background text-text text-sm border transition-colors duration-150 placeholder:text-text/40 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed resize-y ${
          error ? "border-accent" : "border-text/20 hover:border-text/40 focus:border-accent"
        } ${className}`.trim()}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
