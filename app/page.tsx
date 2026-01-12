import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 mx-4 mt-4 md:mx-6 md:mt-6">
        <div className="p-4 md:p-5 flex justify-between items-center">
          <Link href="/" className="text-white font-medium text-lg">
            Simon Tyler
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/work" className="text-white hover:text-pink-500 transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-white hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-pink-500 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        {/* Hero Statement */}
        <section className="mb-16 md:mb-24">
          <div className="frame p-8 md:p-12 pt-16 md:pt-20">
            <div className="max-w-[75%]">
              <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-8 font-display">
                Simon Tyler is a creative director, designer, illustrator, author, and artist based in the UK.
              </p>
              <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] mb-8 font-display">
                His work sits at the intersection of digital product design, data visualisation, computational systems, and generative art - translating complex information into clear, beautiful, publicly accessible experiences.
              </p>
            </div>
          </div>
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
            {/* Row 1: Mxwll - Full width */}
            <Link
              href="/work/maxwell"
              className="lg:col-span-3 frame p-6 hover:ring-2 hover:ring-pink-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pink-500 mb-2">01</p>
                  <h2 className="text-2xl md:text-3xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                    Mxwll
                  </h2>
                </div>
                <span className="font-mono text-xs text-black/40">2024—25</span>
              </div>

              <div className="aspect-[21/9] bg-gradient-to-br from-black/5 to-black/[0.02] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-mono text-xs text-black/30 mb-2">mxwll.io</p>
                  <p className="text-black/40 text-sm">A digital laboratory for science</p>
                </div>
              </div>

              <p className="text-black/60 text-sm mb-4 leading-relaxed">
                End-to-end product design for a scientific data platform. Real-time space station tracking,
                earthquake monitoring, particle physics visualisation, and live astronomical data.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Product Design</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">UI/UX</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Data Visualisation</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">React</span>
              </div>
            </Link>

            {/* Row 2: Elxsis (2 cols) + Network Rail (1 col) */}
            <Link
              href="/work/elxsis"
              className="lg:col-span-2 frame p-6 hover:ring-2 hover:ring-pink-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pink-500 mb-2">02</p>
                  <h2 className="text-xl md:text-2xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                    Elxsis
                  </h2>
                </div>
                <span className="font-mono text-xs text-black/40">2024—25</span>
              </div>

              <div className="aspect-[21/9] bg-gradient-to-br from-black/5 to-black/[0.02] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <p className="font-mono text-xs text-black/30">elxsis.com</p>
              </div>

              <p className="text-black/60 text-sm mb-4 leading-relaxed">
                Computational art studio. Dynamical systems, astrophysical data, and emergent mathematical forms.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Creative Direction</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Generative Art</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Python</span>
              </div>
            </Link>

            <Link
              href="/work/network-rail"
              className="frame p-6 hover:ring-2 hover:ring-pink-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pink-500 mb-2">03</p>
                  <h2 className="text-xl md:text-2xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                    Network Rail
                  </h2>
                </div>
                <span className="font-mono text-xs text-black/40">2020</span>
              </div>

              <div className="aspect-square bg-gradient-to-br from-black/5 to-black/[0.02] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <p className="font-mono text-xs text-black/30">Pictogram System</p>
              </div>

              <p className="text-black/60 text-sm mb-4 leading-relaxed">
                Led the design of a comprehensive pictogram system for UK rail wayfinding at Space Agency.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Pictograms</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Wayfinding</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Iconography</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Illustration</span>
              </div>
            </Link>

            {/* Row 3: Axisophy (2 cols) + Gizmo (1 col) */}
            <Link
              href="/work/axisophy"
              className="lg:col-span-2 frame p-6 hover:ring-2 hover:ring-pink-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pink-500 mb-2">04</p>
                  <h2 className="text-xl md:text-2xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                    Axisophy
                  </h2>
                </div>
                <span className="font-mono text-xs text-black/40">2020—25</span>
              </div>

              <div className="aspect-[21/9] bg-gradient-to-br from-black/5 to-black/[0.02] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <p className="font-mono text-xs text-black/30">axisophy.com — The art of intelligent data</p>
              </div>

              <p className="text-black/60 text-sm mb-4 leading-relaxed">
                Data visualisation print studio. Mathematical structures, geological timescales, phylogenetic trees,
                and computational art — transformed into museum-grade prints. Featured in The Guardian, Elle Decoration, and The Times.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">E-commerce</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Shopify</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Illustration</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Graphic Design</span>
              </div>
            </Link>

            <Link
              href="/work/gizmo"
              className="frame p-6 hover:ring-2 hover:ring-pink-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-pink-500 mb-2">05</p>
                  <h2 className="text-xl md:text-2xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                    Gizmo
                  </h2>
                </div>
                <span className="font-mono text-xs text-black/40">2026</span>
              </div>

              <div className="aspect-square bg-gradient-to-br from-black/5 to-black/[0.02] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <p className="font-mono text-xs text-black/30">Laurence King</p>
              </div>

              <p className="text-black/60 text-sm mb-4 leading-relaxed">
                A comprehensive illustrated survey of retro technology - the gadgets we loved and lost. Published by Laurence King.
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Book</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Illustration</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Design</span>
                <span className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">Writing</span>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
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
            <a href="mailto:hello@simontyler.co.uk" className="hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/simontyler" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
