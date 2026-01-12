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
    { label: "Date", value: "2024—2025" },
    { label: "Link", value: "elxsis.com", href: "https://elxsis.com" }
  ];

  const heroSlides = [
    { src: "/images/elxsis/FinalLorenz1.png", caption: "Lorenz attractor visualization" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Elxsis"
          tagline="Computational art studio exploring dynamical systems, astrophysical data, and emergent forms."
        />

        <CaseStudyMeta items={metaItems} />

        <ImageSlideshow slides={heroSlides} aspectRatio="video" />

        <ContentSection title="Overview">
          <div className="space-y-4">
            <p>
              Elxsis is a computational art practice exploring the visual language of mathematics, physics, and astronomy. Each piece begins with real scientific data or mathematical systems, transformed through code into visual forms that reveal hidden structures and patterns.
            </p>
            <p>
              The work spans strange attractors, stellar catalogues, quantum orbital structures, and abstract mathematical symmetries — all rendered with obsessive attention to both scientific accuracy and aesthetic quality.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Strange Attractors" subtitle="Lorenz System" accentSubtitle>
          <div className="space-y-4">
            <p>
              The Lorenz attractor — the canonical example of deterministic chaos — rendered with millions of trajectory points. Each visualisation captures the system's sensitive dependence on initial conditions while revealing the beautiful structure underlying apparent randomness.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/elxsis/FinalLorenz200.png", alt: "Lorenz attractor variation 1" },
            { src: "/images/elxsis/FinalLorenz400.png", alt: "Lorenz attractor variation 2" }
          ]}
          aspectRatio="square"
        />

        <ContentSection title="Astrophysical Data" subtitle="Gaia Star Catalogue" accentSubtitle>
          <div className="space-y-4">
            <p>
              Visualisations built from ESA's Gaia mission data — the most detailed 3D map of our galaxy ever created. Over a billion stars plotted by position, brightness, colour, and motion, revealing the structure of the Milky Way.
            </p>
          </div>
        </ContentSection>

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

        <ContentSection title="Mathematical Symmetry" subtitle="Weyl Groups & E8" accentSubtitle>
          <div className="space-y-4">
            <p>
              Visualisations of exceptional Lie group structures — the mathematical objects underlying fundamental physics. The E8 root system, projected and rendered to reveal its extraordinary 248-dimensional symmetry.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/elxsis/Weyl-coxeter_plot_17_30inch_0p2mm__E8_rnd_s0_d_anti_all_ec-ang_g2.3_tw0_rings0_keep1_762x762mm_300dpi.webp", alt: "Weyl-Coxeter E8 visualization" },
            { src: "/images/elxsis/WeylSymmetries-002p2-coxeter_plot_16_white_50inch_1mm__E8_rnd_s0_d_anti_all_ec-ang_g0.2_tw0_rings0_keep1_762x762mm_300dpi.webp", alt: "Weyl symmetries E8" }
          ]}
          aspectRatio="square"
        />

        <ContentSection title="Complex Functions" subtitle="Domain Colouring" accentSubtitle>
          <div className="space-y-4">
            <p>
              Complex-valued functions visualised through domain colouring — mapping the complex plane to colour space to reveal poles, zeros, and the intricate behaviour of mathematical functions.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/elxsis/elxsis_complex_Ripple_20251222_151640.png", alt: "Complex function - Ripple" },
            { src: "/images/elxsis/elxsis_complex_sinz²_20251222_151314.png", alt: "Complex function - sin(z²)" }
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
