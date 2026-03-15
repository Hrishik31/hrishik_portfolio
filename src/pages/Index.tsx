import Navbar from "@/components/Navbar";
import PCBBackground from "@/components/PCBBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import DomainMapSection from "@/components/sections/DomainMapSection";
import SwotSection from "@/components/sections/SwotSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import FutureGoalsSection from "@/components/sections/FutureGoalsSection";
import CertsGoalsSection from "@/components/sections/CertsGoalsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <PCBBackground />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <DomainMapSection />
    <SwotSection />
    <PhilosophySection />
    <FutureGoalsSection />
    <TestimonialsSection />
    <CertsGoalsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
