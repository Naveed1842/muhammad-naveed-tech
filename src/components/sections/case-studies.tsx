import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="cases" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
      <Reveal>
        <SectionEyebrow>03 / CASE STUDIES</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="m-0 mb-3 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em]">
          Not what I built — how I solved it.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="m-0 mb-12 max-w-[40em] text-[15px] text-muted-foreground">
          Each case study walks through the problem, the architecture, the hard decisions, and
          what the business got out of it.
        </p>
      </Reveal>

      <RevealGroup className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {caseStudies.map((cs) => (
          <RevealItem key={cs.title}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <div className="mb-[18px] flex items-center justify-between">
                <span className="font-mono text-[11.5px] tracking-wide text-primary">{cs.tag}</span>
                <span className="font-mono text-[11.5px] text-muted-foreground">{cs.period}</span>
              </div>
              <h3 className="m-0 mb-2.5 text-xl font-bold tracking-[-0.015em]">{cs.title}</h3>
              <p className="m-0 mb-[22px] flex-1 text-[14.5px] leading-[1.65] text-body">
                <strong>Problem:</strong> {cs.problem} <strong>Solution:</strong> {cs.solution}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-[18px]">
                <span className="text-sm font-semibold text-primary">Read case study →</span>
                <span className="rounded-full border border-border px-2 py-[3px] font-mono text-[10.5px] text-muted-foreground">
                  {cs.status}
                </span>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
