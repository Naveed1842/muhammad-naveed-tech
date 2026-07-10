import { stats } from "@/lib/data";

export function StatsStrip() {
  return (
    <div className="border-b border-border bg-muted">
      <div className="mx-auto grid w-[92vw] max-w-[1120px] grid-cols-2 nav:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-2 py-[26px] text-center ${
              i % 2 === 0 ? "border-r border-border" : ""
            } ${i < 2 ? "border-b border-border nav:border-b-0" : ""} ${
              i === 2 ? "nav:border-r" : ""
            }`}
          >
            <div className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.02em] text-foreground">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-[11.5px] tracking-wide text-muted-foreground uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
