import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";
import { Award, Rocket } from "lucide-react";
import samsungEmail from "@/assets/samsung-fellowship.png";

const FellowshipsSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        label="// Fellowships & Achievements"
        title="Fellowships & Achievements"
        subtitle="Recognition earned through academic excellence and engineering innovation."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <TechCard delay={0}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Samsung Fellowship – ISWDP (Cohort 7)
              </h3>
              <span className="font-mono text-xs text-primary">Grade II Category</span>
            </div>
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed mb-4">
            Shortlisted among <span className="text-foreground font-semibold">4,700+ applicants</span> for
            the Samsung India Semiconductor Workforce Development Program. Recognized for strong academic
            performance, technical skills, and institutional ranking. The program is a prestigious initiative
            focused on developing advanced semiconductor engineering talent with structured industry-aligned training.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg overflow-hidden border border-foreground/10"
          >
            <img
              src={samsungEmail}
              alt="Samsung ISWDP Fellowship selection email"
              className="w-full h-auto"
            />
          </motion.div>
        </TechCard>

        <TechCard delay={0.1}>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-secondary/10 text-secondary shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                L&T TECHgium Hackathon
              </h3>
              <span className="font-mono text-xs text-secondary">PoC Round Qualified</span>
            </div>
          </div>
          <p className="text-foreground/60 text-sm leading-relaxed mb-6">
            Successfully advanced to the <span className="text-foreground font-semibold">Proof of Concept Round</span> in
            L&T TECHgium, one of India's leading national-level engineering innovation competitions. Competed against
            top engineering students nationwide.
          </p>
          <div className="space-y-3">
            {["Strong problem-solving ability", "Practical implementation skills", "Engineering design thinking"].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-foreground/[0.03] border border-foreground/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </motion.div>
              )
            )}
          </div>
        </TechCard>
      </div>
    </div>
  </section>
);

export default FellowshipsSection;
