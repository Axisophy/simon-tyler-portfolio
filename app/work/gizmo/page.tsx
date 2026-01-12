import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
} from "../../components/case-study";

export default function GizmoProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator, Designer" },
    { label: "Date", value: "2026" },
    { label: "Publisher", value: "Laurence King" }
  ];

  // Image data with aspect ratios
  // Book cover is roughly 3:4 (portrait), spreads are 4:3 (landscape)
  const images = [
    { src: "/images/gizmo/Gizmo4.3 front.jpeg", alt: "Gizmo - book cover", caption: "Gizmo - book cover", aspect: "3/4" },
    { src: "/images/gizmo/gizmo-01.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-02.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-03.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-04.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-05.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-06.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-07.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-08.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-09.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-10.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-11.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-12.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-13.png", alt: "Gizmo spread", aspect: "4/3" },
    { src: "/images/gizmo/gizmo-14.png", alt: "Gizmo spread", aspect: "4/3" },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Gizmo"
          tagline="The retro-tech we loved and lost — a comprehensive survey of electronic gadgets."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Gizmo is a comprehensive illustrated survey of the electronic devices that defined generations — from the Walkman to the Game Boy, the Polaroid to the Palm Pilot. Each gadget is rendered in detailed technical illustration, accompanied by stories of invention, cultural impact, and eventual obsolescence.
              </p>
              <p>
                The book celebrates the physical, tactile nature of technology before everything became a rectangle of glass — the satisfying click of buttons, the whir of motors, the warm glow of CRT screens.
              </p>
            </div>
          }
        />

        {/* Images in native aspect ratio frames with consistent height */}
        <section className="mb-px">
          <div className="flex flex-wrap gap-px">
            {images.map((img, index) => (
              <div key={index} className="flex flex-col gap-px" style={{ height: '400px' }}>
                {/* Image frame */}
                <div
                  className="frame flex-1 flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: img.aspect }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Caption frame - only show if there's a caption */}
                {img.caption && (
                  <div className="frame px-4 py-3" style={{ aspectRatio: img.aspect, height: 'auto', flex: 'none' }}>
                    <p className="font-mono text-xs text-black/50">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

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
