import { useEffect, useRef } from "react";
import useReveal from "../hooks/useReveal";
import { prefersReducedMotion } from "../lib/pointer";

const src = `${import.meta.env.BASE_URL}portrait.jpg`;

/** Framed portrait: clip-path wipe on entry + gentle scroll parallax. */
export default function Portrait() {
  const [ref, inView] = useReveal({ threshold: 0.3 });
  const imgRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const frame = frameRef.current, img = imgRef.current;
      if (!frame || !img) return;
      const r = frame.getBoundingClientRect();
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.style.transform = `translateY(${(progress * -22).toFixed(2)}px) scale(1.08)`;
    };
    const onScroll = () => raf || (raf = requestAnimationFrame(update));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <figure ref={ref} className="m-0">
      <div
        ref={frameRef}
        className="overflow-hidden border border-line bg-paper-2 transition-[clip-path] duration-[1100ms] ease-ease"
        style={{ clipPath: inView ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
      >
        <img
          ref={imgRef}
          src={src}
          alt="Meng-Han Ethan Wu"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover object-top will-change-transform"
          style={{ transform: "scale(1.08)" }}
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.06em] text-ink-faint">
        <span>Meng-Han Ethan Wu</span>
        <span>33.749° N, 84.388° W</span>
      </figcaption>
    </figure>
  );
}
