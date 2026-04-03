import { useEffect, useRef, useState } from "react";

type Props = {
  duration?: number;
  delay?: number;
};

const AnimatedDivider = ({ duration = 2000, delay = 0 }: Props) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use IntersectionObserver so the animation runs when the divider scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-8 h-1 sm:my-12">
      {mounted && (
        <svg
          className="h-1 w-full text-muted-foreground opacity-50"
          style={{
            overflow: "visible",
          }}
        >
          <line
            className="divider-line"
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="currentColor"
            strokeWidth="1"
            style={{
              animationDuration: `${duration}ms`,
              animationDelay: `${delay}ms`,
            }}
          />
        </svg>
      )}
    </div>
  );
};

export default AnimatedDivider;
