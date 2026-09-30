import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero: Imię, rola, CTA See projects */}
      <HeroSection />

      {/* 2. Experience: Lista doświadczenia z image_placeholder.jpg */}
      <ExperienceSection />

      {/* 3. Projects: Mockup 16:9 + 4 miniatury ze zdjęciami */}
      <ProjectsSection />

      {/* 4. Skills: Czyste ikony technologii (unboxed) */}
      <SkillsSection />

      {/* 5. About Me: Portret po lewej, 2 akapity po prawej */}
      <AboutSection />

      {/* 6. Contact: Dane kontaktowe + minimalistyczny formularz */}
      <ContactSection />

      {/* 7. Footer: Ciemna belka kończąca */}
      <Footer />
    </main>
  );
}