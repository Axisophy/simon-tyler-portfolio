import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Bio Section */}
        <section className="mb-16 md:mb-24">
          <div className="frame p-8 md:p-12 pt-12 md:pt-16">
            <div className="max-w-[75%]">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-8 font-display">
                About
              </h1>

              <div className="space-y-6 text-xl md:text-2xl text-black/70 leading-relaxed">
                <p>
                  I'm a designer, author, and systems thinker based in St Leonards on Sea, East Sussex.
                  I work at the intersection of digital product design, data visualisation, and design systems.
                </p>

                <p>
                  Most recently, I led the end-to-end design of <span className="text-pink-500 font-semibold">Mxwll</span>,
                  a scientific data laboratory, and founded <span className="text-pink-500 font-semibold">Elxsis</span>,
                  a computational art studio exploring mathematical forms and scientific data.
                </p>

                <p>
                  Previously, I led design systems work at Space Agency, including the comprehensive
                  pictogram system for Network Rail's UK stations.
                </p>

                <p>
                  I also run <span className="text-pink-500 font-semibold">With a Bang</span>, a design-led textiles
                  and homewares business, and <span className="text-pink-500 font-semibold">Axisophy</span>, which
                  explores the geometry of knowledge through data visualisation prints.
                </p>

                <p>
                  I've written and illustrated books for both children and adults, published by
                  Pavilion, Faber & Faber, and Laurence King.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Currently & Experience */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
          <div className="frame p-8">
            <h2 className="font-mono text-xs text-black/40 mb-4">CURRENTLY</h2>
            <p className="text-black/70 leading-relaxed">
              I'm currently seeking design roles where I can apply my experience in product
              design, design systems, and data visualisation. I thrive in collaborative
              environments and excel at creating clarity from complexity.
            </p>
          </div>

          <div className="frame p-8">
            <h2 className="font-mono text-xs text-black/40 mb-4">EXPERIENCE</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-4 border-b border-black/10">
                <div>
                  <p className="font-semibold text-black">Mxwll</p>
                  <p className="text-sm text-black/50">Lead Product Designer</p>
                </div>
                <span className="font-mono text-xs text-black/40">2024—25</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-black">Space Agency</p>
                  <p className="text-sm text-black/50">Senior Designer</p>
                </div>
                <span className="font-mono text-xs text-black/40">2018—20</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
