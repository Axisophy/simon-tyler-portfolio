import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MxwllProject() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Hero Section - Large type in white frame */}
        <section className="mb-8">
          <div className="frame p-8 md:p-12 pt-16 md:pt-20">
            <div className="max-w-[75%]">
              <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] font-display">
                Mxwll is the quality layer for science - a design-led real-time data platform and digital publication presenting scientific information with the care usually reserved for luxury products or art books.
              </p>
            </div>
          </div>
        </section>

        {/* Project Info Section - White frame with meta fields */}
        <section className="mb-16">
          <div className="frame p-6 md:p-8">
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Role</span>
                <span className="text-black font-medium">Founder, Creative Director, Lead Product Developer</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Dates</span>
                <span className="text-black font-medium">2025—2026</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Link</span>
                <a href="https://mxwll.io" target="_blank" rel="noopener" className="text-pink-500 hover:opacity-70 transition-opacity font-medium">
                  mxwll.io →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Row: The Problem + The Model */}
        <section className="mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* The Problem */}
            <div className="frame p-8 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">The Problem</h2>
              <div className="space-y-4 text-lg text-black/80 leading-relaxed">
                <p>
                  All the science is already out there. NASA publishes live solar imagery. NOAA streams space weather data. USGS tracks every earthquake in real time. Thousands of papers are published daily.
                </p>
                <p>
                  But accessing it means navigating government websites designed in 2003, paywalled journals with hostile interfaces, and PDFs that haven't been touched since digitisation. The raw material of science is abundant and largely free. What's missing is the presentation layer - the curation, design, and craft that makes it accessible, beautiful, and trustworthy.
                </p>
                <p className="text-black font-semibold">
                  Mxwll is that presentation layer.
                </p>
              </div>
            </div>

            {/* The Model */}
            <div className="frame p-8 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">The Model</h2>
              <div className="space-y-4 text-lg text-black/80 leading-relaxed">
                <p>
                  The underlying content is often free. What people value is someone with good judgment deciding what matters, beautiful and functional presentation, and a reliable place to return to.
                </p>
                <p>
                  This is the same model that made Flightradar24 (acquired for $1B+ despite presenting public flight data), the Criterion Collection (licensing films anyone can access), and earth.nullschool.net (public weather data made mesmerising).
                </p>
                <p className="text-black font-semibold">
                  Mxwll applies this model to science. Taste + presentation + trust = value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Row - Full width placeholder */}
        <section className="mb-16">
          <div className="frame-dark aspect-[21/9] rounded-lg flex items-center justify-center">
            <p className="font-mono text-xs text-white/30">Mxwll platform overview</p>
          </div>
        </section>

        {/* Row: What I Built - Observe */}
        <section className="mb-4">
          <div className="frame p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-2 font-display">What I Built</h2>
            <h3 className="text-lg font-semibold text-pink-500 mb-4">Observe</h3>
            <p className="text-lg text-black/80 leading-relaxed mb-6">
              Real-time feeds from NASA, NOAA, weather satellites, seismology networks, and particle physics experiments. 40+ widgets across space, earth, life, infrastructure, and detectors:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-black/70">
              <li className="flex gap-3"><span className="text-pink-500">•</span>Solar observatory with multi-wavelength disc viewers (SDO, SOHO, STEREO)</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Live earthquake mapping and seismograph grid</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Space station tracking with crew data</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>LHC beam status and luminosity</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Gravitational wave detector status (LIGO/Virgo)</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Neutrino event alerts from IceCube at the South Pole</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Cosmic ray monitoring</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>UK energy generation mix and carbon intensity</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Global fire and lightning detection</li>
            </ul>
          </div>
        </section>

        {/* Image Row - Observe widgets */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Observe widgets</p>
            </div>
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Observe widgets</p>
            </div>
          </div>
        </section>

        {/* Row: Orbital Platform + Data Visualisation */}
        <section className="mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Orbital Platform */}
            <div className="frame p-8 md:p-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Orbital Platform</h3>
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                Multi-scale visualisation engine for everything from LEO satellites to Voyager at the edge of the solar system:
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex gap-3"><span className="text-pink-500">•</span>Sun-Earth-Moon orrery using VSOP87 planetary positions</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Real-time Voyager 1 & 2 tracking at 20+ billion km using JPL Horizons ephemeris</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Live ISS/Tiangong tracking with TLE/SGP4 propagation</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Comet trajectories using Keplerian orbital mechanics</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Near-Earth asteroid close approach calendar</li>
              </ul>
            </div>

            {/* Data Visualisation */}
            <div className="frame p-8 md:p-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Data Visualisation</h3>
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                Complex scientific datasets rendered as clear, interactive charts:
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex gap-3"><span className="text-pink-500">•</span>Climate data spanning decades with 38 datasets</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Chart of nuclides - every known isotope plotted by decay type and half-life</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Electromagnetic spectrum spanning 19 orders of magnitude</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Standard Model of particle physics</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Periodic table with trend visualisation and element exploration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Image Row - Orbital/Charts */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Orbital platform</p>
            </div>
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Data visualisation</p>
            </div>
          </div>
        </section>

        {/* Row: Vault + Play */}
        <section className="mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Vault */}
            <div className="frame p-8 md:p-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Vault</h3>
              <p className="text-lg text-black/80 leading-relaxed">
                Curated scientific library presenting foundational texts with editorial context and typographic care. Classic papers and landmark discoveries, reformatted for modern reading.
              </p>
            </div>

            {/* Play */}
            <div className="frame p-8 md:p-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Play</h3>
              <p className="text-lg text-black/80 leading-relaxed">
                15+ interactive mathematical visualisations: strange attractors (Lorenz, Rössler, Aizawa), fractals, cellular automata, pattern formation systems. Mathematical beauty as exploration.
              </p>
            </div>
          </div>
        </section>

        {/* Image Row - Vault/Play */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Vault</p>
            </div>
            <div className="frame-dark aspect-video rounded-lg flex items-center justify-center">
              <p className="font-mono text-xs text-white/30">Play</p>
            </div>
          </div>
        </section>

        {/* Row: Technical Implementation */}
        <section className="mb-16">
          <div className="frame p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-8 font-display">Technical Implementation</h2>

            {/* Tech Stack Table */}
            <div className="mb-10 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="py-3 font-mono text-black/50 w-32">Area</td>
                    <td className="py-3 font-mono text-black/50">Stack</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Framework</td>
                    <td className="py-3 text-black">Next.js 14+, React, TypeScript</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">3D</td>
                    <td className="py-3 text-black">Three.js, React Three Fiber</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Charts</td>
                    <td className="py-3 text-black">D3.js, Canvas 2D</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Data</td>
                    <td className="py-3 text-black">20+ scientific APIs (NASA, NOAA, USGS, JPL, CelesTrak, CERN, ESA)</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Caching</td>
                    <td className="py-3 text-black">Vercel KV, stale-while-revalidate patterns</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Deployment</td>
                    <td className="py-3 text-black">Vercel</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Orbital Mechanics */}
            <h3 className="text-lg font-semibold text-black mb-4">Orbital mechanics:</h3>
            <ul className="space-y-2 text-black/70">
              <li className="flex gap-3"><span className="text-pink-500">•</span>Floating origin (camera at 0,0,0) to prevent floating-point jitter at planetary scales</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Logarithmic depth buffer for LEO to heliocentric scale rendering</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Three propagation regimes: SGP4 for Earth-orbiting satellites, Keplerian mechanics for solar system bodies, JPL ephemeris interpolation for spacecraft</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Web Workers for off-thread propagation calculations</li>
            </ul>
          </div>
        </section>

        {/* Row: Why It Matters */}
        <section className="mb-16">
          <div className="frame p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Why It Matters</h2>
            <div className="space-y-6 text-xl md:text-2xl text-black/80 leading-relaxed">
              <p>
                Science deserves better presentation. The invisible processes that shape our world - stars fusing, particles decaying, plates shifting, data flowing - mostly go unseen. Mxwll builds windows into these processes. Beautiful windows. Trustworthy windows.
              </p>
              <p>
                The differentiator isn't more data or more features. It's design quality, editorial clarity, and the conviction that curious people deserve better than what currently exists.
              </p>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="mb-12">
          <Link
            href="/work"
            className="font-mono text-sm text-white/40 hover:text-pink-500 transition-colors"
          >
            ← Back to Work
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
