import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { label: "Email", value: "hrishikpatelll@gmail.com", href: "mailto:hrishikpatelll@gmail.com" },
  { label: "Phone", value: "+91-8780522494", href: "tel:+918780522494" },
  { label: "LinkedIn", value: "linkedin.com/in/hrishik-patel", href: "https://www.linkedin.com/in/hrishik-patel-731a462aa" },
  { label: "GitHub", value: "github.com/Hrishik31", href: "https://github.com/Hrishik31" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-[15vh] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="// Contact" title="Let's Connect" subtitle="Reach out for collaborations, research, or opportunities." />
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Links */}
          <div className="space-y-4">
            {contactLinks.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="block p-4 border border-foreground/5 rounded-lg hover:border-primary/30 transition-colors group"
              >
                <span className="text-label block mb-1">{c.label}</span>
                <span className="text-foreground/70 text-sm group-hover:text-primary transition-colors">{c.value}</span>
              </motion.a>
            ))}
          </div>
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:hrishikpatelll@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
            }}
          >
            <div>
              <label className="text-label block mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 font-mono"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-label block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 font-mono"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-label block mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 font-mono resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <Button variant="hero" type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
