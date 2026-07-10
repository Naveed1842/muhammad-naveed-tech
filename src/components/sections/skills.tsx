import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { coreStack, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)]">
      <Reveal>
        <SectionEyebrow>07 / STACK</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="m-0 mb-3.5 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em]">
          Deep where it matters.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="m-0 mb-10 max-w-[38em] text-[15px] text-muted-foreground">
          The core I&apos;d bet a product on — plus the surrounding toolkit.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mb-9 flex flex-wrap gap-2.5">
          {coreStack.map((tech) => (
            <span
              key={tech}
              className="rounded-[9px] bg-[var(--band-bg)] px-[18px] py-2.5 font-mono text-sm font-semibold text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <RevealGroup className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
        {skillGroups.map((g) => (
          <RevealItem key={g.group}>
            <div className="h-full rounded-xl border border-border px-5 py-[18px]">
              <div className="mb-2.5 font-mono text-[11px] tracking-wide text-primary">{g.group}</div>
              <div className="text-[13.5px] leading-[1.7] text-body">{g.list}</div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
