const PCBBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute inset-0 scanline opacity-30" />
    {/* Arc Reactor Background */}
    <div className="absolute inset-0 flex items-center justify-center" style={{ top: "-10%" }}>
      <svg
        viewBox="-400 -400 800 800"
        className="w-[900px] h-[900px] md:w-[1200px] md:h-[1200px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bgArcGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
            <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Ambient glow */}
        <circle cx="0" cy="0" r="400" fill="url(#bgArcGlow)" />
        {/* Outer ring 1 */}
        <circle cx="0" cy="0" r="350" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.1"
          strokeDasharray="15 10" className="animate-arc-spin" style={{ transformOrigin: '0 0' }} />
        {/* Outer ring 2 */}
        <circle cx="0" cy="0" r="280" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.08"
          strokeDasharray="10 15" className="animate-arc-spin-reverse" style={{ transformOrigin: '0 0' }} />
        {/* Middle ring */}
        <circle cx="0" cy="0" r="210" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.12"
          strokeDasharray="6 12" className="animate-arc-spin" style={{ transformOrigin: '0 0' }} />
        {/* Inner ring */}
        <circle cx="0" cy="0" r="140" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.1"
          strokeDasharray="4 8" className="animate-arc-spin-reverse" style={{ transformOrigin: '0 0' }} />
        {/* Core ring */}
        <circle cx="0" cy="0" r="70" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.15"
          strokeDasharray="3 6" className="animate-arc-spin" style={{ transformOrigin: '0 0' }} />
        {/* Core glow */}
        <circle cx="0" cy="0" r="8" fill="hsl(var(--primary))" opacity="0.15" />
        <circle cx="0" cy="0" r="3" fill="hsl(var(--primary))" opacity="0.3" />
        {/* Energy nodes on outer ring */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle
              key={`outer-${i}`}
              cx={350 * Math.cos(rad)}
              cy={350 * Math.sin(rad)}
              r="3"
              fill="hsl(var(--primary))"
              opacity="0.25"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          );
        })}
        {/* Energy nodes on middle ring */}
        {[30, 90, 150, 210, 270, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle
              key={`mid-${i}`}
              cx={210 * Math.cos(rad)}
              cy={210 * Math.sin(rad)}
              r="2"
              fill="hsl(var(--primary))"
              opacity="0.2"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          );
        })}
        {/* Connector lines from core to outer */}
        {[0, 90, 180, 270].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={`line-${i}`}
              x1={70 * Math.cos(rad)}
              y1={70 * Math.sin(rad)}
              x2={350 * Math.cos(rad)}
              y2={350 * Math.sin(rad)}
              stroke="hsl(var(--primary))"
              strokeWidth="0.3"
              opacity="0.08"
            />
          );
        })}
      </svg>
    </div>
  </div>
);

export default PCBBackground;
