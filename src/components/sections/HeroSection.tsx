import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-label mb-6 block"
        >
          Engineering Portfolio
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-foreground/60 mb-2"
        >
          Electronics is the hardware.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-[-0.04em] text-foreground mb-6"
        >
          Intelligence is the{" "}
          <span className="text-primary">upgrade.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-foreground/70 mb-2"
        >
          Hi, I'm <span className="text-foreground font-semibold">Hrishik Patel</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="font-mono text-sm text-muted-foreground mb-2"
        >
          Electronics & Communication Engineer · RF Systems · VLSI · Applied AI
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm italic text-primary/80 mb-8"
        >
          "Attitude Amplified, Faults Rectified"
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-foreground/60 leading-relaxed max-w-lg mb-8"
        >
          I design systems where signals, silicon, and algorithms work together.
          From RF measurement labs tuning microwave hardware to deep learning models
          analyzing semiconductor defects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="hero" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </motion.div>
      </div>
      {/* Right — RF Waveform Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:flex items-center justify-center"
      >
        <div className="relative w-full aspect-square max-w-md">
          {/* Chip visualization */}
          <div className="absolute inset-0 border border-foreground/10 rounded-xl grid-bg" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Chip outline */}
            <rect x="100" y="100" width="200" height="200" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
            <rect x="120" y="120" width="160" height="160" rx="4" fill="hsl(var(--primary))" opacity="0.05" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
            {/* Pins */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`top-${i}`}>
                <line x1={130 + i * 20} y1={100} x2={130 + i * 20} y2={70} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
                <circle cx={130 + i * 20} cy={68} r="2" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.2}s` }} />
              </g>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`bot-${i}`}>
                <line x1={130 + i * 20} y1={300} x2={130 + i * 20} y2={330} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
                <circle cx={130 + i * 20} cy={332} r="2" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.2 + 0.1}s` }} />
              </g>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`left-${i}`}>
                <line y1={130 + i * 20} x1={100} y2={130 + i * 20} x2={70} stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
                <circle cy={130 + i * 20} cx={68} r="2" fill="hsl(var(--secondary))" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.2 + 0.2}s` }} />
              </g>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`right-${i}`}>
                <line y1={130 + i * 20} x1={300} y2={130 + i * 20} x2={330} stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
                <circle cy={130 + i * 20} cx={332} r="2" fill="hsl(var(--secondary))" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.2 + 0.3}s` }} />
              </g>
            ))}
            {/* Center text */}
            <text x="200" y="195" textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontFamily="JetBrains Mono" opacity="0.6">HRISHIK</text>
            <text x="200" y="212" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" fontFamily="JetBrains Mono" opacity="0.4">ECE × AI</text>
            {/* RF wave */}
            <path
              d="M50,200 Q100,150 150,200 T250,200 T350,200"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="4 4"
              className="animate-trace"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
