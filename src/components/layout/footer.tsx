import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--band-bg)] text-[var(--band-muted)]">
      <div className="mx-auto flex w-[92vw] max-w-[1120px] flex-wrap items-center justify-between gap-4 py-9">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-[7px] bg-primary font-mono text-[13px] font-semibold text-white">
            {siteConfig.initials}
          </span>
          <span className="text-sm text-[var(--band-foreground)]">{siteConfig.name}</span>
        </div>
        <div className="font-mono text-[12.5px]">
          © {year} · Software Architect &amp; Full Stack Engineer · Riyadh
        </div>
      </div>
    </footer>
  );
}
