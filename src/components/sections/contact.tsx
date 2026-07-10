import type { SVGProps } from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(80px,10vw,130px)] text-center">
      <Reveal>
        <SectionEyebrow className="justify-center">10 / CONTACT</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mx-auto m-0 mb-5 max-w-[15em] text-[clamp(32px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.03em]">
          Have a product that needs an owner?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto m-0 mb-10 max-w-[34em] text-[clamp(16px,1.9vw,18px)] text-muted-foreground">
          Open to senior engineering and architecture roles. The fastest way to reach me is email —
          I&apos;ll get back to you quickly.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
          >
            <Mail className="size-[17px]" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-[9px] border border-border bg-background px-6 py-3.5 text-[15px] font-medium text-foreground no-underline"
          >
            <Download className="size-[17px]" />
            Download Resume
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-body">
          <span className="inline-flex items-center gap-2">
            <Phone className="size-4 text-primary" />
            {siteConfig.phone}
          </span>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-inherit no-underline hover:text-primary"
          >
            <LinkedinIcon className="size-4 text-primary" />
            {siteConfig.linkedinLabel}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {siteConfig.location} · {siteConfig.locationNote}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
