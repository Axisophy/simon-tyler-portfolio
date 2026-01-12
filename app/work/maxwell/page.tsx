import Link from "next/link";
import Image from "next/image";

export default function MaxwellProject() {
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
                ← Back to Work
              </Link>
            </nav>
          </div>
        </header>

        {/* Project Header */}
        <section className="mb-16">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium mb-4">Maxwell</h2>
              <p className="text-xl md:text-2xl text-white/60">
                A digital laboratory for science happening now
              </p>
            </div>
            <span className="font-mono text-sm text-white/40">2024-25</span>
          </div>
          
          <div className="flex gap-2 flex-wrap mb-8">
            <span className="font-mono text-xs px-3 py-1 bg-accent/20 text-accent rounded">UI/UX Design</span>
            <span className="font-mono text-xs px-3 py-1 bg-accent/20 text-accent rounded">Product Design</span>
            <span className="font-mono text-xs px-3 py-1 bg-accent/20 text-accent rounded">Data Visualization</span>
            <span className="font-mono text-xs px-3 py-1 bg-accent/20 text-accent rounded">Design Systems</span>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <div className="technical-border p-8 mb-8">
            <h3 className="font-mono text-xs text-white/40 mb-4">OVERVIEW</h3>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Maxwell is a scientific data laboratory that presents complex scientific data 
              in real-time through beautifully designed interfaces. I led the complete design 
              process from concept through implementation, including UI/UX, data visualization, 
              design systems, and front-end development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="font-mono text-xs text-white/40 mb-2">ROLE</h4>
                <p className="text-white/80">Lead Product Designer</p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-white/40 mb-2">TIMELINE</h4>
                <p className="text-white/80">2024-2025</p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-white/40 mb-2">PLATFORM</h4>
                <p className="text-white/80">Web (React, Tailwind)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mb-16">
          <h3 className="font-mono text-xs text-white/40 mb-6">INTERFACE DESIGN</h3>
          
          {/* Space Stations */}
          <div className="technical-border p-4 mb-6">
            <div className="aspect-[16/10] bg-white/5 rounded-lg mb-4 overflow-hidden">
              {/* Placeholder for actual Maxwell screenshot */}
              <div className="w-full h-full flex items-center justify-center text-white/20">
                [Space Stations Live Tracking Interface]
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium mb-2">Real-time Space Station Tracking</h4>
                <p className="text-sm text-white/60">
                  Live visualization of ISS and Tiangong positions with orbital data
                </p>
              </div>
              <span className="font-mono text-xs text-white/40">01</span>
            </div>
          </div>

          {/* Earthquakes */}
          <div className="technical-border p-4 mb-6">
            <div className="aspect-[16/10] bg-white/5 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/20">
                [Earthquake Monitoring Dashboard]
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium mb-2">Earthquake Monitoring</h4>
                <p className="text-sm text-white/60">
                  Global earthquake data with temporal filtering and magnitude visualization
                </p>
              </div>
              <span className="font-mono text-xs text-white/40">02</span>
            </div>
          </div>

          {/* Standard Model */}
          <div className="technical-border p-4">
            <div className="aspect-[16/10] bg-white/5 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/20">
                [Standard Model Particle Selector]
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium mb-2">Interactive Particle Physics</h4>
                <p className="text-sm text-white/60">
                  Color-coded particle selector for exploring fundamental particles
                </p>
              </div>
              <span className="font-mono text-xs text-white/40">03</span>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="mb-16">
          <h3 className="font-mono text-xs text-white/40 mb-6">DESIGN SYSTEM</h3>
          <div className="technical-border p-8">
            <p className="text-white/60 mb-6">
              Built a comprehensive design system including typography, color systems, 
              component library, and interaction patterns. Black backgrounds with precise 
              data hierarchy and color-coded information categories.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="technical-border p-4">
                <div className="w-full h-20 bg-blue-500 rounded mb-2"></div>
                <p className="font-mono text-xs">Orbit Data</p>
              </div>
              <div className="technical-border p-4">
                <div className="w-full h-20 bg-yellow-500 rounded mb-2"></div>
                <p className="font-mono text-xs">Magnitude 4+</p>
              </div>
              <div className="technical-border p-4">
                <div className="w-full h-20 bg-orange-500 rounded mb-2"></div>
                <p className="font-mono text-xs">Force Carriers</p>
              </div>
              <div className="technical-border p-4">
                <div className="w-full h-20 bg-green-500 rounded mb-2"></div>
                <p className="font-mono text-xs">Matter Particles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Components Section */}
        <section className="mb-16">
          <h3 className="font-mono text-xs text-white/40 mb-6">INTERACTIVE DEMO</h3>
          <div className="technical-border p-8">
            <p className="text-white/60 mb-4">
              Interactive component demonstrations coming soon. Will feature live data 
              visualizations built with React and D3.js.
            </p>
            <p className="font-mono text-xs text-accent">
              → See live site: mxwll.io
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-white/40">
              © 2026 Simon Tyler
            </p>
            <Link href="/work" className="font-mono text-xs text-accent hover:opacity-60 transition-opacity">
              ← Back to Work
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
