import { useTranslations } from "next-intl";
import { CaseStudyFeatureItem } from "./CaseStudyFeatureItem";
import type { CaseStudyItem } from "./caseStudyData";

interface CaseStudyFeaturesProps {
  project: CaseStudyItem;
}

export function CaseStudyFeatures({ project }: CaseStudyFeaturesProps) {
  const t = useTranslations("CaseStudy");

  return (
    <section id="features" className="py-16 md:py-24 border-b border-text/10 space-y-16 scroll-mt-24">
      <h2 className="font-header text-3xl sm:text-4xl font-medium tracking-tight text-text">
        {t("featuresTitle")}
      </h2>

      <div className="space-y-20 md:space-y-28">
        {project.features.map((feature, idx) => (
          <CaseStudyFeatureItem
            key={feature.id}
            feature={feature}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
