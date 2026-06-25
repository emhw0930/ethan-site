import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/pointer";

/**
 * Load sequence: a counter races 0 → 100 in the corner, the name sits centered,
 * then the panel wipes upward to reveal the page. Skipped quickly if the user
 * prefers reduced motion. Calls onDone when finished.
 */
export default function Intro({ onDone }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDone();
      return;
    }
    document.body.style.overflow = "hidden";

    const duration = 1300;
    const start = performance.now();
    let raf;
    const run = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(run);
      else {
        setLeaving(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onDone();
        }, 900);
      }
    };
    raf = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[10001] flex items-center justify-center bg-paper transition-transform duration-[900ms] ease-ease ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <span
        className={`font-serif font-[360] italic tracking-[-0.02em] transition-opacity duration-500 ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        Ethan Wu
      </span>
      <span className="shell-pad absolute bottom-[clamp(1.25rem,4vw,3rem)] right-0 font-mono text-[0.8rem] tabular-nums text-ink-faint">
        {String(count).padStart(3, "0")}
      </span>
      <span className="shell-pad absolute bottom-[clamp(1.25rem,4vw,3rem)] left-0 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
        Loading
      </span>
    </div>
  );
}
