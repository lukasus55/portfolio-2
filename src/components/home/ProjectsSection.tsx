import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectVideo } from "@/components/ui/ProjectVideo";

interface ProjectData {
  id: string;
  nameKey: string;
  descKey: string;
  video: string;
  poster: string;
  logo: string;
}

const projectsData: ProjectData[] = [
  {
    id: "kkol",
    nameKey: "items.0.name",
    descKey: "items.0.description",
    video: "/video_placeholder.mp4",
    poster: "/projects/kkol/home.png",
    logo: "/projects/kkol/logo.svg",
  },
  {
    id: "loles",
    nameKey: "items.1.name",
    descKey: "items.1.description",
    video: "/projects/loles/preview.mp4",
    poster: "/projects/loles/home.png",
    logo: "/projects/loles/logo.svg",
  },
];

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="w-full bg-background py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <ScrollReveal variant="fade-up" duration={400}>
          <h2>{t("title")}</h2>
        </ScrollReveal>

        <div className="space-y-28 md:space-y-36">
          {projectsData.map((project, pIdx) => (
            <div key={project.id} className="space-y-8">
              {/* Nagłówek projektu: Tytuł + Opis po lewej, Przycisk CTA po prawej */}
              <ScrollReveal
                variant="fade-up"
                duration={400}
                delay={pIdx * 80}
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="relative h-7 sm:h-8 w-auto shrink-0 flex items-center">
                        <Image
                          src={project.logo}
                          alt={`Logo ${t(project.nameKey)}`}
                          width={72}
                          height={32}
                          className="h-7 sm:h-8 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-medium font-header text-text tracking-tight">
                        {t(project.nameKey)}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                      {t(project.descKey)}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="accent" size="md">
                        {t("caseStudy")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Scena wideo 100% szerokości */}
              <ScrollReveal
                variant="zoom-in"
                duration={500}
                delay={60}
              >
                <ProjectVideo
                  src={project.video}
                  poster={project.poster}
                  title={t(project.nameKey)}
                  aspectRatio="16/9"
                />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
