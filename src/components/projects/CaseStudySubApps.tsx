import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CaseStudySubApp } from "./caseStudyData";

interface CaseStudySubAppsProps {
  subApps?: CaseStudySubApp[];
}

export function CaseStudySubApps({ subApps }: CaseStudySubAppsProps) {
  const t = useTranslations("CaseStudy");

  if (!subApps || subApps.length === 0) return null;

  return (
    <section id="ecosystem" className="py-16 md:py-24 border-b border-text/10 space-y-16 scroll-mt-24">
      <h2 className="font-header text-3xl sm:text-4xl font-medium tracking-tight text-text">
        {t("ecosystemTitle")}
      </h2>

      <div className="space-y-16">
        {subApps.map((app) => (
          <article key={app.id} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <h3 className="font-header text-2xl sm:text-3xl font-medium tracking-tight text-text">
                  {app.name}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {t(app.descKey)}
                </p>
              </div>

              {app.liveUrl && (
                <div className="shrink-0">
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="accent" size="md">
                      <span>{t("visitSubApp")}</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              )}
            </div>

            {app.secondaryMediaSrc ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Ankieta wyboru terminu (format wertykalny) */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[574/806] rounded-sm overflow-hidden border border-text/10 bg-[#313338] shadow-2xs">
                    <Image
                      src={app.mediaSrc}
                      alt={`Interaktywna ankieta Discord dla ${app.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Cotygodniowa ciekawostka historyczna */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="relative w-full aspect-[760/245] rounded-sm overflow-hidden border border-text/10 bg-[#313338] shadow-2xs">
                    <Image
                      src={app.secondaryMediaSrc}
                      alt={`Automatyczna czwartkowa ciekawostka ze statystykami dla ${app.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-16/10 rounded-sm overflow-hidden border border-text/10 bg-neutral-100 shadow-2xs">
                <Image
                  src={app.mediaSrc}
                  alt={`Subaplikacja ekosystemu: ${app.name} (${app.subdomain})`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
