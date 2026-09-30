import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

interface ProjectData {
  id: string;
  nameKey: string;
  descKey: string;
  images: { src: string }[];
}

const projectsData: ProjectData[] = [
  {
    id: "kkol",
    nameKey: "items.0.name",
    descKey: "items.0.description",
    images: [
      { src: "/projects/kkol/home.png" },
      { src: "/projects/kkol/tournaments.png" },
      { src: "/projects/kkol/ranking.png" },
      { src: "/projects/kkol/poll.png" },
      { src: "/projects/kkol/personal_schedule.png" },
    ],
  },
  {
    id: "loles",
    nameKey: "items.1.name",
    descKey: "items.1.description",
    images: [
      { src: "/projects/loles/home.png" },
      { src: "/projects/loles/home2.png" },
      { src: "/projects/loles/matchup.png" },
      { src: "/projects/loles/history.png" },
      { src: "/projects/loles/notes.png" },
      { src: "/projects/loles/stats.png" },
      { src: "/projects/loles/settings.png" },
    ],
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

        <div className="space-y-28">
          {projectsData.map((project, pIdx) => (
            <div key={project.id} className="space-y-6 max-w-4xl">
              {/* Tytuł oraz podtytuł projektu */}
              <ScrollReveal
                variant="fade-up"
                duration={400}
                delay={pIdx * 80}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-medium font-header text-text">
                    {t(project.nameKey)}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
                    {t(project.descKey)}
                  </p>
                </div>
              </ScrollReveal>

              {/* Zdjęcie / Karuzela zdjęć ze strzałkami (brak autoplay) */}
              <ScrollReveal
                variant="zoom-in"
                duration={500}
                delay={60}
              >
                <ProjectCarousel
                  projectName={t(project.nameKey)}
                  images={project.images.map((img, idx) => ({
                    src: img.src,
                    alt: `${t(project.nameKey)} - slajd ${idx + 1}`,
                  }))}
                />
              </ScrollReveal>

              {/* Przycisk CTA pod zdjęciem */}
              <ScrollReveal
                variant="fade-up"
                duration={400}
                delay={100}
              >
                <div className="pt-1">
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="accent" size="md">
                      {t("caseStudy")}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
