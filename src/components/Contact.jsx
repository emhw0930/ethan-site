import Reveal from "./Reveal";

const LINKS = [
  ["LinkedIn", "https://www.linkedin.com/in/meng-han-ethan-wu/"],
  ["Email", "mailto:emhw.0930@gmail.com"],
  ["Call", "tel:+16506805537"],
];

export default function Contact() {
  return (
    <section id="contact" className="shell-pad mx-auto max-w-shell py-[clamp(5rem,12vw,9rem)]">
      <Reveal>
        <span className="mb-6 block font-mono text-[0.8rem] text-accent">04</span>
        <h2
          className="mb-[clamp(2rem,5vw,3.5rem)] font-serif font-[360] leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          Let’s build<br />
          something <em className="italic text-accent">good.</em>
        </h2>

        <a
          href="mailto:emhw.0930@gmail.com"
          className="group relative inline-block pb-[0.15em] font-serif italic"
          style={{ fontSize: "clamp(1.4rem, 4vw, 2.6rem)" }}
        >
          emhw.0930@gmail.com
          <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-line-2 transition-transform duration-[450ms] ease-ease group-hover:scale-x-0" />
        </a>

        <div className="mt-[clamp(2.5rem,6vw,4rem)] flex flex-wrap gap-[clamp(1.5rem,4vw,3rem)]">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener" : undefined}
              className="inline-flex items-center gap-2 border-b border-line pb-[0.4rem] font-mono text-[0.85rem] tracking-[0.03em] transition-all duration-300 ease-ease hover:gap-[0.9rem] hover:border-ink"
            >
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
