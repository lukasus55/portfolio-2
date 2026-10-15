import Image from "next/image";
import { useTranslations } from "next-intl";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import type { CaseStudyFeature } from "./caseStudyData";

interface CaseStudyFeatureItemProps {
  feature: CaseStudyFeature;
  index: number;
}

export function CaseStudyFeatureItem({
  feature,
}: CaseStudyFeatureItemProps) {
  const t = useTranslations("CaseStudy");
  const title = t(feature.titleKey);
  const desc = t(feature.descKey);

  return (
    <article className="space-y-6">
      {/* Tytuł i opis funkcjonalności */}
      <div className="space-y-2 max-w-3xl">
        <h3 className="font-header text-2xl sm:text-3xl font-medium tracking-tight text-text">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Scena mediów (wideo lub grafika 16/10) */}
      {feature.mediaType === "video" ? (
        <ProjectVideo
          src={feature.mediaSrc}
          poster={feature.poster}
          title={title}
          aspectRatio="16/9"
        />
      ) : (
        <div className="relative w-full aspect-16/10 rounded-sm overflow-hidden border border-text/10 bg-neutral-100 shadow-2xs">
          <Image
            src={feature.mediaSrc}
            alt={`Zrzut ekranu modułu: ${title}`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </div>
      )}
    </article>
  );
}
