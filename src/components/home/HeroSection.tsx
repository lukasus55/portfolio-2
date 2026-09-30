import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="min-h-[calc(100dvh-73px)] flex flex-col justify-center max-w-6xl mx-auto w-full px-6 py-12 md:py-20"
    >
      <div className="space-y-8 max-w-5xl">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.85rem] font-bold tracking-tight text-text leading-[1.08]">
            {t("greeting")}{" "}
            <span className="text-text">{t("name")}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-[1.8rem] text-neutral-600 font-normal leading-relaxed max-w-3xl">
            {t("role")}
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
    </section>
  );
}
