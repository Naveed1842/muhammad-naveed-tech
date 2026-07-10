import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { flagship } from "@/lib/data";

export function Flagship() {
  return (
    <section id="flagship" className="bg-[var(--band-bg)] text-[var(--band-foreground)]">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
        <Reveal>
          <SectionEyebrow tone="band">02 / FLAGSHIP PRODUCT</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="m-0 mb-3 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em] text-white">
            One person. One complete enterprise platform.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="m-0 mb-12 max-w-[42em] text-[15px] text-[var(--band-muted)]">
            Proof, in production: I architected, designed, built, deployed, and now operate a full
            SaaS platform — every layer, every decision.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[18px] border border-[#37518f] bg-[var(--band-bg-raised)] p-[clamp(28px,4vw,44px)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-primary to-transparent" />

            <div className="mb-[22px] flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#2a4438] px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-success">
                <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
                LIVE IN PRODUCTION
              </span>
              <span className="ml-auto font-mono text-[11px] text-[var(--band-muted)]">
                {flagship.period}
              </span>
            </div>

            <div className="flex flex-wrap gap-[clamp(28px,4vw,56px)]">
              <div className="flex-1 basis-[380px]">
                <h3 className="m-0 mb-1.5 text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] text-white">
                  {flagship.name}
                </h3>
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[13px] text-[var(--band-accent)] no-underline"
                >
                  {flagship.urlLabel} ↗
                </a>
                <p className="mt-[18px] mb-0 text-[15px] leading-[1.7] text-[var(--band-body)]">
                  {flagship.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {flagship.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-[var(--band-border)] bg-[var(--band-bg)] px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-[var(--band-accent)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
                  {flagship.modules.map((mod) => (
                    <div
                      key={mod.label}
                      className="rounded-[10px] border border-[var(--band-border)] bg-[var(--band-bg)] px-4 py-3.5"
                    >
                      <div className="mb-1.5 font-mono text-[11px] tracking-wide text-[var(--band-accent)]">
                        {mod.label}
                      </div>
                      <div className="text-[13px] leading-[1.5] text-[var(--band-body)]">{mod.body}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 basis-[300px] flex-col gap-3">
                <div className="font-mono text-[11px] tracking-wide text-[var(--band-muted)]">
                  ENGINEERING HIGHLIGHTS
                </div>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {flagship.highlights.map((h) => (
                    <li key={h.title} className="flex gap-2.5 text-[13.5px] leading-[1.55] text-[var(--band-body)]">
                      <svg className="mt-1.5 size-1.5 shrink-0" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" r="3" fill="#2B57D4" />
                      </svg>
                      <span>
                        <strong className="text-[var(--band-foreground)]">{h.title}</strong> — {h.body}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {flagship.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg border border-[var(--band-border)] bg-[var(--band-bg)] px-2 py-2.5 text-center"
                    >
                      <div className="text-[17px] font-bold tracking-[-0.02em] text-white">{m.value}</div>
                      <div className="mt-0.5 font-mono text-[9.5px] text-[var(--band-muted)]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-[26px] flex flex-wrap gap-1.5 border-t border-[var(--band-border)] pt-[22px]">
              {flagship.stack.map((tech) => (
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
