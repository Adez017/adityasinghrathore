import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Extra Tailwind classes to apply to the wrapping div */
  className?: string;
  /** Delay before the reveal animation starts (ms) */
  delay?: number;
};

/**
 * Wraps its children in a div that slides up and fades in once it enters
 * the #page-content scroll viewport. Matches the scroll-driven reveal
 * seen in the reference Adez017/portfolio.
 */
const ScrollReveal = ({ children, className = "", delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use #page-content as root so the observer tracks visibility within the
    // actual scroll container (not the browser viewport, which would fire
    // immediately since elements are positioned within the overflow-auto div).
    const root = document.getElementById("page-content");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { root, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
