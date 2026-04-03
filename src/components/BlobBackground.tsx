import { useEffect, useRef, useState } from "react";

// Spring physics parameters from Blob.svelte (stiffness: 0.001, damping: 0.09)
const STIFFNESS = 0.001;
const DAMPING = 0.09;
const DIVIDE = 4;

type SpringPos = { x: number; y: number; scale: number };

const BlobBackground = () => {
  const [pos, setPos] = useState<SpringPos>({ x: 0, y: 0, scale: 1 });
  const velocity = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const target = useRef<SpringPos>({ x: 0, y: 0, scale: 1 });
  const raf = useRef<number>();
  const lastTime = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.current = {
        ...target.current,
        x: -(e.clientX - cx) / DIVIDE,
        y: -(e.clientY - cy) / DIVIDE,
      };
    };
    const onMouseDown = () => {
      target.current = { ...target.current, scale: 0.8 };
    };
    const onMouseUp = () => {
      target.current = { ...target.current, scale: 1 };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    function tick(time: number) {
      const dt = Math.min(time - lastTime.current, 64); // cap at ~2 frames
      lastTime.current = time;

      if (dt > 0) {
        const tx = target.current.x;
        const ty = target.current.y;
        const cx = current.current.x;
        const cy = current.current.y;
        const vx = velocity.current.x;
        const vy = velocity.current.y;

        const fx = -STIFFNESS * (cx - tx) - DAMPING * vx;
        const fy = -STIFFNESS * (cy - ty) - DAMPING * vy;

        velocity.current.x = vx + fx * dt;
        velocity.current.y = vy + fy * dt;
        current.current.x = cx + velocity.current.x * dt;
        current.current.y = cy + velocity.current.y * dt;

        setPos({
          x: current.current.x,
          y: current.current.y,
          scale: target.current.scale,
        });
      }

      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-[20%] top-[33%] z-[3] aspect-square w-[350px] mix-blend-lighten"
    >
      <div
        className="absolute opacity-10 md:opacity-50 lg:opacity-80"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${pos.scale})`,
          filter: "blur(20px)",
        }}
      >
        {/* blob-1: red/coral gradient */}
        <div
          className="blob-breathe-sm blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(20px)",
            opacity: 0.8,
            background:
              "linear-gradient(30deg, oklch(69% 0.286 360) 0%, oklch(50% 0.286 360) 100%)",
          }}
        />
        {/* blob-2: teal gradient */}
        <div
          className="blob-breathe-md blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(20px)",
            opacity: 0.8,
            transform: `translate3d(${pos.x * 0.2}px, ${pos.y * 0.2}px, 0)`,
            background:
              "linear-gradient(60deg, oklch(50% 0.1 190) 0%, oklch(65.41% 0.111 202) 100%)",
          }}
        />
        {/* blob-3: deep blue/purple gradient */}
        <div
          className="blob-breathe-lg blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(20px)",
            opacity: 0.8,
            transform: `translate3d(${pos.x * 0.6}px, ${pos.y * 0.6}px, 0)`,
            background:
              "linear-gradient(90deg, oklch(30% 0.2 220.24) 0%, oklch(30% 0.4 309) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default BlobBackground;
