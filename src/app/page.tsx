import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SkillEcosystem from "@/components/SkillEcosystem";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-brandText-primary selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <SkillEcosystem />
      <Experience />
      <Research />
      <Achievements />
      <ContactForm />
      <Footer />
    </main>
  );
}
