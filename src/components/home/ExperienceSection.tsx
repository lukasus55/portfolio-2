import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experiences } from "./experienceData";

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="w-full bg-neutral-100 text-text overflow-hidden relative">
      {/* Dynamiczny skos wejściowy z sekcji Hero (biel -> szarość) */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-12 block"
        >
          <path d="M0 0H1440L0 48Z" className="fill-background" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <ScrollReveal variant="fade-up" duration={400}>
          <h2>{t("title")}</h2>
        </ScrollReveal>

        {/* Układ doświadczenia: pojedyncze role lub zgrupowane ścieżki w tej samej firmie (LinkedIn style) */}
        <div className="space-y-16 sm:space-y-20 max-w-4xl">
          {experiences.map((exp, expIdx) => (
            <ScrollReveal
              key={exp.id}
              variant="slide-left"
              delay={expIdx * 120}
              duration={450}
            >
              <div className="space-y-6 sm:space-y-8">
                {exp.roles.map((role, roleIdx) => (
                  <div key={role.id} className="flex items-start gap-5 sm:gap-7">
                    {/* Lewa kolumna: Logo przy najnowszej roli lub łącznik z kropką przy poprzednich rolach w tej samej firmie */}
                    {roleIdx === 0 ? (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden bg-background shrink-0 border border-text/10">
                        <Image
                          src={exp.logo}
                          alt={`Logo firmy - ${t(exp.companyKey)}`}
                          fill
                          sizes="(max-width: 640px) 64px, 80px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-16 sm:w-20 shrink-0 flex justify-center">
                        {/* Linia łącząca od poprzedniej roli / logo */}
                        <div
                          className="absolute -top-6 sm:-top-8 h-10 sm:h-12 w-0.5 bg-text/20"
                          aria-hidden="true"
                        />
                        {/* Pomarańczowa kropka węzła na wysokości tytułu */}
                        <div
                          className="relative mt-2 sm:mt-2.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-neutral-100 shrink-0 z-10"
                          aria-hidden="true"
                        />
                        {/* Przedłużenie linii w dół jeśli to nie ostatnia rola w firmie */}
                        {roleIdx < exp.roles.length - 1 && (
                          <div
                            className="absolute top-3 -bottom-6 sm:-bottom-8 w-0.5 bg-text/20"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    )}

                    {/* Prawa kolumna: Informacje o stanowisku (3 linie przy najnowszej roli, 2 linie przy poprzednich) */}
                    <div className="space-y-1 sm:space-y-1.5 flex-1 min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-medium font-header text-text tracking-tight">
                        {t(role.titleKey)}
                      </h3>
                      {roleIdx === 0 && (
                        <p className="text-base sm:text-lg font-medium text-text/80">
                          {t(exp.companyKey)}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-mono text-neutral-500">
                        <span>{t(role.typeKey)}</span>
                        <span className="text-text/30 select-none">·</span>
                        <span>{t(role.periodKey)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Dynamiczny skos wyjściowy do sekcji Projects (szarość -> biel) */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-12 block"
        >
          <path d="M0 48H1440L1440 0Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}

