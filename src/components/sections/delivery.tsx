import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { delivery } from "@/lib/data";

export function Delivery() {
  return (
    <section id="delivery" className="border-b border-border bg-muted">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)]">
        <Reveal>
          <SectionEyebrow>{delivery.eyebrow}</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="m-0 mb-4 max-w-[18em] text-[clamp(28px,3.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.025em]">
            {delivery.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="m-0 mb-10 max-w-[46em] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
            {delivery.intro}
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px overflow-hidden rounded-xl border border-border bg-border">
          {delivery.steps.map((step, i) => (
            <RevealItem key={step.label} className="h-full bg-card">
              <div className="h-full px-5 py-[22px]">
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] tracking-wide text-primary">
                    {step.label}
                  </span>
                </div>
                <p className="m-0 text-[13.5px] leading-[1.65] text-body">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
