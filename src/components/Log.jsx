import { timeline } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Log() {
  return (
    <section id="log" className="shell-pad mx-auto max-w-shell py-[clamp(5rem,12vw,9rem)]">
      <SectionHead idx="03" title="Log" note="Where I’ve spent my hours." />

      <ul className="list-none">
        {timeline.map((e, i) => (
          <Reveal
            as="li"
            key={e.role}
            className={`grid grid-cols-[8rem_1fr] gap-[clamp(1rem,4vw,3rem)] border-t border-line py-[clamp(1.6rem,3vw,2.4rem)] max-md:grid-cols-1 max-md:gap-2 ${
              i === timeline.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="pt-[0.4rem] font-mono text-[0.82rem] text-accent max-md:pt-0">{e.when}</span>
            <div>
              <h3 className="font-serif font-[400] tracking-[-0.01em]" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)" }}>
                {e.role}
              </h3>
              <span className="mb-[0.7rem] mt-[0.3rem] block font-mono text-[0.76rem] tracking-[0.02em] text-ink-faint">
                {e.org}
              </span>
              <p className="max-w-[56ch] text-ink-soft">{e.note}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
