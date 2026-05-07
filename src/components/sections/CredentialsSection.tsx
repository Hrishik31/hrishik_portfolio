import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Award, Cpu, Radio, GraduationCap, X, ChevronRight, Microscope } from "lucide-react";

import certIswdpL1 from "@/assets/cert-iswdp-l1.jpg";
import certIswdpL2 from "@/assets/cert-iswdp-l2.jpg";
import certRohdeSchwarz from "@/assets/cert-rohde-schwarz.jpg";
import certTektronix from "@/assets/cert-tektronix.jpg";
import certSynopsys from "@/assets/cert-synopsys-rtl2gds.jpeg";
import certAatash from "@/assets/cert-aatash-internship.jpg";
import certNptel from "@/assets/cert-nptel.jpg";
import certVsdSta from "@/assets/cert-vsd-sta.jpg";
import certVsdCmos from "@/assets/cert-vsd-cmos.jpg";
import certChipin from "@/assets/cert-chipin-workshop.jpeg";

interface Credential {
  id: string;
  title: string;
  issuer: string;
  score?: string;
  summary: string;
  image: string;
  tags: string[];
}

const categories: {
  label: string;
  icon: React.ReactNode;
  color: string;
  items: Credential[];
}[] = [
  {
    label: "Semiconductor & VLSI",
    icon: <Cpu className="w-5 h-5" />,
    color: "primary",
    items: [
      {
        id: "iswdp-l1",
        title: "Samsung ISWDP Level 1",
        issuer: "Samsung · IISc Bangalore · Synopsys",
        score: "98%",
        summary: "TCAD device simulation fundamentals, MOSFET modeling, and semiconductor physics through Samsung's workforce development program.",
        image: certIswdpL1,
        tags: ["TCAD", "Device Physics", "MOSFET"],
      },
      {
        id: "iswdp-l2",
        title: "Samsung ISWDP Level 2",
        issuer: "Samsung · IISc Bangalore · Synopsys",
        score: "78%",
        summary: "Advanced device structure creation, meshing strategies, real-time analysis, and physical model parameters for semiconductor simulation.",
        image: certIswdpL2,
        tags: ["Advanced Simulation", "Meshing", "Device Analysis"],
      },
      {
        id: "rtl2gds",
        title: "RTL to GDS-II using Synopsys EDA Tools",
        issuer: "Synopsys · PDEU",
        summary: "Complete ASIC design flow from RTL synthesis through place-and-route to GDS-II tape-out using industry-standard Synopsys tools.",
        image: certSynopsys,
        tags: ["Synopsys", "ASIC Flow", "GDS-II"],
      },
      {
        id: "vsd-sta",
        title: "VSD – Static Timing Analysis I",
        issuer: "VSD · Udemy",
        summary: "Setup/hold time analysis, clock tree constraints, timing paths, and STA fundamentals for digital VLSI design verification.",
        image: certVsdSta,
        tags: ["STA", "Timing Closure", "Digital Design"],
      },
      {
        id: "vsd-cmos",
        title: "VSD – CMOS Process Design",
        issuer: "VSD · Udemy",
        summary: "Design process linkages and components in CMOS fabrication — understanding layout, DRC, LVS, and process integration.",
        image: certVsdCmos,
        tags: ["CMOS", "Fabrication", "DRC/LVS"],
      },
    ],
  },
  {
    label: "RF & Microwave Engineering",
    icon: <Radio className="w-5 h-5" />,
    color: "secondary",
    items: [
      {
        id: "aatash",
        title: "Aatash Norcontrol – RF & Microwave Internship",
        issuer: "Aatash Norcontrol Foundation",
        summary: "Hands-on VNA measurements, VHF duplexer tuning, magnetron transmitter testing, and S-parameter characterization using Keysight instruments.",
        image: certAatash,
        tags: ["VNA", "RF Testing", "Duplexer"],
      },
      {
        id: "rohde",
        title: "Rohde & Schwarz – Advanced Electronic Design",
        issuer: "Rohde & Schwarz · IISc · ISWDP",
        score: "96%",
        summary: "Advanced electronic design for reliable operation — signal integrity, EMI/EMC considerations, and precision RF measurement techniques.",
        image: certRohdeSchwarz,
        tags: ["Signal Integrity", "EMC", "RF Design"],
      },
      {
        id: "tektronix",
        title: "Tektronix – Electrical Characterization",
        issuer: "Tektronix · IISc · ISWDP",
        score: "80%",
        summary: "Electrical characterization of materials and devices — IV/CV measurements, device parameter extraction, and semiconductor test methodologies.",
        image: certTektronix,
        tags: ["IV/CV", "Device Characterization", "Test"],
      },
    ],
  },
  {
    label: "Semiconductor Research & Device Engineering",
    icon: <Microscope className="w-5 h-5" />,
    color: "primary",
    items: [
      {
        id: "chipin",
        title: "Advanced Semiconductor Device Design Workshop",
        issuer: "ChipIN · MeitY · PDEU",
        summary: "Three-day skill development on advanced semiconductor device design, TCAD simulation, and circuit implementation — co-organized by MeitY and PDEU.",
        image: certChipin,
        tags: ["TCAD", "Device Modeling", "MeitY"],
      },
    ],
  },
  {
    label: "Academic Excellence",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "secondary",
    items: [
      {
        id: "nptel",
        title: "NPTEL – Understanding Incubation & Entrepreneurship",
        issuer: "NPTEL · IIT Bombay",
        score: "99% (Elite)",
        summary: "12-week certified course on incubation ecosystems, startup methodologies, and entrepreneurship — scored 99% with Elite certification.",
        image: certNptel,
        tags: ["Elite", "IIT Bombay", "Entrepreneurship"],
      },
    ],
  },
];

