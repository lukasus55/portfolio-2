"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

interface LanguageOption {
  code: "pl" | "en";
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "pl", name: "Polski", flag: "/flags/pl.svg" },
  { code: "en", name: "English", flag: "/flags/en.svg" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = useLocale() as "pl" | "en";
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: "pl" | "en") => {
    setIsOpen(false);
    if (code !== currentLocale) {
      router.replace(pathname, { locale: code });
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 px-3 h-9 rounded-sm hover:bg-neutral-100 hover:text-accent transition-colors cursor-pointer text-xs font-semibold focus-visible:outline-2 focus-visible:outline-accent"
      >
        <Image
          src={currentLanguage.flag}
          alt={`Flaga: ${currentLanguage.name}`}
          width={18}
          height={14}
          className="rounded-[1px] object-cover shadow-xs"
        />
        <span className="uppercase text-xs font-semibold tracking-wider">
          {currentLanguage.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-text/60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1.5 w-32 bg-background border border-text/10 rounded-sm shadow-md py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === currentLocale;
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-neutral-100 font-semibold text-accent"
                      : "text-text/75 hover:bg-neutral-50 hover:text-accent"
                  }`}
                >
                  <Image
                    src={lang.flag}
                    alt={`Flaga: ${lang.name}`}
                    width={18}
                    height={14}
                    className="rounded-[1px] object-cover shadow-xs"
                  />
                  <span>{lang.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}