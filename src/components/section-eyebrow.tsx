export function SectionEyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "band";
}) {
  const color = tone === "band" ? "text-[var(--band-accent)]" : "text-primary";
  return (
    <div className={`mb-4 font-mono text-[13px] tracking-wide ${color} ${className ?? ""}`}>
      {children}
    </div>
  );
}
