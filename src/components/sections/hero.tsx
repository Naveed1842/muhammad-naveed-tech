import { ArrowRight, Download, Mail } from "lucide-react";
import { HeadshotSlot } from "@/components/headshot-slot";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-[var(--band-bg)] text-[var(--band-foreground)]"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex w-[92vw] max-w-[1120px] flex-wrap items-center gap-[clamp(40px,6vw,80px)] py-[clamp(64px,9vw,120px)]">
        <div className="flex-1 basis-[460px]">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[var(--band-border)] px-3 py-1.5 font-mono text-[12.5px] tracking-wide text-[var(--band-muted)]">
            <span className="animate-pulse-dot size-[7px] rounded-full bg-success" />
            SOFTWARE ARCHITECT · SENIOR FULL-STACK ENGINEER · RIYADH
          </div>
          <h1 className="mb-6 max-w-[15em] text-[clamp(32px,4.8vw,52px)] leading-[1.12] font-bold tracking-[-0.03em] text-white">
            I lead frontend architecture for TAMM, Saudi Arabia&apos;s national government
            services platform.
          </h1>
          <p className="mb-9 max-w-[34em] text-[clamp(16px,1.9vw,19px)] leading-[1.65] text-[var(--band-body)]">
            [N] product teams build on the component library and standards I own. On the side, I
            designed, built, deployed, and now run a production SaaS by myself. Ten years across
            government, oilfield, healthcare, and payments — Java/Spring Boot · Angular ·
            PostgreSQL · AWS.
          </p>
          <div className="mb-[38px] flex flex-wrap gap-3">
            <a
              href="#tamm"
              className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-[22px] py-[13px] text-[15px] font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              Read the TAMM story
              <ArrowRight className="size-4" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[9px] border border-[var(--band-border)] px-[22px] py-[13px] text-[15px] font-medium text-[var(--band-foreground)] no-underline"
            >
              <Download className="size-4" />
              Résumé (PDF)
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 rounded-[9px] border border-[var(--band-border)] px-[22px] py-[13px] text-[15px] font-medium text-[var(--band-foreground)] no-underline"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="flex flex-1 basis-[320px] justify-center">
          <HeadshotSlot />
        </div>
      </div>
    </header>
  );
}
