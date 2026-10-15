import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { caseStudies } from "@/components/projects/caseStudyData";
import { CaseStudyHeader } from "@/components/projects/CaseStudyHeader";
import { CaseStudyHeroMedia } from "@/components/projects/CaseStudyHeroMedia";
import { CaseStudyOverview } from "@/components/projects/CaseStudyOverview";
import { CaseStudyFeatures } from "@/components/projects/CaseStudyFeatures";
import { CaseStudySubApps } from "@/components/projects/CaseStudySubApps";
import { CaseStudyTakeaways } from "@/components/projects/CaseStudyTakeaways";
import { CaseStudyFooterNav } from "@/components/projects/CaseStudyFooterNav";
import { CaseStudyToc, CaseStudyMobileToc } from "@/components/projects/CaseStudyToc";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  const projectIds = Object.keys(caseStudies);
  return routing.locales.flatMap((locale) =>
    projectIds.map((id) => ({ locale, id }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const project = caseStudies[id];

  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "CaseStudy" });
  const title = `${project.name} | Case Study | Łukasz Kostyk`;
  const description = t(project.taglineKey);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: project.heroPoster }],
    },
    alternates: {
      languages: {
        pl: `/pl/projects/${id}`,
        en: `/en/projects/${id}`,
      },
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { locale, id } = await params;
  const project = caseStudies[id];

  if (!project) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "CaseStudy" });

  const tocItems = [
    { id: "hero", label: locale === "en" ? "Overview" : "Przegląd" },
    { id: "overview", label: t("overviewTitle") },
    { id: "features", label: t("featuresTitle") },
    ...(project.subApps && project.subApps.length > 0
      ? [{ id: "ecosystem", label: t("ecosystemTitle") }]
      : []),
    { id: "challenges", label: t("challengesTitle") },
    { id: "next-project", label: t("nextProject") },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Pasek szybkiego skoku na smartfonach */}
      <CaseStudyMobileToc items={tocItems} />

      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-6 pt-6 md:pt-8 pb-16">
          <div className="flex gap-10 lg:gap-14 items-start">
            {/* Główna kolumna treści */}
            <div className="flex-1 min-w-0 space-y-16 md:space-y-20">
              <div id="hero" className="space-y-6 md:space-y-7 scroll-mt-24">
                <CaseStudyHeader project={project} />
                <CaseStudyHeroMedia project={project} />
              </div>

              <CaseStudyOverview project={project} />

              <CaseStudyFeatures project={project} />

              {project.subApps && project.subApps.length > 0 && (
                <CaseStudySubApps subApps={project.subApps} />
              )}

              <CaseStudyTakeaways challenges={project.challenges} />

              <CaseStudyFooterNav nextProjectId={project.nextProjectId} />
            </div>

            {/* Boczny interaktywny spis treści (desktop) */}
            <CaseStudyToc items={tocItems} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
