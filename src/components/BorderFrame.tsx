import { useEffect, useRef, useState } from "react";

// These match the px-10 sm:px-16 padding in Index.tsx and Tailwind's 'sm' breakpoint
const PADDING_MOBILE = 16;   // matches px-4 (min border inset on mobile)
const PADDING_DESKTOP = 32;  // matches sm:px-8 visual frame width on desktop
const SM_BREAKPOINT = 640;   // Tailwind's 'sm' breakpoint

const BorderFrame = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathData, setPathData] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [padding, setPadding] = useState(PADDING_DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      setPadding(window.innerWidth < SM_BREAKPOINT ? PADDING_MOBILE : PADDING_DESKTOP);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updatePath = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const o = padding;
      setPathData(
        `M ${o} ${o} L ${w - o} ${o} L ${w - o} ${h - o} L ${o} ${h - o} L ${o} ${o}`
      );
    };
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [padding]);

  useEffect(() => {
    if (pathRef.current && pathData) {
      requestAnimationFrame(() => {
        if (pathRef.current) {
          setPathLength(pathRef.current.getTotalLength());
        }
      });
    }
  }, [pathData]);

  return (
    <>
      {/* Top edge */}
      <div
        className="border-edge top-0 left-0 right-0"
        style={{ height: padding }}
      />
      {/* Left edge */}
      <div
        className="border-edge left-0"
        style={{ top: padding, bottom: padding, width: padding }}
      />
      {/* Right edge */}
      <div
        className="border-edge right-0"
        style={{ top: padding, bottom: padding, width: padding }}
      />
      {/* Bottom edge */}
      <div
        className="border-edge bottom-0 left-0 right-0"
        style={{ height: padding }}
      />

      {/* Animated SVG border path */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path
            ref={pathRef}
            className="border-path fill-none stroke-foreground/30"
            d={pathData}
            style={{ "--path-length": pathLength } as React.CSSProperties}
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </>
  );
};

export default BorderFrame;
