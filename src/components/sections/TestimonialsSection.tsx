import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";

const testimonials = [
  {
    name: "Dr. Hardik Vyas",
    title: "Professor – Communication Systems",
    org: "Pandit Deendayal Energy University",
    quote:
      "Hrishik demonstrates strong curiosity and analytical thinking in communication systems. His ability to connect theoretical concepts with practical implementations reflects a promising engineering mindset.",
  },
  {
    name: "Dr. Rahul Vashisth",
    title: "RF Engineer & Internship Mentor",
    org: "Aatash Norcontrol Ltd.",
    quote:
      "During his internship, Hrishik showed excellent dedication while working with RF measurement systems. His enthusiasm to learn and apply engineering concepts made him a valuable contributor to the team.",
  },
];

const TestimonialsSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Testimonials" title="What They Say" />
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {testimonials.map((t, i) => (
          <TechCard key={t.name} delay={i * 0.1}>
            <p className="text-foreground/70 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs font-mono">{t.title}</p>
              <p className="text-primary/60 text-xs font-mono">{t.org}</p>
            </div>
          </TechCard>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
