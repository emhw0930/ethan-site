import useClock from "../hooks/useClock";

const NAV = [
  ["01", "Work", "#work"],
  ["02", "About", "#about"],
  ["03", "Log", "#log"],
  ["04", "Contact", "#contact"],
];

export default function Header() {
  const time = useClock();
  return (
    <header className="shell-pad fixed inset-x-0 top-0 z-[100] flex items-center justify-between mix-blend-multiply py-[clamp(0.9rem,2vw,1.4rem)]">
      <a href="#top" aria-label="Home" className="inline-flex items-center gap-1.5">
        <span className="font-mono font-medium tracking-[0.12em] text-[0.95rem]">EW</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </a>

      <nav aria-label="Primary" className="hidden gap-[clamp(1rem,2.5vw,2.4rem)] md:flex">
        {NAV.map(([idx, label, href]) => (
          <a
            key={href}
            href={href}
            className="group relative pb-0.5 font-mono text-[0.78rem] tracking-[0.04em] text-ink-soft transition-colors hover:text-ink"
          >
            <span className="mr-[0.35em] text-[0.68rem] text-ink-faint">{idx}</span>
            {label}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-[width] duration-[400ms] ease-ease group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="hidden items-baseline gap-[0.45rem] font-mono sm:flex">
        <span className="text-[0.68rem] tracking-[0.18em] text-ink-faint">ATL</span>
        <span className="text-[0.82rem] tracking-[0.05em] tabular-nums">{time}</span>
      </div>
    </header>
  );
}
