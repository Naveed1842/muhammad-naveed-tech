import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-muted">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
        <Reveal>
          <SectionEyebrow>06 / EXPERIENCE</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="m-0 mb-14 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-semibold tracking-[-0.025em]">
            A decade of increasing ownership.
          </h2>
        </Reveal>

        <div className="relative">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative ml-1.5 flex flex-wrap gap-[clamp(20px,4vw,56px)] border-l-2 border-border pb-12 pl-[clamp(24px,4vw,40px)]">
                <span className="absolute -left-[9px] top-1 size-4 rounded-full border-[3px] border-primary bg-muted" />
                <div className="flex-none basis-[210px]">
                  <div className="mb-2 font-mono text-[12.5px] text-muted-foreground">{job.period}</div>
                  <h3 className="m-0 mb-1 text-[19px] font-bold tracking-[-0.01em]">{job.company}</h3>
                  <div className="text-sm text-muted-foreground">{job.location}</div>
                  <div className="mt-2 text-sm font-medium text-primary">{job.role}</div>
                  <div className="mt-2.5 font-mono text-[11px] tracking-wide text-muted-foreground">
                    {job.theme}
                  </div>
                </div>
                <div className="flex-1 basis-[360px]">
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-[1.6] text-body">
                        <svg className="mt-[7px] size-1.5 shrink-0" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" fill="#2B57D4" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
