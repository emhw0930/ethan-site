import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work() {
  return (
    <section id="work" className="shell-pad mx-auto max-w-shell py-[clamp(5rem,12vw,9rem)]">
      <SectionHead
        idx="01"
        title="Selected Work"
        note="A handful of things I’ve designed, built, and shipped."
      />

      <ol className="list-none">
        {projects.map((p, i) => (
          <Reveal
            as="li"
            key={p.no}
            className={`group border-t border-line ${i === projects.length - 1 ? "border-b" : ""}`}
          >
            <a
              href="#contact"
              className="grid grid-cols-[3.5rem_minmax(0,1.6fr)_minmax(0,1fr)_auto_auto] items-baseline gap-6 py-[clamp(1.3rem,2.5vw,2rem)] transition-[padding] duration-[450ms] ease-ease group-hover:pl-[1.4rem] max-md:grid-cols-[2.5rem_1fr_auto]"
            >
              <span className="font-mono text-[0.78rem] text-ink-faint">{p.no}</span>
              <span
                className="font-serif font-[380] leading-[1.05] tracking-[-0.01em] group-hover:italic"
                style={{ fontSize: "clamp(1.35rem, 3vw, 2.4rem)" }}
              >
                {p.name}
              </span>
              <span className="font-mono text-[0.76rem] tracking-[0.02em] text-ink-soft max-md:hidden">
                {p.stack}
              </span>
              <span className="font-mono text-[0.78rem] text-ink-faint max-[520px]:hidden">{p.year}</span>
              <span className="translate-x-[-6px] translate-y-[6px] text-[1.1rem] opacity-0 transition-all duration-[400ms] ease-ease group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </span>
            </a>
            <p className="max-h-0 max-w-[60ch] overflow-hidden pl-20 text-[0.98rem] leading-[1.55] text-ink-soft opacity-0 transition-all duration-[500ms] ease-ease group-hover:max-h-40 group-hover:pb-[1.6rem] group-hover:opacity-100 max-md:pl-10">
              {p.desc}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
