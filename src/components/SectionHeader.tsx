import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ label, title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <span className="text-label mb-3 block">{label}</span>
    <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-foreground">{title}</h2>
    {subtitle && <p className="mt-4 text-foreground/60 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
