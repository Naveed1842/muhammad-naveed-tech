import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { About } from "@/components/sections/about";
import { Flagship } from "@/components/sections/flagship";
import { CaseStudies } from "@/components/sections/case-studies";
import { Principles } from "@/components/sections/principles";
import { AiWorkflow } from "@/components/sections/ai-workflow";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { CertsEducation } from "@/components/sections/certs-education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <About />
        <Flagship />
        <CaseStudies />
        <Principles />
        <AiWorkflow />
        <Experience />
        <Skills />
        <CertsEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
