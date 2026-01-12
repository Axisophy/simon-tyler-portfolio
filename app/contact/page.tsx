import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <div className="technical-border m-4 md:m-6 lg:m-8 min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] p-6 md:p-12 lg:p-16 grid-pattern">
        
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex justify-between items-start">
            <Link href="/" className="hover:opacity-60 transition-opacity">
              <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Simon Tyler</h1>
              <p className="font-mono text-xs text-white/40">
                51.4416°N, 0.5694°E
              </p>
            </Link>
            <nav className="flex gap-6 font-mono text-xs">
              <Link href="/work" className="hover:text-accent transition-colors">
                Work
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-accent">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-white/60 leading-relaxed">
              Currently seeking design roles. Open to product design, design systems, 
              and data visualization opportunities.
            </p>

            <div className="space-y-4">
              <div className="technical-border p-6">
                <h3 className="font-mono text-xs text-white/40 mb-2">Email</h3>
                <a 
                  href="mailto:simon@example.com" 
                  className="text-xl text-accent hover:opacity-60 transition-opacity"
                >
                  simon@example.com
                </a>
              </div>

              <div className="technical-border p-6">
                <h3 className="font-mono text-xs text-white/40 mb-2">Location</h3>
                <p className="text-xl">St Leonards on Sea, East Sussex, UK</p>
                <p className="font-mono text-sm text-white/40 mt-1">51.4416°N, 0.5694°E</p>
              </div>

              <div className="technical-border p-6">
                <h3 className="font-mono text-xs text-white/40 mb-4">Links</h3>
                <div className="space-y-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener"
                    className="block text-accent hover:opacity-60 transition-opacity"
                  >
                    LinkedIn →
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener"
                    className="block text-accent hover:opacity-60 transition-opacity"
                  >
                    Twitter →
                  </a>
                  <a 
                    href="https://elxsis.com" 
                    target="_blank" 
                    rel="noopener"
                    className="block text-accent hover:opacity-60 transition-opacity"
                  >
                    Elxsis →
                  </a>
                  <a 
                    href="https://axisophy.com" 
                    target="_blank" 
                    rel="noopener"
                    className="block text-accent hover:opacity-60 transition-opacity"
                  >
                    Axisophy →
                  </a>
                  <a 
                    href="https://withabang.co" 
                    target="_blank" 
                    rel="noopener"
                    className="block text-accent hover:opacity-60 transition-opacity"
                  >
                    With a Bang →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-white/40">
              © 2026 Simon Tyler
            </p>
            <div className="flex gap-6 font-mono text-xs text-white/40">
              <a href="mailto:simon@example.com" className="hover:text-accent transition-colors">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
