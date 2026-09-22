import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
      <Reveal>
        <SectionEyebrow>04 / ABOUT</SectionEyebrow>
      </Reveal>
      <div className="flex flex-wrap gap-[clamp(32px,6vw,72px)]">
        <Reveal className="flex-1 basis-[300px]">
          <h2 className="m-0 text-[clamp(28px,3.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.025em]">
            I own systems end to end, and answer for them.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex-1 basis-[360px] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
          <p className="m-0 mb-[18px]">
            I&apos;ve spent ten years on systems where mistakes are expensive: government services,
            oilfield operations, healthcare records, and money movement. Most of that work has been
            the unglamorous kind — a component library that other teams have to live with, a
            WebSocket stream that has to survive a drilling site&apos;s connectivity, a ledger that
            can&apos;t be edited after the fact.
          </p>
          <p className="m-0">
            What I&apos;m actually good at is owning a system end to end and being the person who
            answers for it: the domain model, the API surface, the pipeline, and what happens when
            it breaks at an inconvenient hour. I&apos;m looking for a role where I do that for a
            product rather than a ticket queue — architecture ownership with hands still on the
            code.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
