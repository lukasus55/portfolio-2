"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = (nextLocale: "pl" | "en") => {
    if (nextLocale !== currentLocale) {
      router.replace(pathname, { locale: nextLocale });
    }
  };

  return (
    <div className="inline-flex items-center gap-2 text-sm font-mono">
      <button
        type="button"
        onClick={() => toggleLocale("pl")}
        className={`cursor-pointer transition-opacity ${
          currentLocale === "pl"
            ? "font-bold text-text underline underline-offset-4 decoration-primary decoration-2"
            : "text-text/40 hover:text-text"
        }`}
      >
        PL
      </button>
      <span className="text-text/20">/</span>
      <button
        type="button"
        onClick={() => toggleLocale("en")}
        className={`cursor-pointer transition-opacity ${
          currentLocale === "en"
            ? "font-bold text-text underline underline-offset-4 decoration-primary decoration-2"
            : "text-text/40 hover:text-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}