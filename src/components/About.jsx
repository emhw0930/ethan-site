import { facts } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Portrait from "./Portrait";

export default function About() {
  return (
    <section id="about" className="shell-pad mx-auto max-w-shell py-[clamp(5rem,12vw,9rem)]">
      <SectionHead idx="02" title="About" note="Engineer, bilingual, building toward AI products." />

      <div className="grid items-start gap-[clamp(2rem,6vw,5rem)] md:grid-cols-[0.85fr_1.25fr]">
        <Portrait />

        <div>
          <Reveal>
            <p className="leading-[1.5] text-ink-soft" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)" }}>
              I’m a software engineer who likes the unglamorous middle of the stack —
              the services, schemas, and agents that decide whether a product feels
              fast and trustworthy. Lately that means LLM systems: retrieval, tools,
              and the orchestration around them.
            </p>
            <p className="mt-[1.4rem] leading-[1.5] text-ink-soft" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)" }}>
              I studied Computer Science at <strong className="font-semibold text-ink">UC&nbsp;Berkeley</strong> and
              now work as a Software Engineer at a <strong className="font-semibold text-ink">Fortune&nbsp;200</strong> company
              in Atlanta. I grew up between Taiwan and the U.S., and I work in English and Mandarin.
            </p>
          </Reveal>

          <Reveal as="dl" className="mt-[clamp(2rem,4vw,3rem)] border-t border-line font-mono">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-[0.9rem] text-[0.84rem]">
                <dt className="pt-[0.15rem] text-[0.7rem] uppercase tracking-[0.06em] text-ink-faint">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
