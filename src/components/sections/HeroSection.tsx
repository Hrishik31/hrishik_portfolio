import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div>
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
      {/* Right — Arc Reactor Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden md:flex items-center justify-center"
      >
        <div className="relative w-full aspect-square max-w-md">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Outer glow */}
            <defs>
              <radialGradient id="arcGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#arcGlow)" />
            {/* Outer ring */}
            <circle cx="200" cy="200" r="160" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" />
            <circle cx="200" cy="200" r="155" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.15" />
            {/* Rotating segments outer */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 200 + 140 * Math.cos(angle);
              const y1 = 200 + 140 * Math.sin(angle);
              const x2 = 200 + 160 * Math.cos(angle);
              const y2 = 200 + 160 * Math.sin(angle);
              return (
                <line key={`seg-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4"
                  className="animate-pulse-glow" style={{ animationDelay: `${i * 0.25}s` }} />
              );
            })}
            {/* Mid ring */}
            <circle cx="200" cy="200" r="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2"
              strokeDasharray="8 6" className="animate-arc-spin" />
            {/* Inner ring with thicker arcs */}
            <circle cx="200" cy="200" r="90" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.35"
              strokeDasharray="20 15" className="animate-arc-spin-reverse" />
            {/* Triangle core */}
            <polygon points="200,145 245,275 155,275" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" filter="url(#glow)" />
            <polygon points="200,155 238,265 162,265" fill="hsl(var(--primary))" opacity="0.05" />
            {/* Inner core circle */}
            <circle cx="200" cy="220" r="35" fill="hsl(var(--primary))" opacity="0.08" stroke="hsl(var(--primary))" strokeWidth="1" filter="url(#glow)" />
            <circle cx="200" cy="220" r="20" fill="hsl(var(--primary))" opacity="0.15" className="animate-pulse-glow" />
            <circle cx="200" cy="220" r="8" fill="hsl(var(--primary))" opacity="0.6" className="animate-pulse-glow" />
            {/* Center text */}
            <text x="200" y="185" textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontFamily="JetBrains Mono" opacity="0.6">HRISHIK</text>
            <text x="200" y="198" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" fontFamily="JetBrains Mono" opacity="0.4">ECE × AI</text>
            {/* Energy dots on outer ring */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              return (
                <circle key={`dot-${i}`} cx={200 + 160 * Math.cos(angle)} cy={200 + 160 * Math.sin(angle)}
                  r="3" fill="hsl(var(--primary))" opacity="0.5"
                  className="animate-pulse-glow" style={{ animationDelay: `${i * 0.3}s` }} />
              );
            })}
          </svg>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
