import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CompanyStrip } from "@/components/sections/company-strip";
import { Tamm } from "@/components/sections/tamm";
import { SponsorOne } from "@/components/sections/sponsorone";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Principles } from "@/components/sections/principles";
import { Skills } from "@/components/sections/skills";
import { CertsEducation } from "@/components/sections/certs-education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CompanyStrip />
        <Tamm />
        <SponsorOne />
        <About />
        <Experience />
        <Principles />
        <Skills />
        <CertsEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
