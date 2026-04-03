/**
 * BlobBackground — three autonomous glowing orbs that drift, merge, and
 * rejuvenate in the background.  Fully rounded (border-radius: 50%),
 * radial-gradient powered, with independent CSS drift+pulse animations.
 * Orbs are anchored to the viewport corners/edges so they frame the hero
 * content without sitting directly behind the social icons or heading text.
 * Stays behind all content (z-0) and is purely decorative.
 */
const BlobBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[0] overflow-hidden"
    >
      {/* Orb 1 — violet/purple, top-left corner, drifts inward */}
      <div
        className="orb-drift-1 absolute rounded-full"
        style={{
          width: "560px",
          height: "560px",
          top: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(62% 0.22 290) 0%, transparent 70%)",
          filter: "blur(55px)",
          opacity: 0.38,
        }}
      />

      {/* Orb 2 — teal/cyan, top-right corner, drifts inward */}
      <div
        className="orb-drift-2 absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: "-8%",
          right: "-8%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(65% 0.16 195) 0%, transparent 70%)",
          filter: "blur(55px)",
          opacity: 0.34,
        }}
      />

      {/* Orb 3 — warm coral/rose, bottom-right, pulses toward center */}
      <div
        className="orb-drift-3 absolute rounded-full"
        style={{
          width: "420px",
          height: "420px",
          bottom: "0%",
          right: "10%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(66% 0.20 18) 0%, transparent 70%)",
          filter: "blur(55px)",
          opacity: 0.30,
        }}
      />
    </div>
  );
};

export default BlobBackground;
