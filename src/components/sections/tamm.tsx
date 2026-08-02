import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { tamm } from "@/lib/data";

export function Tamm() {
  return (
    <section id="tamm" className="bg-[var(--band-bg)] text-[var(--band-foreground)]">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
        <Reveal>
          <SectionEyebrow tone="band">{tamm.eyebrow}</SectionEyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-[18px] border border-[#37518f] bg-[var(--band-bg-raised)] p-[clamp(28px,4vw,44px)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-primary to-transparent" />

            <div className="mb-[22px] flex flex-wrap items-center justify-between gap-2.5">
              <h3 className="m-0 text-[clamp(22px,2.8vw,30px)] font-bold tracking-[-0.02em] text-white">
                {tamm.name}
              </h3>
              <span className="font-mono text-[11px] text-[var(--band-muted)]">{tamm.period}</span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--band-border)] bg-[var(--band-bg)] px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-[var(--band-accent)]">
                {tamm.org}
              </span>
              <span className="rounded-full border border-[var(--band-border)] bg-[var(--band-bg)] px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-[var(--band-accent)]">
                {tamm.role}
              </span>
            </div>

            <div className="max-w-[52em] text-[15px] leading-[1.75] text-[var(--band-body)]">
              <p className="m-0 mb-[18px]">{tamm.summary}</p>
              <p className="m-0 mb-[18px]">{tamm.ownership}</p>
              <p className="m-0">{tamm.backend}</p>
            </div>

            <div className="mt-7 grid gap-3 nav:grid-cols-2">
              {tamm.results.map((r) => (
                <div
                  key={r}
                  className="rounded-[10px] border border-[var(--band-border)] bg-[var(--band-bg)] px-4 py-3.5 text-[13.5px] leading-[1.55] text-[var(--band-body)]"
                >
                  {r}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[10px] border border-[var(--band-border)] bg-[var(--band-bg)] px-5 py-4">
              <div className="mb-1.5 font-mono text-[11px] tracking-wide text-[var(--band-accent)]">
                {tamm.hardestPartLabel}
              </div>
              <p className="m-0 text-[14px] leading-[1.6] text-[var(--band-body)]">
                {tamm.hardestPart}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-1.5 border-t border-[var(--band-border)] pt-[22px]">
              {tamm.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[5px] border border-[var(--band-border)] bg-[var(--band-bg)] px-2 py-1 font-mono text-[11.5px] text-[var(--band-body)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
