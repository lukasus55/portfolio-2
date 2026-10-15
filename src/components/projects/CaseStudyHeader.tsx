import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { CaseStudyItem } from "./caseStudyData";

interface CaseStudyHeaderProps {
  project: CaseStudyItem;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const t = useTranslations("CaseStudy");

  return (
    <header className="space-y-4 md:space-y-5">
      {/* Powrót do projektów */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500 hover:text-accent transition-colors font-medium cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t("backToProjects")}</span>
        </Link>
      </div>

      {/* Tytuł wraz z logo i zwięzły tagline */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 sm:gap-4">
          {project.logo && (
            <div className="relative h-8 sm:h-10 w-auto shrink-0 flex items-center">
              <Image
                src={project.logo}
                alt={`Logo ${project.name}`}
                width={80}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          )}
          <h1 className="font-header text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text">
            {project.name}
          </h1>
        </div>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
          {t(project.taglineKey)}
        </p>
      </div>

      {/* Kompaktowy pasek: Technologie po lewej, CTA po prawej (minimalny height) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-text/10">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="md">
                <span>{t("liveDemo")}</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md">
                <span>{t("github")}</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
