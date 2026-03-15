import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";

const shortTermGoals = [
  {
    title: "Deepen RF & Antenna Expertise",
    description: "Gain advanced proficiency in antenna design, RF front-end architectures, and electromagnetic simulation tools like ANSYS HFSS — building towards designing production-grade RF systems.",
  },
  {
    title: "Contribute to Semiconductor Design Projects",
    description: "Participate in RTL-to-GDS-II design flows using industry-standard EDA tools, contributing to real-world ASIC or FPGA projects in collaborative research or industry settings.",
  },
  {
    title: "Publish Engineering Research",
    description: "Author and publish research papers in peer-reviewed journals and IEEE conferences, focusing on applied AI in electronics, RF measurement innovation, or intelligent signal processing.",
  },
];

const longTermGoals = [
  {
    title: "Pioneer Intelligent Hardware Systems",
    description: "Work at the frontier of semiconductor and RF communication systems — designing next-generation hardware that integrates on-chip AI inference, adaptive signal processing, and intelligent decision-making capabilities.",
  },
  {
    title: "Build AI-Enhanced Electronic Platforms",
    description: "Create intelligent hardware platforms that combine sensing, computation, and machine learning — enabling autonomous systems for industrial inspection, environmental monitoring, and smart infrastructure.",
  },
];

const FutureGoalsSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        label="// Future"
        title="Future Goals"
        subtitle="A roadmap for engineering impact — from immediate skill development to long-term career vision."
      />

      <div className="space-y-12">
        {/* Short-term */}
        <div>
          <span className="text-label block mb-6">Short-Term Goals</span>
          <div className="grid md:grid-cols-3 gap-6">
            {shortTermGoals.map((g, i) => (
              <TechCard key={g.title} delay={i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-xs font-mono text-primary/60 block mb-2">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{g.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{g.description}</p>
                </motion.div>
              </TechCard>
            ))}
          </div>
        </div>

        {/* Long-term */}
        <div>
          <span className="text-label block mb-6 text-secondary">Long-Term Vision</span>
          <div className="grid md:grid-cols-2 gap-6">
            {longTermGoals.map((g, i) => (
              <TechCard key={g.title} delay={i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-0.5 bg-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{g.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{g.description}</p>
                </motion.div>
              </TechCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FutureGoalsSection;
