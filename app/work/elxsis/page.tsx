import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ElxsisProject() {
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
                Elxsis is a computational art studio exploring dynamical systems, astrophysical data, and emergent mathematical forms.
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
                <span className="text-black font-medium">Founder, Creative Director</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Dates</span>
                <span className="text-black font-medium">2024—2025</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Link</span>
                <a href="https://elxsis.com" target="_blank" rel="noopener" className="text-pink-500 hover:opacity-70 transition-opacity font-medium">
                  elxsis.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image - Lorenz */}
        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-video">
              <Image
                src="/images/elxsis/FinalLorenz1.png"
                alt="Lorenz attractor visualization"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Lorenz variations - 2 up */}
        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/FinalLorenz200.png"
                  alt="Lorenz attractor variation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/FinalLorenz400.png"
                  alt="Lorenz attractor variation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gaia - wide */}
        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/elxsis/gaia_hr_setC_full_hex_full_hex_wide_2400x1350.webp"
                alt="Gaia star catalog visualization"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Gaia square + Hydrogen */}
        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/gaia_points_full_square_2000x2000.png"
                  alt="Gaia star catalog points"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/elxsis_hydrogen_5pz_4096px_20251226_181325.png"
                  alt="Hydrogen orbital visualization"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weyl symmetries - 2 up */}
        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/Weyl-coxeter_plot_17_30inch_0p2mm__E8_rnd_s0_d_anti_all_ec-ang_g2.3_tw0_rings0_keep1_762x762mm_300dpi.webp"
                  alt="Weyl-Coxeter E8 symmetry visualization"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/WeylSymmetries-002p2-coxeter_plot_16_white_50inch_1mm__E8_rnd_s0_d_anti_all_ec-ang_g0.2_tw0_rings0_keep1_762x762mm_300dpi.webp"
                  alt="Weyl symmetries E8 visualization"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Complex functions - 2x2 grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/elxsis_complex_Ripple_20251222_151640.png"
                  alt="Complex function - Ripple"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/elxsis_complex_sinz²_20251222_151314.png"
                  alt="Complex function - sin(z²)"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/elxsis_complex_Swirl_20251222_151426.png"
                  alt="Complex function - Swirl"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/elxsis/elxsis_complex_Vortex_20251222_151524.png"
                  alt="Complex function - Vortex"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
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
