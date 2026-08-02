import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { principles } from "@/lib/data";

export function Principles() {
  return (
    <section id="how-i-work" className="border-y border-border bg-muted">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)]">
        <Reveal>
          <SectionEyebrow>06 / HOW I WORK</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="m-0 mb-12 max-w-[17em] text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em]">
            How I build — the part that doesn&apos;t show up in a stack list.
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
          {principles.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-[14px] border border-border bg-card p-[26px]">
                <div className="mb-3 font-mono text-[11px] tracking-wide text-primary">{p.tag}</div>
                <h3 className="m-0 mb-2 text-[16.5px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                <p className="m-0 text-sm leading-[1.6] text-body">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
