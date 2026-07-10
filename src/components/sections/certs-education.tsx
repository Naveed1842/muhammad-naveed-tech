import { Award } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { certifications, education } from "@/lib/data";

export function CertsEducation() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto flex w-[92vw] max-w-[1120px] flex-wrap gap-[clamp(40px,7vw,80px)] py-[clamp(56px,7vw,80px)]">
        <Reveal className="flex-1 basis-[280px]">
          <SectionEyebrow>08 / CERTIFICATIONS</SectionEyebrow>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-3.5 rounded-xl border border-border bg-card px-5 py-[18px]"
              >
                <Award className="size-[22px] shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <div className="text-[15.5px] font-semibold">{cert.title}</div>
                  <div className="mt-0.5 font-mono text-[12.5px] text-muted-foreground">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex-1 basis-[280px]">
          <SectionEyebrow>09 / EDUCATION</SectionEyebrow>
          <div className="rounded-xl border border-border bg-card px-[22px] py-6">
            <div className="text-[17px] font-semibold tracking-[-0.01em]">{education.degree}</div>
            <div className="mt-1 text-[14.5px] text-body">{education.school}</div>
            <div className="mt-2 font-mono text-[12.5px] text-muted-foreground">{education.period}</div>
            <p className="m-0 mt-4 border-t border-border pt-4 text-[13.5px] leading-[1.6] text-muted-foreground">
              {education.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
