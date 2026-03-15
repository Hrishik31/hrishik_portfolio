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

const goals = {
  short: [
    "Deepen RF and antenna expertise",
    "Contribute to semiconductor design projects",
    "Publish engineering research",
  ],
  long: [
    "Work on cutting-edge semiconductor or RF communication systems",
    "Build intelligent hardware platforms combining AI and electronics",
  ],
};

const CertsGoalsSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Credentials" title="Certifications & Goals" />
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certs */}
        <div>
          <span className="text-label block mb-6">Certifications</span>
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
        {/* Goals */}
        <div>
          <span className="text-label block mb-6">Future Goals</span>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">Short-Term</span>
              <ul className="space-y-2">
                {goals.short.map((g) => (
                  <li key={g} className="text-sm text-foreground/60 flex gap-2">
                    <span className="text-primary mt-0.5">›</span> {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">Long-Term</span>
              <ul className="space-y-2">
                {goals.long.map((g) => (
                  <li key={g} className="text-sm text-foreground/60 flex gap-2">
                    <span className="text-secondary mt-0.5">›</span> {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertsGoalsSection;
