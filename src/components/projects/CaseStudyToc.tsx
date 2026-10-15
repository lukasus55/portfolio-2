"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export interface TocItem {
  id: string;
  label: string;
}

interface TocProps {
  items: TocItem[];
}

function useActiveTocId(items: TocItem[]) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return activeId;
}

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -90;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

/**
 * Pasek nawigacji mobilnej (widoczny tylko na małych ekranach poniżej lg)
 */
export function CaseStudyMobileToc({ items }: TocProps) {
  const t = useTranslations("CaseStudy");
  const activeId = useActiveTocId(items);

  return (
    <nav
      aria-label={t("tocTitle")}
      className="lg:hidden w-full overflow-x-auto no-scrollbar py-2.5 px-6 border-b border-text/10 bg-background/95 backdrop-blur-xs sticky top-[65px] z-30"
    >
      <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className={`text-xs px-3 py-1.5 rounded-sm transition-colors cursor-pointer ${
                isActive
                  ? "bg-text text-background font-medium"
                  : "text-neutral-600 hover:text-text hover:bg-neutral-100"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * Sticky boczny spis treści dla widoków desktopowych (lg+)
 */
export function CaseStudyToc({ items }: TocProps) {
  const t = useTranslations("CaseStudy");
  const activeId = useActiveTocId(items);

  return (
    <aside className="hidden lg:block w-52 shrink-0 sticky top-28 self-start pt-2">
      <div className="space-y-4">
        <p className="text-xs font-mono tracking-wider text-neutral-400">
          {t("tocTitle")}
        </p>

        <nav className="flex flex-col border-l border-text/10 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={`text-left py-1.5 pl-3 -ml-[1px] transition-all cursor-pointer ${
                  isActive
                    ? "border-l-2 border-accent text-accent font-medium translate-x-0.5"
                    : "border-l-2 border-transparent text-neutral-500 hover:text-text hover:border-text/30"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
