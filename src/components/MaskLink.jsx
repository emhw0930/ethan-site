/**
 * A link whose label swaps on hover: the current text slides up and out while
 * an identical copy rises from below. Pure transform, no layout shift.
 */
export default function MaskLink({ href, children, className = "", ...rest }) {
  return (
    <a href={href} className={`group relative inline-block overflow-hidden align-bottom ${className}`} {...rest}>
      <span className="block transition-transform duration-[450ms] ease-ease group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-[450ms] ease-ease group-hover:translate-y-0">
        {children}
      </span>
    </a>
  );
}
