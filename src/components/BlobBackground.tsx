// Autonomous floating blob — no mouse/click interaction.
// The outer wrapper gets a gentle CSS float animation;
// each inner blob keeps its organic morphing (blob-move) and breathe animations.

const BlobBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-[20%] top-[33%] z-[3] aspect-square w-[350px] mix-blend-normal dark:mix-blend-lighten"
    >
      <div
        className="blob-float absolute opacity-40 md:opacity-70 lg:opacity-95 dark:opacity-20 dark:md:opacity-55 dark:lg:opacity-85"
      >
        {/* blob-1: red/coral gradient */}
        <div
          className="blob-breathe-sm blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(10px)",
            opacity: 0.9,
            background:
              "linear-gradient(30deg, oklch(69% 0.286 360) 0%, oklch(50% 0.286 360) 100%)",
          }}
        />
        {/* blob-2: teal gradient */}
        <div
          className="blob-breathe-md blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(10px)",
            opacity: 0.9,
            background:
              "linear-gradient(60deg, oklch(50% 0.1 190) 0%, oklch(65.41% 0.111 202) 100%)",
          }}
        />
        {/* blob-3: deep blue/purple gradient */}
        <div
          className="blob-breathe-lg blob-move blob-fade absolute aspect-square w-[350px] mix-blend-overlay"
          style={{
            filter: "blur(10px)",
            opacity: 0.9,
            background:
              "linear-gradient(90deg, oklch(30% 0.2 220.24) 0%, oklch(30% 0.4 309) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default BlobBackground;
