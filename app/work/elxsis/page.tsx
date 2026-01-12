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

export default function ElxsisProject() {
  const metaItems = [
    { label: "Role", value: "Founder, Creative Director" },
    { label: "Dates", value: "2024-present" },
    { label: "Link", value: "elxsis.com", href: "https://elxsis.com" }
  ];

  const heroSlides = [
    { src: "/images/elxsis/FinalLorenz1.png", caption: "Lorenz attractor visualization" }
  ];

  const selectedWork = [
    {
      number: "01",
      title: "Lorenz Loop",
      description: "A seamlessly looping 4K animation of the Lorenz attractor, computed from 12 million trajectory points with a rolling-window reveal and orbiting camera. The flagship piece demonstrating the full pipeline from trajectory generation through Blender rendering to encoded video."
    },
    {
      number: "02",
      title: "Gray-Scott Reaction-Diffusion Studies",
      description: "Coral and labyrinthine pattern fields generated through chemical simulation - the same mathematics that produces animal markings and coral growth. Exported as print-ready stills."
    },
    {
      number: "03",
      title: "Complex Function Cartographies",
      description: "Domain colouring and transformation grid visualisations of analytic functions (sin(z), Joukowski, Mobius transforms), rendered with an engraving aesthetic."
    },
    {
      number: "04",
      title: "Quantum Hydrogen Wavefunction Plates",
      description: "2D cross-sections of atomic orbitals showing probability density and phase structure - making quantum mechanics visible."
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Elxsis"
          tagline="Computational art studio exploring dynamical systems, astrophysical data, and emergent mathematical forms."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Elxsis works at the intersection of computation and scientific imagination - developing moving image work and high-resolution stills derived from mathematical systems. The studio treats models, simulations, and physical equations as raw material, rendering invisible processes as visual experiences.
              </p>
              <p>
                Work is designed for multiple formats: seamless loops for gallery screens or projection, and still plates for large-format print up to 60 inches at 300 DPI.
              </p>
            </div>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="video" />

        <ImageRow
          images={[
            { src: "/images/elxsis/FinalLorenz200.png", alt: "Lorenz attractor variation 1" },
            { src: "/images/elxsis/FinalLorenz400.png", alt: "Lorenz attractor variation 2" }
          ]}
          aspectRatio="square"
        />

        {/* Selected Work */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
              {selectedWork.map((work, index) => (
                <div key={index} className="bg-black/5 rounded-lg p-6">
                  <p className="font-mono text-sm text-pink-500 mb-2">{work.number}</p>
                  <h3 className="text-lg font-bold text-black mb-2">{work.title}</h3>
                  <p className="text-sm text-black/70 leading-relaxed">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ImageRow
          images={[{ src: "/images/elxsis/gaia_hr_setC_full_hex_full_hex_wide_2400x1350.webp", alt: "Gaia star catalog - wide view" }]}
          aspectRatio="wide"
        />

        <ImageRow
          images={[
            { src: "/images/elxsis/gaia_points_full_square_2000x2000.png", alt: "Gaia star catalog points" },
            { src: "/images/elxsis/elxsis_hydrogen_5pz_4096px_20251226_181325.png", alt: "Hydrogen orbital visualization" }
          ]}
          aspectRatio="square"
        />

        {/* Technical Approach */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Technical Approach</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="py-3 font-mono text-black/50 w-32">Stage</td>
                    <td className="py-3 font-mono text-black/50">Tools</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Compute</td>
                    <td className="py-3 text-black">NumPy/SciPy, RK4 integration for stability in chaotic systems, custom physical equation implementations</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Render</td>
                    <td className="py-3 text-black">Matplotlib for 2D with custom colormaps; Blender Cycles for 3D path-traced animation</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Export</td>
                    <td className="py-3 text-black">Multiple formats (PNG, TIFF, SVG, PDF), JSON parameter snapshots for reproducibility</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/70">Encode</td>
                    <td className="py-3 text-black">FFmpeg with careful attention to seamless looping</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-black/60 mt-6">
              Cloud GPU resources (RunPod) used for computationally intensive renders.
            </p>
          </div>
        </section>

        <ImageRow
          images={[
            { src: "/images/elxsis/Weyl-coxeter_plot_17_30inch_0p2mm__E8_rnd_s0_d_anti_all_ec-ang_g2.3_tw0_rings0_keep1_762x762mm_300dpi.webp", alt: "Weyl-Coxeter E8 visualization" },
            { src: "/images/elxsis/WeylSymmetries-002p2-coxeter_plot_16_white_50inch_1mm__E8_rnd_s0_d_anti_all_ec-ang_g0.2_tw0_rings0_keep1_762x762mm_300dpi.webp", alt: "Weyl symmetries E8" }
          ]}
          aspectRatio="square"
        />

        <ImageRow
          images={[
            { src: "/images/elxsis/elxsis_complex_Ripple_20251222_151640.png", alt: "Complex function - Ripple" },
            { src: "/images/elxsis/elxsis_complex_sinz²_20251222_151314.png", alt: "Complex function - sin(z squared)" }
          ]}
          aspectRatio="square"
        />

        <ImageRow
          images={[
            { src: "/images/elxsis/elxsis_complex_Swirl_20251222_151426.png", alt: "Complex function - Swirl" },
            { src: "/images/elxsis/elxsis_complex_Vortex_20251222_151524.png", alt: "Complex function - Vortex" }
          ]}
          aspectRatio="square"
        />

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
