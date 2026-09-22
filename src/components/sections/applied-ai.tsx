import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { appliedAi } from "@/lib/data";

export function AppliedAi() {
  return (
    <section id="applied-ai" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)]">
      <Reveal>
        <SectionEyebrow>{appliedAi.eyebrow}</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="m-0 mb-4 max-w-[18em] text-[clamp(28px,3.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.025em]">
          {appliedAi.title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="m-0 mb-10 max-w-[44em] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
          {appliedAi.intro}
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {appliedAi.items.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card px-5 py-[18px]">
                <div className="mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </div>
                <p className="m-0 text-[13.5px] leading-[1.65] text-body">{item.body}</p>
              </div>
            </RevealItem>
          ))}
      </RevealGroup>

      <Reveal delay={0.2}>
        <div className="mt-6 rounded-[10px] border border-border bg-muted px-5 py-4">
          <div className="mb-1.5 font-mono text-[11px] tracking-wide text-primary">
            {appliedAi.honestLabel}
          </div>
          <p className="m-0 text-[14px] leading-[1.6] text-body">{appliedAi.honest}</p>
        </div>
      </Reveal>
    </section>
  );
}
