import { useEffect, useRef, useState } from "react";

/**
 * Adds an `in` class when the element scrolls into view (once).
 * Returns a ref to attach and the inView boolean.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px", ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}
