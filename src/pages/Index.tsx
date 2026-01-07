import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechMarquee from "@/components/TechMarquee";
import ProjectsSection from "@/components/ProjectsSection";
import CTABanner from "@/components/CTABanner";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StatsBanner from "@/components/StatsBanner";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <TechMarquee />
        <ProjectsSection />
        <CTABanner />
        <SkillsSection />
        <StatsBanner />
        <TestimonialsSection />

        <AboutSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
