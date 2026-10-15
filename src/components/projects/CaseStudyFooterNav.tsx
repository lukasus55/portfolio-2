import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "./caseStudyData";

interface CaseStudyFooterNavProps {
  nextProjectId: string;
}

export function CaseStudyFooterNav({ nextProjectId }: CaseStudyFooterNavProps) {
  const t = useTranslations("CaseStudy");
  const nextProject = caseStudies[nextProjectId];

  if (!nextProject) return null;

  return (
    <nav
      id="next-project"
      aria-label={t("nextProject")}
      className="py-20 md:py-28 space-y-8 text-center sm:text-left scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-wider text-neutral-500 block">
            {t("nextProject")}
          </span>
          <Link
            href={`/projects/${nextProject.id}`}
            className="group inline-block"
          >
            <h2 className="font-header text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text group-hover:text-accent transition-colors cursor-pointer">
              {nextProject.name}
            </h2>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link href={`/projects/${nextProject.id}`}>
            <Button variant="accent" size="lg">
              <span>{t("viewNext")}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/#projects">
            <Button variant="ghost" size="lg">
              <span>{t("backToProjects")}</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
