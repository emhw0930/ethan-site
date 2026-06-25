import { useEffect, useRef } from "react";
import { pointer, startPointer, isFinePointer, prefersReducedMotion } from "../lib/pointer";

/**
 * Minimal custom cursor: a precise dot + a trailing ring that eases toward
 * the pointer and grows over interactive elements. Fine-pointer devices only.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    startPointer();
    document.documentElement.classList.add("has-cursor");

    let rx = pointer.x, ry = pointer.y;
    let raf;
    let hovering = false;

    const overInteractive = (el) =>
      !!el?.closest?.("a, button, [data-cursor], input, textarea, label");

    const onOver = (e) => (hovering = overInteractive(e.target));
    window.addEventListener("pointerover", onOver, { passive: true });

    const loop = () => {
      rx += (pointer.x - rx) * 0.18;
      ry += (pointer.y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${pointer.x}px, ${pointer.y}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${hovering ? 1.9 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        style={{ marginLeft: "-2.5px", marginTop: "-2.5px" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-9 w-9 rounded-full border border-ink/40 transition-[scale] duration-200"
      />
    </>
  );
}
