import { ArrowRight, Download } from "lucide-react";
import { HeadshotSlot } from "@/components/headshot-slot";
import { heroTags } from "@/lib/data";
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
            SOFTWARE ARCHITECT · FULL STACK ENGINEER
          </div>
          <h1 className="mb-6 max-w-[13em] text-[clamp(34px,5.2vw,58px)] leading-[1.06] font-bold tracking-[-0.03em] text-white">
            I build enterprise software from idea to production.
          </h1>
          <p className="mb-9 max-w-[32em] text-[clamp(16px,1.9vw,19px)] leading-[1.65] text-[var(--band-body)]">
            Ten years of designing, building, and operating secure, scalable platforms for
            government, energy, and healthcare — and shipping my own production SaaS. I solve
            business problems with software, not just tickets with code.
          </p>
          <div className="mb-[38px] flex flex-wrap gap-3">
            <a
              href="#flagship"
              className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-[22px] py-[13px] text-[15px] font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              See the flagship product
              <ArrowRight className="size-4" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[9px] border border-[var(--band-border)] px-[22px] py-[13px] text-[15px] font-medium text-[var(--band-foreground)] no-underline"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--band-border)] px-[11px] py-[5px] font-mono text-xs text-[var(--band-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 basis-[320px] justify-center">
          <HeadshotSlot />
        </div>
      </div>
    </header>
  );
}
