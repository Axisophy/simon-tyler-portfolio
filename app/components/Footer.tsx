export default function Footer() {
  return (
    <footer className="px-4 md:px-6 pb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <p className="font-mono text-xs text-white/30">
            © 2026 Simon Tyler
          </p>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <p className="font-mono text-xs text-white/30">
            Available for design roles
          </p>
        </div>
        <div className="flex gap-6 font-mono text-xs text-white/40">
          <a href="mailto:hello@simontyler.co.uk" className="hover:text-pink-500 transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/simontyler" target="_blank" rel="noopener" className="hover:text-pink-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
