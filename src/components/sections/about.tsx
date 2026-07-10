import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/reveal";
import { growthStory } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
      <Reveal>
        <SectionEyebrow>01 / ABOUT</SectionEyebrow>
      </Reveal>
      <div className="mb-14 flex flex-wrap gap-[clamp(32px,6vw,72px)]">
        <Reveal className="flex-1 basis-[300px]">
          <h2 className="m-0 text-[clamp(28px,3.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.025em]">
            I&apos;m hired to own software products — architecture to operations.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex-1 basis-[360px] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
          <p className="m-0 mb-[18px]">
            I specialize in enterprise software: systems with real users, real money, and real
            compliance requirements. My work sits at the intersection of architecture and
            delivery — I design systems that hold up over years, then build and ship them myself.
          </p>
          <p className="m-0 mb-[18px]">
            Companies bring me in when they need someone who thinks in products, not tasks: clean,
            framework-independent architecture; security designed in from the start; cloud
            infrastructure that a small team can actually operate; and code the next engineer can
            maintain without me in the room.
          </p>
          <p className="m-0">
            I treat AI-assisted development as a core engineering skill — I use it daily for
            architecture exploration, testing, and speed, with the judgment to know what to keep
            and what to throw away. Long-term thinking is the through-line: I optimize for the
            total cost of a system over its life, not the demo.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5 rounded-2xl border border-border bg-muted px-[clamp(16px,3vw,32px)] py-6">
          {growthStory.map((step, i) => (
            <div key={`${step.year}-${step.label}`} className="flex items-center gap-1.5">
              <span
                className={`rounded-full border px-[13px] py-[7px] font-mono text-xs ${
                  step.active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-body"
                }`}
              >
                {step.year ? `${step.year} · ${step.label}` : step.label}
              </span>
              {i < growthStory.length - 1 && (
                <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
