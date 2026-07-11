// import { UserRound } from "lucide-react";

// export function HeadshotSlot() {
//   return (
//     <div className="relative">
//       <div className="absolute -inset-px rounded-[20px] bg-linear-to-br from-primary to-[var(--band-bg)] opacity-50" />
//       <div className="relative flex h-[clamp(300px,38vw,400px)] w-[clamp(240px,30vw,320px)] flex-col items-center justify-center gap-3 rounded-[18px] border border-[var(--band-border)] bg-[var(--band-bg-raised)]/60 text-[var(--band-muted)]">
//         <UserRound className="size-10" strokeWidth={1.5} />
//         <span className="font-mono text-xs tracking-wide">Drop your headshot</span>
//       </div>
//     </div>
//   );
// }

export function HeadshotSlot() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-[20px] bg-linear-to-br from-primary to-[var(--band-bg)] opacity-50" />

      <div className="relative h-[clamp(300px,38vw,400px)] w-[clamp(240px,30vw,320px)] overflow-hidden rounded-[18px] border border-[var(--band-border)]">
        <img
          src="/images/headshot.png"
          alt="Headshot"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}