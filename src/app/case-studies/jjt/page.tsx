import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { jjtCaseStudy } from "@/lib/case-study-jjt";
import { flagship } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: jjtCaseStudy.title,
  description: jjtCaseStudy.description,
  openGraph: {
    title: jjtCaseStudy.title,
    description: jjtCaseStudy.description,
    url: `${siteConfig.url}/case-studies/jjt`,
  },
};

export default function JjtCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ============ HERO ============ */}
        <header className="relative overflow-hidden bg-[var(--band-bg)] text-[var(--band-foreground)]">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto w-[92vw] max-w-[1120px] py-[clamp(56px,8vw,96px)]">
            <Link
              href="/#cases"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[12.5px] text-[var(--band-muted)] no-underline hover:text-[var(--band-foreground)]"
            >
              <ArrowLeft className="size-3.5" />
              Back to portfolio
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#2a4438] px-2.5 py-[5px] font-mono text-[11px] tracking-wide text-success">
                <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
                LIVE IN PRODUCTION
              </span>
              <span className="font-mono text-[11px] text-[var(--band-muted)]">{jjtCaseStudy.period}</span>
            </div>

            <h1 className="m-0 mb-4 max-w-[18em] text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
              {jjtCaseStudy.title}
            </h1>
            <p className="m-0 mb-6 max-w-[42em] text-[clamp(15px,1.7vw,18px)] leading-[1.65] text-[var(--band-body)]">
              {flagship.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={jjtCaseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-5 py-3 text-[14.5px] font-medium text-white no-underline transition-opacity hover:opacity-90"
              >
                Visit {jjtCaseStudy.liveLabel}
                <ArrowRight className="size-[15px]" />
              </a>
              <span className="font-mono text-[12.5px] text-[var(--band-muted)]">{jjtCaseStudy.role}</span>
            </div>
          </div>
        </header>

        {/* ============ PROBLEM ============ */}
        <section className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
          <Reveal>
            <SectionEyebrow>{jjtCaseStudy.problem.eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="m-0 mb-6 max-w-[20em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em]">
              {jjtCaseStudy.problem.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[46em] text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-body">
            {jjtCaseStudy.problem.body.map((p) => (
              <p key={p} className="m-0 mb-[18px] last:mb-0">
                {p}
              </p>
            ))}
          </Reveal>
        </section>

        {/* ============ APPROACH ============ */}
        <section className="border-y border-border bg-muted">
          <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
            <Reveal>
              <SectionEyebrow>{jjtCaseStudy.approach.eyebrow}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="m-0 mb-5 max-w-[20em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em]">
                {jjtCaseStudy.approach.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="m-0 mb-10 max-w-[46em] text-[15px] leading-[1.7] text-body">{jjtCaseStudy.approach.intro}</p>
            </Reveal>

            <RevealGroup className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
              {jjtCaseStudy.approach.pillars.map((p) => (
                <RevealItem key={p.title}>
                  <div className="h-full rounded-[14px] border border-border bg-card p-[26px]">
                    <h3 className="m-0 mb-2 text-[16.5px] font-semibold tracking-[-0.01em]">{p.title}</h3>
                    <p className="m-0 text-sm leading-[1.6] text-body">{p.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ============ SYSTEM LAYOUT ============ */}
        <section className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
          <Reveal>
            <SectionEyebrow>{jjtCaseStudy.system.eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="m-0 mb-10 max-w-[20em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em]">
              {jjtCaseStudy.system.title}
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {jjtCaseStudy.system.modules.map((mod) => (
              <RevealItem key={mod.label}>
                <div className="h-full rounded-[14px] border border-border bg-card p-[26px]">
                  <div className="mb-3 font-mono text-[11px] tracking-wide text-primary">{mod.label}</div>
                  <h3 className="m-0 mb-2 text-[16.5px] font-semibold tracking-[-0.01em]">{mod.title}</h3>
                  <p className="m-0 text-sm leading-[1.6] text-body">{mod.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* ============ METRICS ============ */}
        <div className="border-y border-border bg-muted">
          <div className="mx-auto grid w-[92vw] max-w-[1120px] grid-cols-2 nav:grid-cols-4">
            {flagship.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-2 py-[26px] text-center ${i % 2 === 0 ? "border-r border-border" : ""} ${
                  i < 2 ? "border-b border-border nav:border-b-0" : ""
                } ${i === 2 ? "nav:border-r" : ""}`}
              >
                <div className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.02em] text-foreground">
                  {m.value}
                </div>
                <div className="mt-1 font-mono text-[11.5px] tracking-wide text-muted-foreground uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ CHALLENGES ============ */}
        <section className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
          <Reveal>
            <SectionEyebrow>{jjtCaseStudy.challenges.eyebrow}</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="m-0 mb-10 max-w-[20em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em]">
              {jjtCaseStudy.challenges.title}
            </h2>
          </Reveal>

          <RevealGroup className="flex flex-col gap-4">
            {jjtCaseStudy.challenges.items.map((c) => (
              <RevealItem key={c.title}>
                <div className="rounded-[14px] border border-border bg-card p-[26px]">
                  <h3 className="m-0 mb-3 text-[17px] font-semibold tracking-[-0.01em]">{c.title}</h3>
                  <div className="grid gap-4 nav:grid-cols-2">
                    <p className="m-0 text-sm leading-[1.65] text-body">
                      <strong className="text-foreground">Problem — </strong>
                      {c.problem}
                    </p>
                    <p className="m-0 text-sm leading-[1.65] text-body">
                      <strong className="text-foreground">Solution — </strong>
                      {c.solution}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* ============ DEPLOYMENT ============ */}
        <section className="bg-[var(--band-bg)] text-[var(--band-foreground)]">
          <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
            <Reveal>
              <SectionEyebrow tone="band">{jjtCaseStudy.deployment.eyebrow}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="m-0 mb-5 max-w-[22em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em] text-white">
                {jjtCaseStudy.deployment.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="m-0 mb-8 max-w-[48em] text-[15px] leading-[1.75] text-[var(--band-body)]">
                {jjtCaseStudy.deployment.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-1.5">
                {flagship.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[5px] border border-[var(--band-border)] bg-[var(--band-bg-raised)] px-2 py-1 font-mono text-[11.5px] text-[var(--band-body)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ ROADMAP ============ */}
        <section className="border-b border-border bg-muted">
          <div className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(64px,8vw,100px)]">
            <Reveal>
              <SectionEyebrow>{jjtCaseStudy.roadmap.eyebrow}</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="m-0 mb-8 max-w-[20em] text-[clamp(26px,3.4vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em]">
                {jjtCaseStudy.roadmap.title}
              </h2>
            </Reveal>
            <RevealGroup className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
              {jjtCaseStudy.roadmap.items.map((item) => (
                <RevealItem key={item}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card px-5 py-4">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm leading-[1.6] text-body">{item}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ============ CLOSING CTA ============ */}
        <section className="mx-auto w-[92vw] max-w-[1120px] py-[clamp(72px,9vw,110px)] text-center">
          <Reveal>
            <h2 className="mx-auto m-0 mb-5 max-w-[18em] text-[clamp(28px,4vw,44px)] leading-[1.08] font-bold tracking-[-0.03em]">
              Want a system like this built right the first time?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 rounded-[9px] bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
              >
                <Mail className="size-[17px]" />
                {siteConfig.email}
              </a>
              <Link
                href="/#cases"
                className="inline-flex items-center gap-2.5 rounded-[9px] border border-border bg-background px-6 py-3.5 text-[15px] font-medium text-foreground no-underline"
              >
                <ArrowLeft className="size-4" />
                Back to portfolio
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
