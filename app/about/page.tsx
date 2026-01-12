import Link from "next/link";

export default function About() {
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
              <Link href="/about" className="text-accent">
                About
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Content */}
        <section className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">About</h2>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              I'm a designer, author, and systems thinker based in St Leonards on Sea, East Sussex. 
              I work at the intersection of digital product design, data visualization, and design systems.
            </p>
            
            <p>
              Most recently, I led the end-to-end design of <span className="text-accent">Maxwell</span>, 
              a scientific data laboratory, and founded <span className="text-accent">Elxsis</span>, 
              a computational art studio exploring mathematical forms and scientific data.
            </p>

            <p>
              Previously, I led design systems work at Space Agency, including the comprehensive 
              pictogram system for Network Rail's UK stations.
            </p>

            <p>
              I also run <span className="text-accent">With a Bang</span>, a design-led textiles 
              and homewares business, and <span className="text-accent">Axisophy</span>, which 
              explores the geometry of knowledge through data visualization prints.
            </p>

            <p>
              I've written and illustrated books for both children and adults, published by 
              Pavilion, Faber & Faber, and Lawrence King.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-medium mb-4">Currently</h3>
              <p>
                I'm currently seeking design roles where I can apply my experience in product 
                design, design systems, and data visualization. I thrive in collaborative 
                environments and excel at creating clarity from complexity.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-medium mb-4">Experience</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="technical-border p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-accent">Maxwell</span>
                    <span className="text-white/40">2024-25</span>
                  </div>
                  <p className="text-white/60">Lead Product Designer</p>
                </div>
                <div className="technical-border p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-accent">Space Agency</span>
                    <span className="text-white/40">2018-20</span>
                  </div>
                  <p className="text-white/60">Senior Designer</p>
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
