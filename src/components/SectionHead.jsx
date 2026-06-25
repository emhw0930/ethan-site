import Reveal from "./Reveal";

export default function SectionHead({ idx, title, note }) {
  return (
    <Reveal className="mb-[clamp(2.5rem,6vw,4.5rem)] grid grid-cols-[auto_1fr] items-baseline gap-x-[1.4rem] gap-y-[0.6rem] border-b border-line pb-[1.4rem]">
      <span className="font-mono text-[0.8rem] text-accent">{idx}</span>
      <h2
        className="font-serif font-[380] tracking-[-0.01em]"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        {title}
      </h2>
      <span className="col-start-2 font-mono text-[0.78rem] tracking-[0.02em] text-ink-faint">
        {note}
      </span>
    </Reveal>
  );
}
