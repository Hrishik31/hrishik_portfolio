import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "Verilog", "MATLAB", "8086 Assembly"],
    color: "primary",
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn"],
    color: "secondary",
  },
  {
    label: "EDA Tools",
    items: ["OpenLANE", "Yosys", "iVerilog", "GTKWave", "EDA Playground"],
    color: "primary",
  },
  {
    label: "Simulation",
    items: ["ANSYS HFSS", "MATLAB", "Simulink", "Proteus", "TINA-TI", "Logisim"],
    color: "secondary",
  },
  {
    label: "RF Instruments",
    items: ["Keysight E5080B VNA", "FieldFox N9919B", "N5173B Signal Gen", "U2063XA Power Sensor"],
    color: "primary",
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Skills" title="Technical Arsenal" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            <span className={`text-label ${group.color === "secondary" ? "text-secondary" : ""} block mb-4`}>
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all cursor-default ${
                    group.color === "secondary"
                      ? "bg-secondary/10 text-secondary border-secondary/20 hover:border-secondary/50 hover:glow-secondary"
                      : "bg-primary/10 text-primary border-primary/20 hover:border-primary/50 hover:glow-primary"
                  }`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
