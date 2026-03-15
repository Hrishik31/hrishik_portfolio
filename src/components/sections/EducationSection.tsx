import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const education = [
  {
    institution: "Pandit Deendayal Energy University",
    degree: "B.Tech Electronics & Communication Engineering",
    minor: "Minor: Computational Data Science",
    score: "CGPA: 9.32",
    period: "2022 – Present",
  },
  {
    institution: "Higher Secondary (HSC)",
    degree: "Gujarat Board",
    score: "Score: 68.92%",
    period: "2022",
  },
  {
    institution: "Secondary (SSC)",
    degree: "Gujarat Board",
    score: "Score: 85%",
    period: "2020",
  },
];

const EducationSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Education" title="Academic Timeline" />
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-foreground/10" />
        <div className="space-y-12">
          {education.map((ed, i) => (
            <motion.div
              key={ed.institution}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Node */}
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary glow-primary animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
              <span className="text-label block mb-1">{ed.period}</span>
              <h3 className="text-lg font-semibold text-foreground">{ed.institution}</h3>
              <p className="text-foreground/60 text-sm">{ed.degree}</p>
              {ed.minor && <p className="text-foreground/50 text-sm">{ed.minor}</p>}
              <p className="font-mono text-sm text-primary mt-1">{ed.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
