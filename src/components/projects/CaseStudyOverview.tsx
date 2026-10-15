import { useTranslations } from "next-intl";
import type { CaseStudyItem } from "./caseStudyData";

interface CaseStudyOverviewProps {
  project: CaseStudyItem;
}

export function CaseStudyOverview({ project }: CaseStudyOverviewProps) {
  const t = useTranslations("CaseStudy");

  return (
    <section id="overview" className="py-16 md:py-24 border-b border-text/10 space-y-12 scroll-mt-24">
      <h2 className="font-header text-3xl sm:text-4xl font-medium tracking-tight text-text">
        {t("overviewTitle")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Problem i kontekst - akcentowany lewy blok z linią */}
        <div className="lg:col-span-6 space-y-4 border-l-2 border-text/20 pl-6">
          <h3 className="font-header text-xl font-medium text-text">
            {t("problemTitle")}
          </h3>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {t(project.overviewStoryKey)}
          </p>
        </div>

        {/* Główny cel & Rozwiązanie - akcentowany blok z koralową linią */}
        <div className="lg:col-span-6 space-y-4 border-l-2 border-accent pl-6">
          <h3 className="font-header text-xl font-medium text-text">
            {t("goalTitle")}
          </h3>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            {t(project.overviewGoalKey)}
          </p>
        </div>
      </div>
    </section>
  );
}
