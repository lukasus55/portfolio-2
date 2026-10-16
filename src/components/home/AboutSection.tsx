import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="w-full bg-accent text-white overflow-hidden relative">
      {/* Dynamiczny skos wejściowy z sekcji Projects (biel -> pomarańcz) */}
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start max-w-4xl">
          {/* Zdjęcie profilowe - wyłania się z lewej strony (slide-left) */}
          <div className="md:col-span-4 w-full max-w-sm">
            <ScrollReveal variant="slide-left" duration={500}>
              <div className="relative aspect-4/5 w-full rounded-sm overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]">
                <Image
                  src="/about_me_portrait.png"
                  alt="Łukasz Kostyk - portret"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 2 akapity po prawej - wyłaniają się z prawej strony (slide-right) */}
          <div className="md:col-span-8 space-y-6 text-white/95 text-base md:text-lg leading-relaxed pt-2">
            <ScrollReveal variant="slide-right" delay={100} duration={500}>
              <p>{t("paragraph1")}</p>
            </ScrollReveal>
            <ScrollReveal variant="slide-right" delay={200} duration={500}>
              <p>{t("paragraph2")}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Dynamiczny skos wyjściowy do Contact (pomarańcz -> szarość) */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-12 block"
        >
          <path d="M0 48H1440L1440 0Z" className="fill-neutral-100" />
        </svg>
      </div>
    </section>
  );
}

