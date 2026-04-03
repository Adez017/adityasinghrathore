import { useEffect, useRef, useState } from "react";

// Color options from CursorBlob.svelte
const COLOR_OPTIONS = [
  ["oklch(69% 0.286 360)", "oklch(50% 0.286 360)"],
  ["oklch(50% 0.1 190)", "oklch(65.41% 0.111 202)"],
  ["oklch(30% 0.2 220.24)", "oklch(30% 0.4 309)"],
  ["oklch(40% 0.2 160.24)", "oklch(60% 0.2 170.24)"],
];

// Duration from CursorBlob.svelte: 5000ms easing cubicOut
const TWEEN_DURATION = 5000;

function cubicOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const CursorBlobTracker = () => {
  const [blobPos, setBlobPos] = useState({ x: -200, y: -200 });
  // Ref mirrors state so event handlers always read the latest position without stale closure
  const blobPosRef = useRef({ x: -200, y: -200 });
  const [color] = useState(
    () => COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)]
  );

  const startPos = useRef({ x: -200, y: -200 });
  const endPos = useRef({ x: -200, y: -200 });
  const startTime = useRef<number>(0);
  const raf = useRef<number>();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const pageContent = document.querySelector("#page-content");
      const scrollTop = pageContent ? (pageContent as HTMLElement).scrollTop : 0;

      // Read current position from ref (no stale closure)
      startPos.current = { x: blobPosRef.current.x, y: blobPosRef.current.y };
      endPos.current = { x: e.clientX, y: e.clientY + scrollTop };
      startTime.current = performance.now();
    };

    function animate(time: number) {
      const elapsed = time - startTime.current;
      const progress = Math.min(elapsed / TWEEN_DURATION, 1);
      const eased = cubicOut(progress);

      const x =
        startPos.current.x + (endPos.current.x - startPos.current.x) * eased;
      const y =
        startPos.current.y + (endPos.current.y - startPos.current.y) * eased;

      blobPosRef.current = { x, y };
      setBlobPos({ x, y });
      raf.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="cursor-blob-in pointer-events-none fixed left-0 top-0 z-50 size-10 select-none rounded-full"
      style={{
        transform: `translate3d(${blobPos.x}px, ${blobPos.y}px, 0)`,
        filter: "blur(10px)",
        background: `linear-gradient(30deg, ${color[0]} 0%, ${color[1]} 100%)`,
      }}
    />
  );
};

export default CursorBlobTracker;
