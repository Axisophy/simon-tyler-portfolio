import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Hero Section - White text on dark background */}
        <section className="pt-[100px] mb-16 md:mb-24">
          <div className="max-w-[75%]">
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 font-display">
              Simon Tyler is a creative director, designer, illustrator, author, and artist based in the UK.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 font-display">
              His work sits at the intersection of digital product design, data visualisation, computational systems, and generative art - translating complex information into clear, beautiful, publicly accessible experiences.
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] font-display">
              Large datasets. Scientific concepts. Technical subjects. Turned into something understandable, elegant, and often unexpected - through interactive products, visual systems, illustration, and writing. Making the complex compelling. Finding beauty in the process.
            </p>
          </div>
        </section>

        {/* Recent Work */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Recent Work</h2>
            <div className="space-y-6 text-lg md:text-xl text-black/80 leading-relaxed">
              <p>
                Most recently, he designed and built <span className="text-pink-500 font-semibold">Mxwll</span> - a digital laboratory for scientific data. The project involved creating real-time orbital mechanics simulations, plotting satellite and comet trajectories using SGP4 propagation and Kepler solvers, visualising climate data spanning decades, and rendering interactive charts for everything from the electromagnetic spectrum to the chart of nuclides. Built with React, Three.js, D3, and custom WebGL renderers.
              </p>
              <p>
                He also founded <span className="text-pink-500 font-semibold">Elxsis</span>, a computational art studio exploring dynamical systems, strange attractors, and astrophysical data - using Python, Matplotlib, and cloud GPU processing to generate large-scale generative artworks.
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Axisophy</span> is his data visualisation print studio - transforming mathematical structures, geological timescales, and phylogenetic trees into museum-grade prints. Featured in The Guardian, Elle Decoration, and The Times.
              </p>
            </div>
          </div>
        </section>

        {/* Books */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Books</h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed">
              Author and illustrator of books published by Laurence King, Faber & Faber, and Pavilion. His upcoming book <span className="text-pink-500 font-semibold">Gizmo</span> - a comprehensive illustrated survey of retro technology - is published by Laurence King in May 2026.
            </p>
          </div>
        </section>

        {/* Background */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Background</h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed">
              Previously led design systems work at Space Agency, including the comprehensive pictogram system for Network Rail's UK station wayfinding.
            </p>
          </div>
        </section>

        {/* Currently */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Currently</h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed">
              Based in St Leonards on Sea, East Sussex. Available for creative direction and design roles.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
