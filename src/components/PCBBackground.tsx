const PCBBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute inset-0 scanline opacity-30" />
    {/* HUD orbital grid centered on page */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ top: "-10%" }}>
      <svg
        viewBox="-500 -500 1000 1000"
        className="w-[1400px] h-[1400px] opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dotted orbital paths */}
        {[150, 250, 350, 450].map((r, i) => (
          <circle
            key={`orbit-${i}`}
            cx="0" cy="0" r={r}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.8"
            strokeDasharray="3 12"
            className={i % 2 === 0 ? "animate-hud-orbit" : "animate-hud-orbit-reverse"}
            style={{ transformOrigin: "0 0" }}
          />
        ))}
        {/* Cross grid */}
        <line x1="-500" y1="0" x2="500" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.5" />
        <line x1="0" y1="-500" x2="0" y2="500" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.5" />
        <line x1="-350" y1="-350" x2="350" y2="350" stroke="hsl(var(--primary))" strokeWidth="0.2" opacity="0.3" />
        <line x1="350" y1="-350" x2="-350" y2="350" stroke="hsl(var(--primary))" strokeWidth="0.2" opacity="0.3" />
      </svg>
    </div>
  </div>
);

export default PCBBackground;
