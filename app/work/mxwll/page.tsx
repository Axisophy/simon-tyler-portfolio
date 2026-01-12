import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection,
  ImageRow
} from "../../components/case-study";

export default function MxwllProject() {
  const metaItems = [
    { label: "Role", value: "Founder, Creative Director, Lead Product Developer" },
    { label: "Dates", value: "2025-2026" },
    { label: "Link", value: "mxwll.io", href: "https://mxwll.io" }
  ];

  const heroSlides = [
    { src: "/images/maxwell/hero.jpg", caption: "Mxwll platform overview" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Mxwll"
          tagline="The quality layer for science - design-led real-time data for curious people."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Mxwll is the quality layer for science - a design-led real-time data platform and digital publication presenting scientific information with the care usually reserved for luxury products or art books.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} />

        <ContentSection title="The Problem">
          <div className="space-y-4">
            <p>
              All the science is already out there. NASA publishes live solar imagery. NOAA streams space weather data. USGS tracks every earthquake in real time. Thousands of papers are published daily.
            </p>
            <p>
              But accessing it means navigating government websites designed in 2003, paywalled journals with hostile interfaces, and PDFs that haven't been touched since digitisation. The raw material of science is abundant and largely free. What's missing is the presentation layer - the curation, design, and craft that makes it accessible, beautiful, and trustworthy.
            </p>
            <p className="font-semibold text-black">
              Mxwll is that presentation layer.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="The Model">
          <div className="space-y-4">
            <p>
              The underlying content is often free. What people value is someone with good judgment deciding what matters, beautiful and functional presentation, and a reliable place to return to.
            </p>
            <p>
              This is the same model that made Flightradar24 (acquired for $1B+ despite presenting public flight data), the Criterion Collection (licensing films anyone can access), and earth.nullschool.net (public weather data made mesmerising).
            </p>
            <p className="font-semibold text-black">
              Mxwll applies this model to science. Taste + presentation + trust = value.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/maxwell/dashboard.jpg", alt: "Mxwll Dashboard - central hub for scientific modules" }
          ]}
        />

        {/* Combined What I Built section */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-8 font-display">What I Built</h2>

            {/* Observe */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Observe</h3>
              <p className="text-base text-black/80 leading-relaxed mb-4">
                Real-time feeds from NASA, NOAA, weather satellites, seismology networks, and particle physics experiments. 40+ widgets across space, earth, life, infrastructure, and detectors:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-black/70 text-sm">
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

            {/* Orbital Platform */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Orbital Platform</h3>
              <p className="text-base text-black/80 leading-relaxed mb-4">
                Multi-scale visualisation engine for everything from LEO satellites to Voyager at the edge of the solar system:
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="flex gap-3"><span className="text-pink-500">•</span>Sun-Earth-Moon orrery using VSOP87 planetary positions</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Real-time Voyager 1 & 2 tracking at 20+ billion km using JPL Horizons ephemeris</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Live ISS/Tiangong tracking with TLE/SGP4 propagation</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Comet trajectories using Keplerian orbital mechanics</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Near-Earth asteroid close approach calendar</li>
              </ul>
            </div>

            {/* Data Visualisation */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Data Visualisation</h3>
              <p className="text-base text-black/80 leading-relaxed mb-4">
                Complex scientific datasets rendered as clear, interactive charts:
              </p>
              <ul className="space-y-2 text-black/70 text-sm">
                <li className="flex gap-3"><span className="text-pink-500">•</span>Climate data spanning decades with 38 datasets</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Chart of nuclides - every known isotope plotted by decay type and half-life</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Electromagnetic spectrum spanning 19 orders of magnitude</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Standard Model of particle physics</li>
                <li className="flex gap-3"><span className="text-pink-500">•</span>Periodic table with trend visualisation and element exploration</li>
              </ul>
            </div>

            {/* Vault */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Vault</h3>
              <p className="text-base text-black/80 leading-relaxed">
                Curated scientific library presenting foundational texts with editorial context and typographic care. Classic papers and landmark discoveries, reformatted for modern reading.
              </p>
            </div>

            {/* Play */}
            <div>
              <h3 className="text-lg font-semibold text-pink-500 mb-4">Play</h3>
              <p className="text-base text-black/80 leading-relaxed">
                15+ interactive mathematical visualisations: strange attractors (Lorenz, Rössler, Aizawa), fractals, cellular automata, pattern formation systems. Mathematical beauty as exploration.
              </p>
            </div>
          </div>
        </section>

        <ImageRow
          images={[
            { src: "/images/maxwell/earth.jpg", alt: "Earthquake monitoring - global seismic data" },
            { src: "/images/maxwell/observe.jpg", alt: "Observe widgets - real-time scientific feeds" }
          ]}
        />

        <ImageRow
          images={[
            { src: "/images/maxwell/space.jpg", alt: "Space station tracking - ISS and Tiangong positions" },
            { src: "/images/maxwell/universe.jpg", alt: "Scale of the universe visualisation" }
          ]}
        />

        <ImageRow
          images={[
            { src: "/images/maxwell/periodic.jpg", alt: "Interactive periodic table" },
            { src: "/images/maxwell/lhc.jpg", alt: "LHC particle physics data" },
            { src: "/images/maxwell/observatory.jpg", alt: "Observatory - astronomical data feeds" }
          ]}
        />

        {/* Technical Implementation */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
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
            <ul className="space-y-2 text-black/70 text-sm">
              <li className="flex gap-3"><span className="text-pink-500">•</span>Floating origin (camera at 0,0,0) to prevent floating-point jitter at planetary scales</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Logarithmic depth buffer for LEO to heliocentric scale rendering</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Three propagation regimes: SGP4 for Earth-orbiting satellites, Keplerian mechanics for solar system bodies, JPL ephemeris interpolation for spacecraft</li>
              <li className="flex gap-3"><span className="text-pink-500">•</span>Web Workers for off-thread propagation calculations</li>
            </ul>
          </div>
        </section>

        <ContentSection title="Why It Matters">
          <div className="space-y-4">
            <p>
              Science deserves better presentation. The invisible processes that shape our world - stars fusing, particles decaying, plates shifting, data flowing - mostly go unseen. Mxwll builds windows into these processes. Beautiful windows. Trustworthy windows.
            </p>
            <p>
              The differentiator isn't more data or more features. It's design quality, editorial clarity, and the conviction that curious people deserve better than what currently exists.
            </p>
          </div>
        </ContentSection>

        {/* Back Link */}
        <section className="mt-16 mb-12">
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
