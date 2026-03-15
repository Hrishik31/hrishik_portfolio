const PCBBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute inset-0 scanline opacity-30" />
    {/* Arc Reactor Background */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgArcGlow" cx="50%" cy="40%" r="40%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Ambient glow */}
      <rect width="100%" height="100%" fill="url(#bgArcGlow)" />
      {/* Large outer rings */}
      <circle cx="50%" cy="40%" r="300" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.08"
        strokeDasharray="12 8" className="animate-arc-spin" />
      <circle cx="50%" cy="40%" r="220" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06"
        strokeDasharray="8 12" className="animate-arc-spin-reverse" />
      <circle cx="50%" cy="40%" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.1"
        strokeDasharray="4 10" className="animate-arc-spin" />
      {/* Energy nodes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 50;
        const cy = 40;
        return (
          <circle
            key={i}
            cx={`${cx + 20 * Math.cos(rad)}%`}
            cy={`${cy + 20 * Math.sin(rad)}%`}
            r="2"
            fill="hsl(var(--primary))"
            opacity="0.2"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        );
      })}
    </svg>
  </div>
);

export default PCBBackground;
