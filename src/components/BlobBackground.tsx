/**
 * BlobBackground — three autonomous glowing orbs that drift, merge, and
 * rejuvenate in the background.  Fully rounded (border-radius: 50%),
 * radial-gradient powered, with independent CSS drift+pulse animations.
 * Stays behind all content (z-0) and is purely decorative.
 */
const BlobBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[0] overflow-hidden"
    >
      {/* Orb 1 — violet/purple, drifts slowly top-left */}
      <div
        className="orb-drift-1 absolute rounded-full"
        style={{
          width: "520px",
          height: "520px",
          top: "2%",
          left: "8%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(62% 0.22 290) 0%, transparent 70%)",
          filter: "blur(72px)",
          opacity: 0.45,
        }}
      />

      {/* Orb 2 — teal/cyan, drifts top-right */}
      <div
        className="orb-drift-2 absolute rounded-full"
        style={{
          width: "460px",
          height: "460px",
          top: "5%",
          right: "10%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(65% 0.16 195) 0%, transparent 70%)",
          filter: "blur(72px)",
          opacity: 0.4,
        }}
      />

      {/* Orb 3 — warm coral/rose, pulses in the center */}
      <div
        className="orb-drift-3 absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "25%",
          left: "35%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(66% 0.20 18) 0%, transparent 70%)",
          filter: "blur(72px)",
          opacity: 0.35,
        }}
      />
    </div>
  );
};

export default BlobBackground;
