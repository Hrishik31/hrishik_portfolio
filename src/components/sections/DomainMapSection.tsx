import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const nodes = [
  { id: "center", label: "Intelligent\nElectronic Systems", x: 200, y: 200, isCenter: true },
  { id: "rf", label: "RF Systems", x: 80, y: 80, projects: ["Duplexer Tuning", "LoRa Platform"] },
  { id: "vlsi", label: "VLSI Design", x: 320, y: 80, projects: ["16-bit Counter RTL→GDS-II"] },
  { id: "ml", label: "Machine Learning", x: 350, y: 250, projects: ["Wafer Defect Detection", "MUGGER AI", "Time Series Analysis"] },
  { id: "sp", label: "Signal Processing", x: 200, y: 350, projects: ["DPSK System", "Guitar Effects"] },
  { id: "emb", label: "Embedded Systems", x: 50, y: 280, projects: ["LoRa Channel Characterization"] },
];

const DomainMapSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredNode = nodes.find((n) => n.id === hovered);

  return (
    <section className="py-[15vh] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="// Domains" title="Engineering Domains Map" subtitle="Hover nodes to explore related projects." />
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <svg viewBox="0 0 400 400" className="w-full">
              {nodes.filter((n) => !n.isCenter).map((n) => (
                <line
                  key={n.id}
                  x1={200} y1={200} x2={n.x} y2={n.y}
                  stroke={hovered === n.id ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                  strokeWidth={hovered === n.id ? "1.5" : "0.5"}
                  opacity={hovered === n.id ? 0.8 : 0.15}
                  className="transition-all duration-300"
                />
              ))}
              {nodes.map((n) => (
                <g
                  key={n.id}
                  onMouseEnter={() => !n.isCenter && setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={n.x} cy={n.y}
                    r={n.isCenter ? 35 : 24}
                    fill={n.isCenter ? "hsl(var(--primary))" : hovered === n.id ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                    opacity={n.isCenter ? 0.15 : hovered === n.id ? 0.2 : 0.3}
                    stroke={n.isCenter ? "hsl(var(--primary))" : hovered === n.id ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                    strokeWidth={hovered === n.id ? 1.5 : 0.5}
                    strokeOpacity={n.isCenter ? 0.6 : hovered === n.id ? 0.8 : 0.2}
                    className="transition-all duration-300"
                  />
                  {n.isCenter ? (
                    <>
                      <text x={n.x} y={n.y - 6} textAnchor="middle" fill="hsl(var(--primary))" fontSize="7" fontFamily="JetBrains Mono">Intelligent</text>
                      <text x={n.x} y={n.y + 6} textAnchor="middle" fill="hsl(var(--primary))" fontSize="7" fontFamily="JetBrains Mono">Electronic Systems</text>
                    </>
                  ) : (
                    <text x={n.x} y={n.y + 3} textAnchor="middle" fill={hovered === n.id ? "hsl(var(--primary))" : "hsl(var(--foreground))"} fontSize="7" fontFamily="JetBrains Mono" opacity={hovered === n.id ? 1 : 0.6} className="transition-all duration-300">
                      {n.label}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </motion.div>
          <div className="flex-1 min-h-[120px]">
            {hoveredNode && !hoveredNode.isCenter && hoveredNode.projects && (
              <motion.div key={hoveredNode.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                <span className="text-label block mb-2">{hoveredNode.label}</span>
                <ul className="space-y-2">
                  {hoveredNode.projects.map((p) => (
                    <li key={p} className="text-sm text-foreground/70 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            {!hovered && (
              <p className="text-muted-foreground text-sm font-mono">Hover a node to see related projects →</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainMapSection;
