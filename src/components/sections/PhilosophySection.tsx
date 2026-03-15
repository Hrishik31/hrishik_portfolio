import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const PhilosophySection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Philosophy" title="Engineering Philosophy" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-6"
      >
        <p className="text-foreground/70 leading-relaxed">
          I believe the most powerful engineering systems emerge at the intersection of{" "}
          <span className="text-foreground font-medium">hardware, algorithms, and intelligent data processing</span>.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
            <span className="text-label block mb-2">Electronics</span>
            <p className="text-sm text-foreground/60">Provides the physical platform.</p>
          </div>
          <div className="p-4 border border-secondary/20 rounded-lg bg-secondary/5">
            <span className="text-label text-secondary block mb-2">Algorithms</span>
            <p className="text-sm text-foreground/60">Bring adaptability and intelligence.</p>
          </div>
        </div>
        <p className="text-foreground/60 leading-relaxed">
          My goal is to design systems where <span className="text-primary">signals, silicon, and software</span> collaborate
          to solve real-world problems. As electronic systems become more connected and data-driven, the boundary between
          hardware engineering and intelligent software will continue to blur.
        </p>
        <p className="text-foreground/50 text-sm font-mono italic">
          This convergence is the space where I want to build my career.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PhilosophySection;
