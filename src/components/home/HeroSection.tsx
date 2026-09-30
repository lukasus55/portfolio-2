import { useTranslations } from "next-intl";
import { Waves } from "lucide-react";
import { Button } from "@/components/ui/Button";
import BalticWaves from "@/components/home/BalticWaves";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100dvh-73px)] flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Poziome fale Bałtyku - czysta minimalistyczna wstęga wybrzeża ze statkami */}
      <BalticWaves />

      {/* Główna treść hero na wierzchu */}
      <div className="max-w-6xl mx-auto w-full px-6 py-12 md:py-20 relative z-10">
        <div className="space-y-8 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.85rem] font-bold tracking-tight text-text leading-[1.08]">
              {t("greeting")}{" "}
              <span className="text-text whitespace-nowrap">{t("name")}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-[1.8rem] text-neutral-600 font-normal leading-relaxed max-w-3xl flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-text font-medium">{t("role")}</span>
              <span className="text-neutral-300 select-none hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-2 text-neutral-600 font-normal">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 stroke-[2.2]" aria-hidden="true" />
                <span>{t("location")}</span>
              </span>
            </p>
          </div>

          <div className="pt-2">
            <a href="#contact" className="inline-block cursor-pointer">
              <Button
                variant="accent"
                size="lg"
                className="text-white font-semibold shadow-xs"
              >
                {t("cta")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
