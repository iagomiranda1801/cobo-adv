type LogoProps = { light?: boolean; compact?: boolean };

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3" aria-label="COBO Advocacia">
      <div className="relative grid h-11 w-11 place-items-center rounded-full border border-gold-400/70 font-display text-xl text-gold-300">
        <span className="-translate-x-0.5">C</span>
        <span className="absolute translate-x-1.5 translate-y-1 text-base italic">A</span>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className={`font-display text-[1.2rem] tracking-[0.24em] ${light ? "text-white" : "text-ink"}`}>COBO</div>
          <div className="mt-1.5 text-[0.52rem] font-semibold tracking-[0.37em] text-gold-400">ADVOCACIA</div>
        </div>
      )}
    </div>
  );
}
