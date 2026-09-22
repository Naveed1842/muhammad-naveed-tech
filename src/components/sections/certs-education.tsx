import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/data";

export function CertsEducation() {
  return (
    <section className="border-y border-border bg-muted">
      <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(56px,7vw,80px)]">
        <Reveal className="mx-auto max-w-[420px]">
          <SectionEyebrow>09 / EDUCATION</SectionEyebrow>
          <div className="rounded-xl border border-border bg-card px-[22px] py-6">
            <div className="text-[17px] font-semibold tracking-[-0.01em]">{education.degree}</div>
            <div className="mt-1 text-[14.5px] text-body">{education.school}</div>
            <div className="mt-2 font-mono text-[12.5px] text-muted-foreground">{education.period}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
