import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1BoNSDg0Ot5JuOZFkfS471c0w0gMm6cmS/view?usp=drive_link";
const RESUME_PREVIEW_URL = "https://drive.google.com/file/d/1BoNSDg0Ot5JuOZFkfS471c0w0gMm6cmS/preview";

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
        <div className="border border-foreground/10 rounded-xl overflow-hidden mb-6">
          <iframe
            src={RESUME_PREVIEW_URL}
            className="w-full h-[500px]"
            allow="autoplay"
            title="Hrishik Patel Resume"
          />
        </div>
        <div className="flex gap-4">
          <Button variant="hero" asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Download PDF</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
