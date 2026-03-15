import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const quadrants = [
  {
    title: "Strengths",
    items: ["Strong RF & VLSI fundamentals", "Cross-disciplinary (HW + AI)", "High academic performance (9.32 CGPA)", "Industry internship experience"],
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bg: "bg-secondary/5",
  },
  {
    title: "Weaknesses",
    items: ["Limited industry exposure", "Publication pipeline still building", "Early-career networking"],
    color: "text-yellow-400",
    borderColor: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
  },
  {
    title: "Opportunities",
    items: ["Growing AI-in-semiconductor industry", "5G/6G RF development", "Startup ecosystem in India", "Research collaborations"],
    color: "text-primary",
    borderColor: "border-primary/30",
    bg: "bg-primary/5",
  },
  {
    title: "Threats",
    items: ["Rapid technology obsolescence", "Competitive job market", "Resource constraints for research"],
    color: "text-destructive",
    borderColor: "border-destructive/30",
    bg: "bg-destructive/5",
  },
];

const SwotSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Analysis" title="SWOT Analysis" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {quadrants.map((q, i) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 border ${q.borderColor} ${q.bg} rounded-lg`}
          >
            <h3 className={`text-sm font-mono uppercase tracking-widest ${q.color} mb-4`}>{q.title}</h3>
            <ul className="space-y-2">
              {q.items.map((item) => (
                <li key={item} className="text-sm text-foreground/60 flex gap-2">
                  <span className={`${q.color} mt-0.5`}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SwotSection;
