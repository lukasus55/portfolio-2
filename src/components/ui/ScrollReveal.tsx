"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-pop"
  | "clip-unfold"
  | "zoom-in";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AnimationVariant;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  once?: boolean;
}

const variantStyles: Record<
  AnimationVariant,
  { initial: string; animate: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "slide-left": {
    initial: "opacity-0 -translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  "scale-pop": {
    initial: "opacity-0 scale-75",
    animate: "opacity-100 scale-100",
  },
  "clip-unfold": {
    initial: "opacity-0 [clip-path:inset(100%_0_0_0)] translate-y-4",
    animate: "opacity-100 [clip-path:inset(0_0_0_0)] translate-y-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-95 translate-y-4",
    animate: "opacity-100 scale-100 translate-y-0",
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 450,
  threshold = 0.15,
  once = true,
  className = "",
  style,
  ...props
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sprawdź czy użytkownik preferuje zredukowany ruch
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once]);

  const { initial, animate } = variantStyles[variant];

  return (
    <div
      ref={domRef}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
        isVisible ? animate : initial
      } ${className}`.trim()}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
