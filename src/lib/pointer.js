// Single shared pointer position, updated by one global listener.
// Components read `pointer.x / pointer.y` inside their own rAF loops.
export const pointer = { x: -9999, y: -9999, active: false };

let started = false;
export function startPointer() {
  if (started || typeof window === "undefined") return;
  started = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    },
    { passive: true }
  );
  window.addEventListener("pointerleave", () => (pointer.active = false));
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