const skillMappings = [
  { skill: "Verilog", cert: "RTL-to-GDSII", color: "primary" },
  { skill: "RF Measurement", cert: "Aatash Internship", color: "secondary" },
  { skill: "Semiconductor Devices", cert: "ISWDP Certifications", color: "primary" },
  { skill: "Signal Integrity & VNA", cert: "Rohde & Schwarz", color: "secondary" },
  { skill: "Device Characterization", cert: "Tektronix", color: "primary" },
  { skill: "TCAD & Device Simulation", cert: "ChipIN Workshop", color: "secondary" },
  { skill: "CMOS Fundamentals", cert: "VSD CMOS Certification", color: "primary" },
];

const CredentialsSection = () => {
  const [preview, setPreview] = useState<Credential | null>(null);

  return (
    <section id="credentials" className="py-[15vh] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Verified Technical Credentials"
          title="Skills & Certification Evidence"
          subtitle="Proof-based validation of semiconductor engineering, RF systems, and applied hardware knowledge."
        />

        {/* Category blocks */}
        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: ci * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-lg ${cat.color === "secondary" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">{cat.label}</h3>
                <div className={`flex-1 h-px ${cat.color === "secondary" ? "bg-secondary/20" : "bg-primary/20"}`} />
              </div>

              {/* Credential cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((cred, i) => (
                  <motion.div
                    key={cred.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    onClick={() => setPreview(cred)}
                    className="group relative cursor-pointer rounded-xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Certificate thumbnail */}
                    <div className="relative h-40 overflow-hidden bg-foreground/[0.04]">
                      <img
                        src={cred.image}
                        alt={cred.title}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      {cred.score && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-primary/20 backdrop-blur-md border border-primary/30">
                          <span className="font-mono text-xs font-bold text-primary">{cred.score}</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-1 text-xs text-primary font-mono">
                          <span>Preview</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-foreground mb-1 leading-tight">{cred.title}</h4>
                      <p className="text-xs text-foreground/50 font-mono mb-3">{cred.issuer}</p>
                      <p className="text-xs text-foreground/60 leading-relaxed mb-3 line-clamp-2">{cred.summary}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cred.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                              cat.color === "secondary"
                                ? "bg-secondary/10 text-secondary border-secondary/20"
                                : "bg-primary/10 text-primary border-primary/20"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Validation Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Skill Validation Mapping</h3>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {skillMappings.map((m, i) => (
              <motion.div
                key={m.skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 p-3 rounded-lg border border-foreground/10 bg-foreground/[0.02] hover:border-primary/20 transition-colors"
              >
                <span className={`text-xs font-mono font-semibold shrink-0 ${m.color === "secondary" ? "text-secondary" : "text-primary"}`}>
                  {m.skill}
                </span>
                <span className="text-foreground/30 text-xs">↔</span>
                <span className="text-xs text-foreground/60 font-mono">{m.cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen preview modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-6"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[85vh] overflow-auto rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-2xl"
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground/60 hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={preview.image} alt={preview.title} className="w-full rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{preview.title}</h3>
                <p className="text-sm text-foreground/50 font-mono mb-2">{preview.issuer}</p>
                {preview.score && (
                  <span className="inline-block px-3 py-1 mb-3 rounded-md bg-primary/10 text-primary font-mono text-sm font-bold border border-primary/20">
                    Score: {preview.score}
                  </span>
                )}
                <p className="text-sm text-foreground/70 leading-relaxed">{preview.summary}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CredentialsSection;
