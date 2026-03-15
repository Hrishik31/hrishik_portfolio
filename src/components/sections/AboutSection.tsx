import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";

const domains = [
  {
    title: "RF & Microwave Systems",
    items: ["Vector Network Analyzers", "RF Signal Generators", "Spectrum Analyzers", "RF Power Sensors"],
    note: "Duplexer tuning, antenna S-parameter measurement, high-power RF testing.",
    accent: "primary",
  },
  {
    title: "VLSI & Semiconductor Design",
    items: ["Verilog RTL Design", "Synthesis & STA", "Floorplanning & Placement", "Routing & GDS-II"],
    note: "Complete semiconductor design pipeline exploration.",
    accent: "secondary",
  },
  {
    title: "AI for Engineering Systems",
    items: ["Wafer Defect Detection", "Industrial Inspection", "Geomagnetic Forecasting", "Wildlife Monitoring"],
    note: "Machine learning applied to engineering datasets.",
    accent: "primary",
  },
];

const AboutSection = () => (
  <section id="about" className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        label="// About"
        title="About Me"
        subtitle="B.Tech in Electronics & Communication Engineering at Pandit Deendayal Energy University with a CGPA of 9.32, pursuing a Minor in Computational Data Science."
      />
      <p className="text-foreground/60 leading-relaxed max-w-3xl mb-16">
        My academic journey revolves around a simple idea: <span className="text-foreground font-medium">Modern electronics is no longer just hardware — it is hardware enhanced by intelligence.</span>
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {domains.map((d, i) => (
          <TechCard key={d.title} delay={i * 0.1}>
            <span className={`text-label ${d.accent === "secondary" ? "text-secondary" : ""}`}>
              Domain.0{i + 1}
            </span>
            <h3 className="text-xl font-semibold mt-3 mb-4 text-foreground">{d.title}</h3>
            <ul className="space-y-2 mb-4">
              {d.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/60">
                  <span className={`w-1.5 h-1.5 rounded-full ${d.accent === "secondary" ? "bg-secondary" : "bg-primary"}`} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground font-mono">{d.note}</p>
          </TechCard>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
