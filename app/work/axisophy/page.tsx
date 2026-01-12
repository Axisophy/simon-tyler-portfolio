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

export default function AxisophyProject() {
  const metaItems = [
    { label: "Role", value: "Founder, Creative Director" },
    { label: "Dates", value: "2013-present (as Atomic Printworks until 2024)" },
    { label: "Link", value: "axisophy.com", href: "https://axisophy.com" }
  ];

  const heroSlides = [
    { src: "/images/axisophy/Axisophy-sacks-spiral-black-mockup-1-flat-crop.jpg", caption: "Sacks Spiral print" }
  ];

  const collections = [
    {
      number: "01",
      title: "Signature Series",
      description: "Prime number spirals (Ulam, Sacks), phylogenetic trees, Apollonian gaskets, and scientific infographics. The accessible entry point - open editions at £80-125."
    },
    {
      number: "02",
      title: "Mersenne Series",
      description: "Large-format limited editions including strange attractor phase portraits (Henon map basin visualisations) and E8 Lie group projections. Premium work on specialist archival papers, £1,095-1,595."
    },
    {
      number: "03",
      title: "Radiance Series",
      description: "Processed imagery from NASA's Mars HiRISE archive - metre-scale planetary terrain rendered for large-format print with restrained, evidence-minded tonal adjustments."
    },
    {
      number: "04",
      title: "Gizmo Series",
      description: "Retro technology illustrations accompanying the forthcoming Laurence King book (May 2026)."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Axisophy"
          tagline="Museum-quality art prints at the intersection of science, mathematics, and design."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Axisophy transforms complex data - from prime number distributions to phylogenetic trees, dynamical systems to planetary imagery - into visually striking prints that reward both close examination and distant appreciation.
              </p>
              <p>
                The studio produces original mathematical visualisations developed through custom computational tools. Products range from accessible open-edition prints to large-scale limited editions on specialist papers, positioning the brand between commercial print retail and gallery-represented fine art.
              </p>
            </div>
          }
        />

        <ImageSlideshow slides={heroSlides} />

        <ImageRow
          images={[
            { src: "/images/axisophy/Axisophy-GeologicalTimescale_mockup-1-flat-crop.jpg", alt: "Geological Timescale print" },
            { src: "/images/axisophy/Axisophy-Aves-Mono-PhylogeneticTree-mockup-1-flat-mono.jpg", alt: "Phylogenetic Tree print" }
          ]}
         
        />

        {/* Collections */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
              {collections.map((collection, index) => (
                <div key={index} className="bg-black/5 rounded-lg p-6">
                  <p className="font-mono text-sm text-pink-500 mb-2">{collection.number}</p>
                  <h3 className="text-lg font-bold text-black mb-2">{collection.title}</h3>
                  <p className="text-sm text-black/70 leading-relaxed">{collection.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ImageRow
          images={[
            { src: "/images/axisophy/Axisophy-mars-aram-chaos-V3_mockup-flat-crop.jpg", alt: "Mars Aram Chaos print" },
            { src: "/images/axisophy/Axisophy-european-peacock-butterfly-mockup-1-2800px.jpg", alt: "European Peacock Butterfly print" }
          ]}
         
        />

        {/* Technical Approach */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Technical Approach</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="py-3 font-mono text-black/50 w-40">Technique</td>
                    <td className="py-3 font-mono text-black/50">Tools</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Phylogenetic Trees</td>
                    <td className="py-3 text-black">D3.js radial tree layouts, custom taxonomic data curation</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Phase Portraits</td>
                    <td className="py-3 text-black">Python, RK4 numerical integration, Poincare sections, GPU acceleration via CuPy</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Prime Spirals</td>
                    <td className="py-3 text-black">Sieve of Eratosthenes, Archimedean spiral coordinate mapping</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Domain Colouring</td>
                    <td className="py-3 text-black">Complex function visualisation with mpmath</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">E8 Projections</td>
                    <td className="py-3 text-black">High-dimensional Lie group mathematics, computational geometry</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-black/60 mt-6">
              Cloud GPU resources (RunPod - RTX 4090, A100) for intensive renders. High-resolution export up to 12,000px with supersampling for large-format print production.
            </p>
          </div>
        </section>

        <ImageRow
          images={[
            { src: "/images/axisophy/PhasePortrait_003p1.jpg", alt: "Phase Portrait print" },
            { src: "/images/axisophy/Axisophy-Canon-XL1_mockup-1-flat-crop.jpg", alt: "Canon XL1 print" }
          ]}
         
        />

        <ContentSection title="Production">
          <p>
            Tiered fulfillment model: print-on-demand via Gelato for global distribution of standard editions; specialist UK printers (Beyond Print, Metro Imaging) for premium and limited edition work on archival and Lambda-process papers.
          </p>
        </ContentSection>

        <ContentSection title="Recognition">
          <p>
            Featured in Elle Decoration, The Guardian, The Telegraph, The Times, The Sunday Times, and It's Nice That. The original Elle Decoration coverage led to a multi-book publishing deal.
          </p>
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
