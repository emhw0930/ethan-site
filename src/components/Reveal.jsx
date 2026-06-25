import useReveal from "../hooks/useReveal";

/** Wraps children and fades/slides them in on scroll. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
