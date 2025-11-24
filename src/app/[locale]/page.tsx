import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("homePage");

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* <ExperienceSection /> */}
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
