/**
 * GradientBlurDots - port of GradientBlurDots.svelte
 *
 * Renders a dotted radial-gradient strip that fades upward, creating a
 * frosted-glass bleed between the hero and the scrollable content sections.
 */
const GradientBlurDots = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-48 z-40 h-48 w-full"
      style={{
        backgroundImage:
          "radial-gradient(transparent 1px, hsl(var(--background)) 1px)",
        backgroundSize: "4px 4px",
        backdropFilter: "blur(4px)",
        maskImage: "linear-gradient(0deg, black, transparent 80%)",
        WebkitMaskImage: "linear-gradient(0deg, black, transparent 80%)",
      }}
    />
  );
};

export default GradientBlurDots;
