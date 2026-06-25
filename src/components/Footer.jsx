export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="shell-pad mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 border-t border-line pb-10 pt-8 font-mono text-[0.76rem] text-ink-faint">
      <span>© {new Date().getFullYear()} Meng-Han Ethan Wu</span>
      <span className="tracking-[0.04em]">Built with React &amp; Tailwind</span>
      <button onClick={toTop} className="tracking-[0.03em] text-ink-soft transition-colors hover:text-ink">
        Back to top ↑
      </button>
    </footer>
  );
}
