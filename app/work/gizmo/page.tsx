import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GizmoProject() {
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
                Gizmo is a comprehensive illustrated survey of retro technology - the gadgets we loved and lost.
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
                <span className="text-black font-medium">Author, Illustrator, Designer</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Date</span>
                <span className="text-black font-medium">2026</span>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40 block mb-1">Publisher</span>
                <span className="text-black font-medium">Laurence King</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/gizmo/gizmo-01.png"
                alt="Gizmo - retro technology illustrations"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Spreads - 2 up grids */}
        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-02.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-03.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-04.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-05.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-06.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-07.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-08.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-09.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-10.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-11.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-12.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gizmo/gizmo-13.png"
                  alt="Gizmo spread"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final spread */}
        <section className="mb-16">
          <div className="frame p-4">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/gizmo/gizmo-14.png"
                alt="Gizmo spread"
                fill
                className="object-cover rounded-lg"
              />
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
