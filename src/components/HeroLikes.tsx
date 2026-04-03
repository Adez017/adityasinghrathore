import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const MAX_USER_LIKES = 5;
const BASE_COUNT = 128;
const START_COUNT_RATIO = 0.75;
const LS_KEY = "portfolio-hero-likes";

type Particle = {
  id: number;
  x: number;   // fixed viewport x (px)
  y: number;   // fixed viewport y (px)
  tx: number;  // final translate-x offset (px)
  ty: number;  // final translate-y offset (px)
};

/**
 * Animated like counter — port of AnimatedCounter.svelte from the reference.
 * Counts up from ~75% of BASE_COUNT to BASE_COUNT on mount using a
 * requestAnimationFrame spring (cubic-out easing). Allows up to MAX_USER_LIKES
 * clicks per browser, persisted in localStorage (no backend required).
 *
 * On each click, mini heart particles burst from the button:
 *   - Before max: hearts fall downward (gravity effect)
 *   - At max:     hearts fly upward in the opposite direction (repel effect)
 */
const HeroLikes = () => {
  const [count, setCount] = useState(Math.round(BASE_COUNT * START_COUNT_RATIO));
  const [userLikes, setUserLikes] = useState(0);
  const [isBeating, setIsBeating] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const particleCounterRef = useRef(0);
  const particleTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const stored = Math.min(
      parseInt(localStorage.getItem(LS_KEY) || "0", 10),
      MAX_USER_LIKES
    );
    setUserLikes(stored);

    const target = BASE_COUNT + stored;
    const start = Math.round(BASE_COUNT * START_COUNT_RATIO);
    const duration = 1600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic-out easing: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (target - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      particleTimersRef.current.forEach(clearTimeout);
    };
  }, []);

  const spawnParticles = (
    originX: number,
    originY: number,
    atMax: boolean
  ) => {
    const NUM = 6;
    const newParticles: Particle[] = Array.from({ length: NUM }, (_, i) => {
      const angle = (2 * Math.PI * i) / NUM + (Math.random() - 0.5) * 0.5;
      const speed = 55 + Math.random() * 35;
      const tx = Math.cos(angle) * speed;
      // Normal: fall downward (positive Y); at max: fly upward / opposite (negative Y)
      const ty = atMax
        ? -Math.abs(Math.sin(angle)) * speed - 45
        : Math.abs(Math.sin(angle)) * speed * 0.6 + 30;
      return { id: particleCounterRef.current++, x: originX, y: originY, tx, ty };
    });

    setParticles((prev) => [...prev, ...newParticles]);
    const ids = new Set(newParticles.map((p) => p.id));
    const timer = setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !ids.has(p.id)));
    }, 750);
    particleTimersRef.current.push(timer);
  };

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const atMax = userLikes >= MAX_USER_LIKES;

    spawnParticles(cx, cy, atMax);

    if (atMax) {
      // Trigger glitch on the heart icon itself
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500);
      return;
    }

    const newLikes = userLikes + 1;
    setUserLikes(newLikes);
    setCount((c) => c + 1);
    localStorage.setItem(LS_KEY, String(newLikes));
    setIsBeating(true);
    setTimeout(() => setIsBeating(false), 400);
  };

  const isMax = userLikes >= MAX_USER_LIKES;

  return (
    <>
      {/* Heart particles — rendered fixed in the viewport so they escape the flex row */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="heart-particle pointer-events-none fixed z-[200]"
          style={
            {
              left: p.x - 8,
              top: p.y - 8,
              "--ptx": `${p.tx}px`,
              "--pty": `${p.ty}px`,
            } as React.CSSProperties
          }
        >
          <Heart className="size-4 fill-rose-500 text-rose-500" />
        </div>
      ))}

      <div className="flex items-center gap-2">
        <button
          onClick={handleLike}
          aria-label="Like this portfolio"
          className={`cursor-pointer transition-transform duration-200 ${
            isBeating ? "scale-125" : "scale-100"
          } ${isMax ? "opacity-80" : "hover:scale-110 active:scale-90"}`}
        >
          <Heart
            className={`size-5 transition-colors duration-300 ${
              isGlitching ? "heart-glitch" : ""
            } ${
              userLikes > 0
                ? "fill-rose-500 text-rose-500"
                : "text-muted-foreground hover:text-rose-400"
            }`}
          />
        </button>
        <span className="font-mono text-sm tabular-nums text-muted-foreground">
          {count}
        </span>
        {isMax && (
          <span className="text-xs text-muted-foreground">max</span>
        )}
      </div>
    </>
  );
};

export default HeroLikes;
