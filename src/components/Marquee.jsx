import { useEffect, useRef } from "react";
import { skills } from "../data";
import { prefersReducedMotion } from "../lib/pointer";

/**
 * Skills marquee, JS-driven: a steady base drift that speeds up and skews with
 * scroll velocity, then settles back. Reduced-motion users get a static strip.
 */
export default function Marquee() {
  const trackRef = useRef(null);
  const run = [...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    let half = track.scrollWidth / 2;
    const measure = () => (half = track.scrollWidth / 2);
    window.addEventListener("resize", measure, { passive: true });

    let offset = 0;
    let vel = 0;
    let lastScroll = window.scrollY;
    let lastT = performance.now();
    const onScroll = () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      vel += dy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf;
    const loop = (now) => {
      const dt = Math.min(64, now - lastT) / 16.67;
      lastT = now;
      vel *= 0.9;
      const speed = 0.6 + Math.min(8, Math.abs(vel) * 0.25);
      offset -= speed * dt;
      if (offset <= -half) offset += half;
      const skew = Math.max(-8, Math.min(8, vel * 0.25));
      track.style.transform = `translateX(${offset}px) skewX(${skew.toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="marquee-mask overflow-hidden whitespace-nowrap border-y border-line py-[0.9rem]" aria-hidden="true">
      <div ref={trackRef} className="inline-flex items-center will-change-transform">
        {run.map((s, i) => (
          <span key={i} className="flex items-center">
            <span className="px-[1.6rem] font-serif italic font-[360]" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}>
              {s}
            </span>
            <i className="inline-block h-[7px] w-[7px] bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
