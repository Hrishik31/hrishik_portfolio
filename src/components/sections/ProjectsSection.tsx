import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";
import rtlImg from "@/assets/rtl-gdsii.png";
import dpskImg from "@/assets/dpsk-group.jpg";
import waferImg from "@/assets/wafer-defect.png";
import ndtImg from "@/assets/ndt-output.jpeg";
import tsImg from "@/assets/timeseries-forecast.png";
import guitarImg from "@/assets/guitar-effects.png";
import muggerImg from "@/assets/mugger-yolo.png";

interface Project {
  title: string;
  techs: string[];
  outcome: string;
  objective: string;
  details?: string;
  ongoing?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    title: "16-bit Synchronous Up/Down Counter (RTL → GDS-II)",
    objective: "Design full digital chip flow from Verilog to GDSII.",
    techs: ["Verilog", "OpenLANE", "Yosys", "iVerilog", "GTKWave"],
    outcome: "Complete ASIC design pipeline implemented.",
    image: rtlImg,
  },
  {
    title: "DPSK Modulator–Demodulator System",
    objective: "Design DBPSK communication system.",
    techs: ["MATLAB", "Simulink", "MC1496", "LM358"],
    outcome: "Working digital communication system validated with oscilloscope.",
    image: dpskImg,
  },
  {
    title: "Wafer Defect Detection using Deep Learning",
    objective: "AI-assisted semiconductor inspection.",
    techs: ["Python", "PyTorch", "CNN", "Vision Transformer"],
    outcome: "Grad-CAM++ explainability, class balancing for wafer maps.",
    image: waferImg,
  },
  {
    title: "AI-Based Multi-Modal NDT System",
    objective: "Industrial defect inspection pipeline.",
    techs: ["YOLOv8", "UNet", "EfficientNet", "ConvNeXt"],
    outcome: "Multi-modal non-destructive testing system.",
    image: ndtImg,
  },
  {
    title: "Time Series Forecasting of Geomagnetic Activity",
    objective: "Hybrid forecasting system.",
    techs: ["ARIMA", "SARIMAX", "Kalman Filter", "XGBoost", "Conv1D-LSTM"],
    outcome: "Accurate geomagnetic storm prediction.",
    image: tsImg,
  },
  {
    title: "Digital Guitar Effects Processor",
    objective: "Audio effects in MATLAB.",
    techs: ["MATLAB"],
    outcome: "Delay, Reverb, Chorus, Flanger, Distortion effects.",
    image: guitarImg,
  },
  {
    title: "MUGGER AI — Wildlife Re-Identification",
    objective: "Automated mugger crocodile re-ID from images.",
    techs: ["YOLOv8", "ArcFace", "ConvNeXt", "NVIDIA Jetson Nano"],
    outcome: "Real-time drone-mounted wildlife identification.",
    ongoing: true,
    details: "Designed to deploy on NVIDIA Jetson Nano for aerial monitoring, enabling non-invasive crocodile population monitoring.",
    image: muggerImg,
  },
  {
    title: "LoRa-Based RF Channel Characterization",
    objective: "Wireless experimentation platform.",
    techs: ["ESP8266", "SX1278 LoRa"],
    outcome: "RSSI/SNR measurement & ML-driven adaptive wireless research.",
    ongoing: true,
    details: "Packet transmission experiments, wireless dataset generation for ML-driven adaptive communication.",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-[15vh] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="// Projects" title="Featured Projects" subtitle="Interactive cards — click for details." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TechCard key={p.title} delay={i * 0.06} className="cursor-pointer">
              <div onClick={() => setSelected(p)}>
                {p.image && (
                  <div className="mb-3 rounded-lg overflow-hidden border border-foreground/5 -mx-1 -mt-1">
                    <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
                  </div>
                )}
                {p.ongoing && (
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30 rounded mb-3">
                    Ongoing
                  </span>
                )}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 font-mono">{p.objective}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techs.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary/80 rounded">
                      {t}
                    </span>
                  ))}
                  {p.techs.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground">+{p.techs.length - 4}</span>
                  )}
                </div>
                <p className="text-xs text-foreground/50">{p.outcome}</p>
              </div>
            </TechCard>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-foreground/10 rounded-xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {selected.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-foreground/10">
                  <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover" />
                </div>
              )}
              {selected.ongoing && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30 rounded mb-3">
                  Ongoing
                </span>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{selected.title}</h3>
              <p className="text-sm text-muted-foreground font-mono mb-4">{selected.objective}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.techs.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-foreground/70 text-sm mb-2"><span className="text-label">Outcome:</span> {selected.outcome}</p>
              {selected.details && <p className="text-foreground/60 text-sm">{selected.details}</p>}
              <button onClick={() => setSelected(null)} className="mt-6 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                [Close]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
