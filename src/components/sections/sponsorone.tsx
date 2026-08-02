import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { sponsorOne } from "@/lib/data";

export function SponsorOne() {
  return (
    <section id="sponsorone" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
      <Reveal>
        <SectionEyebrow>{sponsorOne.eyebrow}</SectionEyebrow>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="rounded-2xl border border-border bg-card p-[clamp(28px,4vw,44px)]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5">
            <h3 className="m-0 text-[clamp(22px,2.8vw,28px)] font-bold tracking-[-0.02em]">
              {sponsorOne.name}
            </h3>
            <span className="font-mono text-[11px] text-muted-foreground">{sponsorOne.period}</span>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-border bg-muted px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-primary">
              {sponsorOne.roleLine}
            </span>
            <span className="rounded-full border border-border bg-muted px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-muted-foreground">
              {sponsorOne.status}
            </span>
            <a
              href={sponsorOne.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] text-primary no-underline"
            >
              {sponsorOne.urlLabel} ↗
            </a>
          </div>

          <div className="max-w-[52em] text-[15px] leading-[1.75] text-body">
            <p className="m-0 mb-[18px]">{sponsorOne.problem}</p>
            <p className="m-0 mb-[18px]">{sponsorOne.solution}</p>
            <p className="m-0">{sponsorOne.ownership}</p>
          </div>

          <div className="mt-7">
            <div className="mb-3 font-mono text-[11px] tracking-wide text-primary">
              {sponsorOne.decisionsLabel}
            </div>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {sponsorOne.decisions.map((d) => (
                <li key={d} className="flex gap-2.5 text-[14px] leading-[1.6] text-body">
                  <svg className="mt-1.5 size-1.5 shrink-0" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3" fill="#2B57D4" />
                  </svg>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[10px] border border-border bg-muted px-5 py-4">
            <div className="mb-1.5 font-mono text-[11px] tracking-wide text-primary">
              {sponsorOne.differentlyLabel}
            </div>
            <p className="m-0 text-[14px] leading-[1.6] text-body">{sponsorOne.differently}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-border pt-[22px]">
            {sponsorOne.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-[5px] border border-border bg-muted px-2 py-1 font-mono text-[11.5px] text-body"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={sponsorOne.caseStudyHref}
              className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-5 py-3 text-[14.5px] font-medium text-white no-underline transition-opacity hover:opacity-90"
            >
              {sponsorOne.caseStudyLabel}
              <ArrowRight className="size-[15px]" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
