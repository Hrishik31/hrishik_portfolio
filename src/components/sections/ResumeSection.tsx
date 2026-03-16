import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const RESUME_PDF = "/Hrishik_Patel_Resume.pdf";

const ResumeSection = () => (
  <section className="py-[15vh] relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader label="// Resume" title="Resume" subtitle="View or download my detailed resume." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="flex gap-4">
          <Button variant="hero" asChild>
            <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href={RESUME_PDF} download="Hrishik_Patel_Resume.pdf">Download Resume</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
