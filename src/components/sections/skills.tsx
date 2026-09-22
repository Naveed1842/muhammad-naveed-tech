import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { stackTiers } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)]">
      <Reveal>
        <SectionEyebrow>08 / STACK</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="m-0 mb-10 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em]">
          Deep where it matters.
        </h2>
      </Reveal>

      <RevealGroup className="flex flex-col gap-3">
        {stackTiers.map((tier) => (
          <RevealItem key={tier.label}>
            <div className="rounded-xl border border-border px-5 py-[18px]">
              <div className="mb-2.5 font-mono text-[11px] tracking-wide text-primary">
                {tier.label}
              </div>
              <div className="text-[13.5px] leading-[1.7] text-body">{tier.list}</div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
