import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  const navLinks = [
    { label: t("nav.home"), href: "/#hero" },
    { label: t("nav.experience"), href: "/#experience" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.skills"), href: "/#skills" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.contact"), href: "/#contact" },
  ];
  const expertiseItems = [t("expertise.item1"), t("expertise.item2"), t("expertise.item3"), t("expertise.item4")];

  return (
    <footer className="w-full bg-text text-background py-16 md:py-20 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          {/* Identity & Bio */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-header text-xl md:text-2xl font-medium tracking-tight text-white block">
              Łukasz Kostyk
            </span>
            <span className="text-sm font-medium text-accent block">
              {t("role")}
            </span>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {t("bio")}
            </p>
            <p className="text-xs font-mono text-neutral-500 pt-1">
              {t("location")}
            </p>
          </div>

          {/* Sitemap Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-header text-xs uppercase tracking-wider font-medium text-neutral-300">
              {t("navTitle")}
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors duration-150 cursor-pointer block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-header text-xs uppercase tracking-wider font-medium text-neutral-300">
              {t("expertiseTitle")}
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {expertiseItems.map((item, idx) => (
                <li key={idx} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-header text-xs uppercase tracking-wider font-medium text-neutral-300">
              {t("connectTitle")}
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="https://github.com/lukasus55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-150 cursor-pointer inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lkostyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-150 cursor-pointer inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:lukas.kostyk@gmail.com"
                  className="hover:text-accent transition-colors duration-150 cursor-pointer block"
                >
                  lukas.kostyk@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-accent font-medium">Łukasz Kostyk</span>. {t("rights")}.
          </span>
        </div>
      </div>
    </footer>
  );
}
