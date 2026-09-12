import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";

export default async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className="w-full sticky top-0 z-50 bg-background border-b border-text/5">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-header text-xl tracking-tight font-bold hover:opacity-75 transition-opacity cursor-pointer"
        >
          lukas<span className="text-primary">.</span>
        </Link>

        {/* Navigation links & Language Switcher */}
        <div className="flex items-center gap-8 md:gap-10">
          <nav className="flex items-center gap-6 md:gap-8 text-sm font-medium">
            <a
              href="#experience"
              className="text-text/70 hover:text-text transition-colors cursor-pointer"
            >
              {t("experience")}
            </a>
            <a
              href="#projects"
              className="text-text/70 hover:text-text transition-colors cursor-pointer"
            >
              {t("projects")}
            </a>
            <a
              href="#about"
              className="text-text/70 hover:text-text transition-colors cursor-pointer"
            >
              {t("about")}
            </a>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}