import MaskLink from "./MaskLink";

const SWATCHES = [
  ["#f3f1ea", "Paper"],
  ["#181613", "Ink"],
  ["#9a3320", "Accent"],
];

const COLOPHON = [
  ["Typeset in", "Fraunces · Hanken Grotesk · IBM Plex Mono"],
  ["Built with", "React · Vite · Tailwind"],
  ["Set from", "Atlanta, Georgia"],
  ["Last updated", typeof __BUILD_DATE__ !== "undefined" ? __BUILD_DATE__ : ""],
];

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="shell-pad mx-auto max-w-shell border-t border-line pb-12 pt-[clamp(3rem,6vw,5rem)]">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-[1fr_auto]">
        {/* colophon */}
        <dl className="grid grid-cols-1 gap-x-10 gap-y-5 font-mono text-[0.78rem] sm:grid-cols-2">
          {COLOPHON.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <dt className="text-[0.66rem] uppercase tracking-[0.14em] text-ink-faint">{k}</dt>
              <dd className="text-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>

        {/* palette */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-faint">Palette</span>
          <div className="flex gap-3">
            {SWATCHES.map(([hex, name]) => (
              <div key={name} className="flex flex-col items-center gap-1.5">
                <span className="h-9 w-9 border border-line" style={{ backgroundColor: hex }} />
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-faint">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[0.76rem] text-ink-faint">
        <span>© {new Date().getFullYear()} Meng-Han Ethan Wu</span>
        <span className="hidden tracking-[0.04em] sm:inline">Designed &amp; built by hand</span>
        <MaskLink href="#top" onClick={(e) => { e.preventDefault(); toTop(); }} className="tracking-[0.03em] text-ink-soft">
          Back to top ↑
        </MaskLink>
      </div>
    </footer>
  );
}
