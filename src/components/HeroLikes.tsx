import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const MAX_USER_LIKES = 5;
const BASE_COUNT = 128;
const START_COUNT_RATIO = 0.75;
const LS_KEY = "portfolio-hero-likes";

/**
 * Animated like counter — port of AnimatedCounter.svelte from the reference.
 * Counts up from ~75% of BASE_COUNT to BASE_COUNT on mount using a
 * requestAnimationFrame spring (cubic-out easing). Allows up to MAX_USER_LIKES
 * clicks per browser, persisted in localStorage (no backend required).
 */
const HeroLikes = () => {
  const [count, setCount] = useState(Math.round(BASE_COUNT * START_COUNT_RATIO));
  const [userLikes, setUserLikes] = useState(0);
  const [isBeating, setIsBeating] = useState(false);
  const rafRef = useRef<number>(0);

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
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleLike = () => {
    if (userLikes >= MAX_USER_LIKES) return;
    const newLikes = userLikes + 1;
    setUserLikes(newLikes);
    setCount((c) => c + 1);
    localStorage.setItem(LS_KEY, String(newLikes));
    setIsBeating(true);
    setTimeout(() => setIsBeating(false), 400);
  };

  const isMax = userLikes >= MAX_USER_LIKES;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleLike}
        disabled={isMax}
        aria-label="Like this portfolio"
        className={`transition-transform duration-200 ${
          isBeating ? "scale-125" : "scale-100"
        } ${
          isMax
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer hover:scale-110 active:scale-90"
        }`}
      >
        <Heart
          className={`size-5 transition-colors duration-300 ${
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
  );
};

export default HeroLikes;
