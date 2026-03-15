import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const certs = [
  { name: "ISWDP Level 1 – India Semiconductor Workforce Development Program", score: "98%" },
  { name: "Rohde & Schwarz RF Measurement Training", score: "96%" },
  { name: "Tektronix Semiconductor Measurement Training", score: "80%" },
  { name: "RTL to GDS-II using Synopsys Tools", score: null },
  { name: "NPTEL – Understanding Incubation & Entrepreneurship", score: "99% (Elite)" },
  { name: "VSD Semiconductor Design Training", score: null },
];

const CertsGoalsSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Credentials" title="Certifications" />
      <div className="max-w-2xl">
        <div className="space-y-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start justify-between gap-4 p-3 border border-foreground/5 rounded-lg hover:border-primary/20 transition-colors"
            >
              <span className="text-sm text-foreground/70">{c.name}</span>
              {c.score && <span className="font-mono text-xs text-primary shrink-0">{c.score}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CertsGoalsSection;
