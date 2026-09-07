import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectMapping from "@/components/ProjectMapping";
import Research from "@/components/Research";
import SkillEcosystem from "@/components/SkillEcosystem";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-paper text-brandText-primary selection:bg-accent/20 selection:text-brandText-primary">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ProjectMapping />
      <Research />
      <SkillEcosystem />
      <Experience />
      <Achievements />
      <ContactForm />
      <Footer />
    </main>
  );
}
