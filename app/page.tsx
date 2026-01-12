import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Frame container - Jon Way style */}
      <div className="technical-border m-3 md:m-5 lg:m-6 min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3rem)] flex flex-col">
        
        {/* Header */}
        <header className="p-6 md:p-8 border-b border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-white/40">ST</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="font-mono text-xs text-white/40">51.4416°N</span>
            </div>
            <nav className="flex gap-6 font-mono text-xs">
              <Link href="/work" className="hover:text-accent transition-colors">
                Work
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8 lg:p-12 grid-pattern">
          
          {/* Hero Statement */}
          <section className="max-w-5xl mb-16 md:mb-24">
            <p className="font-mono text-xs text-white/40 mb-6">Introduction</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tight-spacing leading-[1.15] mb-8">
              <span className="text-white/90">Simon Tyler</span> is a designer and author working at the intersection of{" "}
              <span className="text-accent">digital product</span>,{" "}
              <span className="text-accent">data visualization</span>, and{" "}
              <span className="text-accent">computational systems</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl">
              Currently seeking design roles. Based in St Leonards on Sea, UK. 
              Building Maxwell, Elxsis, and With a Bang. Previously led design systems at Space Agency.
            </p>
          </section>

          {/* Featured Projects */}
          <section>
            <div className="flex items-baseline justify-between mb-6">
              <p className="font-mono text-xs text-white/40">Featured Work</p>
              <Link 
                href="/work" 
                className="font-mono text-xs hover:text-accent transition-colors group flex items-center gap-2"
              >
                View All
                <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Maxwell - Featured */}
              <Link 
                href="/work/maxwell"
                className="lg:col-span-2 technical-border p-6 hover:border-accent/40 transition-all group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-xs text-accent mb-2">01</p>
                    <h2 className="text-2xl md:text-3xl font-medium group-hover:text-accent transition-colors">
                      Maxwell
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-white/30">2024—25</span>
                </div>
                
                <div className="aspect-[16/9] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  {/* Placeholder - replace with actual image */}
                  <div className="text-center p-8">
                    <p className="font-mono text-xs text-white/20 mb-2">mxwll.io</p>
                    <p className="text-white/30 text-sm">A digital laboratory for science</p>
                  </div>
                </div>
                
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  End-to-end product design for a scientific data platform. Real-time space station tracking, 
                  earthquake monitoring, particle physics visualization, and live astronomical data.
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Product Design</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">UI/UX</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Data Visualization</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">React</span>
                </div>
              </Link>

              {/* Elxsis */}
              <Link 
                href="/work/elxsis"
                className="technical-border p-6 hover:border-accent/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-xs text-accent mb-2">02</p>
                    <h2 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                      Elxsis
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-white/30">2024—25</span>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <p className="font-mono text-xs text-white/20">elxsis.com</p>
                </div>
                
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Computational art studio. Dynamical systems, astrophysical data, and emergent mathematical forms.
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Creative Direction</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Generative</span>
                </div>
              </Link>

              {/* Network Rail */}
              <Link 
                href="/work/network-rail"
                className="technical-border p-6 hover:border-accent/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-xs text-accent mb-2">03</p>
                    <h2 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                      Network Rail
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-white/30">2020</span>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <p className="font-mono text-xs text-white/20">Pictogram System</p>
                </div>
                
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Led the design of a comprehensive pictogram system for UK rail wayfinding at Space Agency.
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Design Systems</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Iconography</span>
                </div>
              </Link>

              {/* Axisophy */}
              <Link 
                href="/work/axisophy"
                className="lg:col-span-2 technical-border p-6 hover:border-accent/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-xs text-accent mb-2">04</p>
                    <h2 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                      Axisophy
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-white/30">2020—25</span>
                </div>
                
                <div className="aspect-[21/9] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <p className="font-mono text-xs text-white/20">axisophy.com — The art of intelligent data</p>
                </div>
                
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Data visualization print studio. Mathematical structures, geological timescales, phylogenetic trees, 
                  and computational art — transformed into museum-grade prints. Featured in The Guardian, Elle Decoration, and The Times.
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Product Design</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">Data Viz</span>
                  <span className="font-mono text-[10px] px-2 py-1 bg-white/5 rounded text-white/50">E-commerce</span>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="p-6 md:p-8 border-t border-white/10">
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
              <a href="mailto:hello@simontyler.co.uk" className="hover:text-accent transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/simontyler" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
