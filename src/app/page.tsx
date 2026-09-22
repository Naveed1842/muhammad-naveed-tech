import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CompanyStrip } from "@/components/sections/company-strip";
import { About } from "@/components/sections/about";
import { Delivery } from "@/components/sections/delivery";
import { Tamm } from "@/components/sections/tamm";
import { SponsorOne } from "@/components/sections/sponsorone";
import { AppliedAi } from "@/components/sections/applied-ai";
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
        <About />
        <Delivery />
        <Tamm />
        <SponsorOne />
        <AppliedAi />
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
