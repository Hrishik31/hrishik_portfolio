const PCBBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="absolute inset-0 scanline opacity-30" />
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* PCB Traces */}
      <path
        d="M0,200 L200,200 L200,400 L500,400 L500,300 L800,300 L800,500 L1200,500 L1200,200 L1400,200"
        fill="none"
        stroke="url(#traceGrad)"
        strokeWidth="1"
        strokeDasharray="8 4"
        className="animate-trace"
      />
      <path
        d="M0,600 L300,600 L300,800 L600,800 L600,700 L900,700 L900,900 L1400,900"
        fill="none"
        stroke="url(#traceGrad)"
        strokeWidth="1"
        strokeDasharray="8 4"
        className="animate-trace"
        style={{ animationDelay: "5s" }}
      />
      {/* Node dots */}
      {[
        [200, 200], [200, 400], [500, 400], [500, 300], [800, 300], [800, 500],
        [300, 600], [300, 800], [600, 800], [600, 700], [900, 700],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="hsl(var(--primary))"
          opacity="0.3"
          className="animate-pulse-glow"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  </div>
);

export default PCBBackground;
