import { useEffect, useRef } from "react";

/** Hairline progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-px bg-line mix-blend-multiply" aria-hidden="true">
      <div ref={ref} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
