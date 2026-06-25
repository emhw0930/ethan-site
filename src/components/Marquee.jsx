import { skills } from "../data";

export default function Marquee() {
  const run = [...skills, ...skills];
  return (
    <div className="marquee-mask overflow-hidden whitespace-nowrap border-y border-line py-[0.9rem]" aria-hidden="true">
      <div className="marquee-track inline-flex items-center">
        {run.map((s, i) => (
          <span key={i} className="flex items-center">
            <span
              className="px-[1.6rem] font-serif italic font-[360]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
            >
              {s}
            </span>
            <i className="inline-block h-[7px] w-[7px] bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
