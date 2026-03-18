import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hrishik-hero.jpeg";
import ArcReactor from "@/components/ArcReactor";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMouseOffset({
        x: (e.clientX - centerX) * 0.015,
        y: (e.clientY - centerY) * 0.015,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Arc Reactor behind content */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none md:pointer-events-auto"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 opacity-40 md:opacity-50">
          <ArcReactor />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
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
            Hrishik Patel is an electronics engineering student with interests in RF systems, VLSI design, and machine learning for engineering applications. His projects often explore how intelligent algorithms can complement physical electronic systems and improve real-world performance. Beyond academics, he enjoys playing competitive table tennis and watching films, activities that provide balance while strengthening focus, strategic thinking, and creativity.
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
        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 glow-primary">
            <img src={heroPhoto} alt="Hrishik Patel" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
