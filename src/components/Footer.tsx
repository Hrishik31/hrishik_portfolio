const Footer = () => (
  <footer className="border-t border-foreground/5 py-8 relative z-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hrishik Patel — All systems nominal.
      </p>
      <p className="font-mono text-[10px] text-muted-foreground/50">
        SYS.LOG // PORTFOLIO.v1.0 // STATUS: ACTIVE
      </p>
    </div>
  </footer>
);

export default Footer;
