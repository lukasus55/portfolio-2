import Image from "next/image";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import type { CaseStudyItem } from "./caseStudyData";

interface CaseStudyHeroMediaProps {
  project: CaseStudyItem;
}

export function CaseStudyHeroMedia({ project }: CaseStudyHeroMediaProps) {
  if (project.heroVideo) {
    return (
      <div className="w-full">
        <ProjectVideo
          src={project.heroVideo}
          poster={project.heroPoster}
          title={project.name}
          aspectRatio="16/9"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-16/9 rounded-sm overflow-hidden border border-text/10 bg-neutral-100">
      <Image
        src={project.heroPoster}
        alt={`Widok główny aplikacji ${project.name}`}
        fill
        priority
        sizes="(max-width: 1200px) 100vw, 1200px"
        className="object-cover object-top"
      />
    </div>
  );
}
