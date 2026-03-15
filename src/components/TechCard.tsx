import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const TechCard = ({ children, className = "", delay = 0 }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", duration: 0.5, bounce: 0, delay }}
    whileHover={{ scale: 1.01, borderColor: "hsl(var(--primary))" }}
    className={`relative p-6 bg-foreground/[0.02] border border-foreground/10 rounded-xl overflow-hidden group ${className}`}
  >
    <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
      ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}
    </div>
    {children}
  </motion.div>
);

export default TechCard;
