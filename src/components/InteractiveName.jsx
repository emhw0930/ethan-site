import { useEffect, useRef } from "react";
import { pointer, startPointer, isFinePointer, prefersReducedMotion } from "../lib/pointer";

// ink #181613 -> accent #9a3320
const FROM = [24, 22, 19];
const TO = [154, 51, 32];
const mix = (f) =>
  `rgb(${FROM.map((c, i) => Math.round(c + (TO[i] - c) * f)).join(",")})`;

/**
 * A heading line whose individual letters rise and warm toward the accent as
 * the pointer passes — a falloff field, eased per frame. Plus the intro
 * mask-reveal. Falls back to a static (still revealing) line when interaction
 * isn't appropriate.
 */
export default function InteractiveName({ segments, shown, delay = 0, className = "", style }) {
  const charsRef = useRef([]);
  charsRef.current = [];

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    startPointer();

    const RADIUS = 170;
    const vals = charsRef.current.map(() => ({ y: 0, c: 0 }));
    let raf;
    const loop = () => {
      const px = pointer.x, py = pointer.y;
      charsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(px - cx, py - cy);
        const target = pointer.active ? Math.max(0, 1 - d / RADIUS) : 0;
        const v = vals[i];
        v.y += (target * -16 - v.y) * 0.15;
        v.c += (target - v.c) * 0.15;
        el.style.transform = `translateY(${v.y.toFixed(2)}px)`;
        el.style.color = v.c > 0.005 ? mix(Math.min(1, v.c)) : "";
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  let key = 0;
  return (
    <span className={`line-mask ${shown ? "in" : ""} ${className}`} style={style}>
      <span style={{ transitionDelay: `${delay}s` }}>
        {segments.map((seg, si) =>
          [...seg.text].map((ch) => {
            if (ch === " ") return <span key={key++}>&nbsp;</span>;
            return (
              <span
                key={key++}
                ref={(el) => el && charsRef.current.push(el)}
                className={`inline-block will-change-transform ${seg.italic ? "italic font-[340]" : ""}`}
              >
                {ch}
              </span>
            );
          })
        )}
      </span>
    </span>
  );
}
