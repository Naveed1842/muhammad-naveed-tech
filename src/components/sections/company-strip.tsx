import { companies } from "@/lib/data";

export function CompanyStrip() {
  return (
    <div className="border-b border-border bg-muted">
      <div className="mx-auto flex w-[92vw] max-w-[1120px] flex-wrap items-center justify-center gap-x-[clamp(20px,4vw,48px)] gap-y-3 py-6">
        {companies.map((company) => (
          <span
            key={company}
            className="font-mono text-[13px] tracking-wide text-muted-foreground"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
