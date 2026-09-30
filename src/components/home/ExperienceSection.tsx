import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface JobItem {
  id: string;
  key: "job1";
}

const jobs: JobItem[] = [
  { id: "1", key: "job1" }
];

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="w-full bg-accent text-white overflow-hidden relative">
      {/* Dynamiczny skos wejściowy z sekcji Hero (biel -> pomarańcz) */}
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
          <h2 className="text-white">{t("title")}</h2>
        </ScrollReveal>

        <div className="space-y-12 max-w-3xl">
          {jobs.map((job, index) => (
            <ScrollReveal
              key={job.id}
              variant="slide-left"
              delay={index * 120}
              duration={450}
            >
              <div className="flex items-start gap-6">
                {/* Logo / Placeholder Image (element statyczny - bez stanów hover, biała ramka) */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden bg-white/10 shrink-0 border border-white/20">
                  <Image
                    src={`/experience/${job.key}.jpg`}
                    alt={`Logo firmy - ${t(`${job.key}.company`)}`}
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                  />
                </div>

                {/* Informacje o stanowisku */}
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-medium font-header text-white">
                    {t(`${job.key}.title`)}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/95">
                    {t(`${job.key}.company`)}
                  </p>
                  <p className="text-xs md:text-sm font-mono text-white/80">
                    {t(`${job.key}.period`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Dynamiczny skos wyjściowy do sekcji Projects (pomarańcz -> biel) */}
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

