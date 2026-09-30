import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experiences } from "./experienceData";
import { skills } from "./skillsData";

export default function ExperienceSection() {
  const t = useTranslations("Experience");
  const tSkills = useTranslations("Skills");

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

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Układ 2-kolumnowy na desktopie: Doświadczenie po lewej + Stack technologiczny po prawej */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-start">
          {/* Kolumna lewa: Doświadczenie zawodowe */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-14">
            <ScrollReveal variant="fade-up" duration={400}>
              <h2>{t("title")}</h2>
            </ScrollReveal>

            <div className="space-y-12 sm:space-y-16">
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
                        {/* Lewa kolumna: Logo przy najnowszej roli lub łącznik z kropką przy poprzednich rolach */}
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

                        {/* Prawa kolumna: Informacje o stanowisku */}
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

          {/* Kolumna prawa: Stack technologiczny (Umiejętności) */}
          <div id="skills" className="lg:col-span-5 space-y-12 sm:space-y-14 scroll-mt-24">
            <ScrollReveal variant="fade-up" duration={400} delay={100}>
              <h2>{tSkills("title")}</h2>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6">
              {skills.map((skill, index) => (
                <ScrollReveal
                  key={skill.name}
                  variant="scale-pop"
                  delay={120 + index * 60}
                  duration={400}
                >
                  <div className="flex flex-col items-center gap-2.5 text-center">
                    <div className="flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-normal text-text/80">
                      {skill.name}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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

