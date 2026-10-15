import Image from "next/image";
import { useTranslations } from "next-intl";
import type { CaseStudyChallenge } from "./caseStudyData";

interface CaseStudyTakeawaysProps {
  challenges: CaseStudyChallenge[];
}

const challengeImages: Record<string, { src: string; alt: string }> = {
  permissions: {
    src: "/projects/kkol/permissions_diagram.png",
    alt: "Wielopoziomowy model uprawnień (RBAC) - schemat hierarchii i reguł kontekstowych",
  },
  ecosystem: {
    src: "/projects/kkol/ecosystem_diagram.png",
    alt: "Topologia i przepływ danych w ekosystemie KKOL - centralny hub SSO, Dartes i Discord Bot",
  },
};

export function CaseStudyTakeaways({ challenges }: CaseStudyTakeawaysProps) {
  const t = useTranslations("CaseStudy");

  return (
    <section id="challenges" className="py-16 md:py-24 border-b border-text/10 space-y-12 scroll-mt-24">
      <h2 className="font-header text-3xl sm:text-4xl font-medium tracking-tight text-text">
        {t("challengesTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {challenges.map((challenge) => {
          const graphic = challengeImages[challenge.id];

          return (
            <article
              key={challenge.id}
              className="border-t border-text/20 pt-6 space-y-4"
            >
              <h3 className="font-header text-xl sm:text-2xl font-medium text-text">
                {t(challenge.titleKey)}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {t(challenge.descKey)}
              </p>

              {graphic && (
                <div className="mt-6 relative w-full aspect-16/10">
                  <Image
                    src={graphic.src}
                    alt={graphic.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain"
                  />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
