import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MaxwellProject() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Project Header */}
        <section className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="font-mono text-xs text-pink-500 mb-2">01</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display">Mxwll</h1>
              <p className="text-xl md:text-2xl text-white/60">
                A digital laboratory for science happening now
              </p>
            </div>
            <span className="font-mono text-sm text-white/40">2024—25</span>
          </div>

          <div className="flex gap-2 flex-wrap">
            <span className="font-mono text-xs px-3 py-1 bg-pink-500/20 text-pink-500 rounded">Product Design</span>
            <span className="font-mono text-xs px-3 py-1 bg-pink-500/20 text-pink-500 rounded">UI/UX</span>
            <span className="font-mono text-xs px-3 py-1 bg-pink-500/20 text-pink-500 rounded">Data Visualisation</span>
            <span className="font-mono text-xs px-3 py-1 bg-pink-500/20 text-pink-500 rounded">React</span>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="frame p-4 overflow-hidden">
            <Image
              src="/images/maxwell/hero.jpg"
              alt="Mxwll - a digital laboratory for science"
              width={2880}
              height={1620}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <div className="frame p-8 md:p-12">
            <h2 className="font-mono text-xs text-black/40 mb-4">OVERVIEW</h2>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8 max-w-3xl">
              Mxwll is a scientific data laboratory that presents complex scientific data
              in real-time through beautifully designed interfaces. I led the complete design
              process from concept through implementation, including UI/UX, data visualisation,
              design systems, and front-end development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/10">
              <div>
                <h3 className="font-mono text-xs text-black/40 mb-2">ROLE</h3>
                <p className="text-black/80 font-semibold">Lead Product Designer</p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-black/40 mb-2">TIMELINE</h3>
                <p className="text-black/80 font-semibold">2024—2025</p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-black/40 mb-2">PLATFORM</h3>
                <p className="text-black/80 font-semibold">Web (React, Tailwind)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Grid */}
        <section className="mb-12">
          <h2 className="font-mono text-xs text-white/40 mb-6">INTERFACE DESIGN</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="frame p-4">
              <Image
                src="/images/maxwell/space.jpg"
                alt="Space station tracking interface"
                width={1440}
                height={810}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Real-time Space Station Tracking</h3>
                <p className="text-sm text-black/60">Live visualisation of ISS and Tiangong positions with orbital data</p>
              </div>
            </div>

            <div className="frame p-4">
              <Image
                src="/images/maxwell/earth.jpg"
                alt="Earthquake monitoring dashboard"
                width={1440}
                height={810}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Earthquake Monitoring</h3>
                <p className="text-sm text-black/60">Global earthquake data with temporal filtering and magnitude visualisation</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="frame p-4">
              <Image
                src="/images/maxwell/lhc.jpg"
                alt="LHC particle physics interface"
                width={960}
                height={540}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Particle Physics</h3>
                <p className="text-sm text-black/60">LHC data visualisation</p>
              </div>
            </div>

            <div className="frame p-4">
              <Image
                src="/images/maxwell/periodic.jpg"
                alt="Interactive periodic table"
                width={960}
                height={540}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Periodic Table</h3>
                <p className="text-sm text-black/60">Interactive element explorer</p>
              </div>
            </div>

            <div className="frame p-4">
              <Image
                src="/images/maxwell/observatory.jpg"
                alt="Observatory interface"
                width={960}
                height={540}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Observatory</h3>
                <p className="text-sm text-black/60">Astronomical data feeds</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="frame p-4">
              <Image
                src="/images/maxwell/dashboard.jpg"
                alt="Main dashboard"
                width={1440}
                height={810}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Dashboard</h3>
                <p className="text-sm text-black/60">Central hub for all scientific modules</p>
              </div>
            </div>

            <div className="frame p-4">
              <Image
                src="/images/maxwell/universe.jpg"
                alt="Universe explorer"
                width={1440}
                height={810}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="px-2">
                <h3 className="text-lg font-semibold text-black mb-1">Universe</h3>
                <p className="text-sm text-black/60">Scale of the universe visualisation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="frame p-8 text-center">
            <p className="text-black/60 mb-4">
              Interactive demonstrations and live data visualisations
            </p>
            <a
              href="https://mxwll.io"
              target="_blank"
              rel="noopener"
              className="inline-block text-xl font-semibold text-pink-500 hover:opacity-70 transition-opacity"
            >
              Visit mxwll.io →
            </a>
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
