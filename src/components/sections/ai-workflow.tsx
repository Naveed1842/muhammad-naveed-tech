import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { aiWorkflow } from "@/lib/data";

export function AiWorkflow() {
  return (
    <section id="ai" className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,120px)]">
      <Reveal>
        <SectionEyebrow>05 / AI IN MY WORKFLOW</SectionEyebrow>
      </Reveal>
      <div className="flex flex-wrap items-start gap-[clamp(32px,6vw,72px)]">
        <Reveal delay={0.05} className="flex-1 basis-[320px]">
          <h2 className="m-0 mb-[18px] text-[clamp(28px,3.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.025em]">
            AI is part of how I engineer — not a bullet point.
          </h2>
          <p className="m-0 text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
            I work daily with Copilot, Claude, and GPT-based tools across the development cycle —
            and my ML coursework background (NumPy, Pandas, Scikit-learn, TensorFlow) means I
            understand what&apos;s underneath, not just the prompt box.
          </p>
        </Reveal>
        <RevealGroup className="grid flex-1 basis-[380px] grid-cols-1 gap-3 nav:grid-cols-2">
          {aiWorkflow.map((item) => (
            <RevealItem key={item.title}>
              <div className="h-full rounded-xl border border-border px-5 py-[18px]">
                <div className="mb-1 text-[15px] font-semibold">{item.title}</div>
                <div className="text-[13px] leading-[1.55] text-muted-foreground">{item.body}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
