import { useEffect, useState } from "react";

const TAGS = ["Software Engineer", "Est. 2025", "Atlanta, GA"];

export default function Hero() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="shell-pad mx-auto flex min-h-[100svh] max-w-shell flex-col justify-center"
    >
      <div className="mb-[clamp(1.5rem,4vw,2.5rem)] flex flex-wrap items-center gap-x-[1.2rem] gap-y-2">
        {TAGS.map((t, i) => (
          <span key={t} className="flex items-center font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-faint">
            {i > 0 && <i className="mr-[1.2rem] h-1 w-1 rotate-45 border border-line-2" />}
            {t}
          </span>
        ))}
      </div>

      <h1
        className="mb-[clamp(2rem,6vw,4rem)] font-serif font-[360] leading-[0.92] tracking-[-0.02em]"
        style={{ fontSize: "clamp(3.4rem, 14vw, 12rem)" }}
        aria-label="Meng-Han Ethan Wu"
      >
        <span className={`line-mask ${shown ? "in" : ""}`}><span>Meng-Han</span></span>
        <span className={`line-mask ${shown ? "in" : ""}`}>
          <span style={{ transitionDelay: "0.12s" }}>
            <em className="font-[340] italic">Ethan</em> Wu
          </span>
        </span>
      </h1>

      <div className="flex flex-wrap items-end justify-between gap-8 border-t border-line pt-[1.4rem]">
        <p
          className="max-w-[34ch] leading-[1.45] text-ink-soft"
          style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)" }}
        >
          I build AI&nbsp;/&nbsp;LLM backends and full-stack products that ship.
          Currently engineering at a Fortune&nbsp;200; trained at Berkeley.
        </p>
        <a
          href="#work"
          className="group inline-flex items-center gap-[0.6rem] whitespace-nowrap font-mono text-[0.78rem] tracking-[0.05em]"
        >
          Selected work
          <span className="inline-block transition-transform duration-[400ms] ease-ease group-hover:translate-x-1 group-hover:translate-y-1">
            ↘
          </span>
        </a>
      </div>
    </section>
  );
}
