import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";
import { motion } from "framer-motion";

const highlights = [
  "Tuned VHF cavity duplexer — 1.32 dB insertion loss, 120 dB isolation at 146.7 MHz",
  "Designed −85.6 dB attenuation for 25 kW magnetron transmitter testing",
  "S11 reflection on slotted waveguide antenna — −30 dB return loss",
  "Replicated Bragg reflector RF structures in HFSS",
];

const techs = [
  "Keysight E5080B VNA",
  "FieldFox N9919B",
  "RF Signal Generators",
  "Peak Power Sensors",
  "ANSYS HFSS",
];

const ExperienceSection = () => (
  <section id="experience" className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        label="// Experience"
        title="Industry Experience"
        subtitle="RF & Microwave Engineering Intern at Aatash Norcontrol Ltd., Ahmedabad"
      />
      <div className="grid md:grid-cols-2 gap-8">
        <TechCard>
          <span className="text-label">May 2025 — Jul 2025</span>
          <h3 className="text-xl font-semibold mt-3 mb-4 text-foreground">Key Achievements</h3>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-sm text-foreground/70 flex gap-2"
              >
                <span className="text-primary mt-1 shrink-0">›</span>
                <span className="font-mono">{h}</span>
              </motion.li>
            ))}
          </ul>
        </TechCard>
        <TechCard delay={0.1}>
          <span className="text-label">Technologies Used</span>
          <h3 className="text-xl font-semibold mt-3 mb-4 text-foreground">RF Measurement Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <span key={t} className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </TechCard>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
