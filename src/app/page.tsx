import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import AIInnovation from "@/components/ai-innovation"
import ImpactMetrics from "@/components/impact-metrics"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionParticles from "@/components/section-particles"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <section id="about">
          <SectionParticles colors={["#3b82f6", "#06b6d4"]} particleCount={35}>
            <About />
          </SectionParticles>
        </section>
        <section id="skills">
          <SectionParticles colors={["#8b5cf6", "#ec4899"]} particleCount={40}>
            <Skills />
          </SectionParticles>
        </section>
        <section id="experience">
          <SectionParticles colors={["#10b981", "#14b8a6"]} particleCount={35}>
            <Experience />
          </SectionParticles>
        </section>
        <section id="projects">
          <SectionParticles colors={["#f59e0b", "#ef4444"]} particleCount={45}>
            <Projects />
          </SectionParticles>
        </section>
        <section id="ai">
          <SectionParticles colors={["#3b82f6", "#a855f7", "#ec4899"]} particleCount={50}>
            <AIInnovation />
          </SectionParticles>
        </section>
        <section id="metrics">
          <SectionParticles colors={["#06b6d4", "#0ea5e9"]} particleCount={40}>
            <ImpactMetrics />
          </SectionParticles>
        </section>
        <section id="certifications">
          <SectionParticles colors={["#fbbf24", "#f59e0b"]} particleCount={35}>
            <Certifications />
          </SectionParticles>
        </section>
        <section id="contact">
          <SectionParticles colors={["#3b82f6", "#a855f7"]} particleCount={40}>
            <Contact />
          </SectionParticles>
        </section>
      </main>
      <Footer />
    </>
  )
}
