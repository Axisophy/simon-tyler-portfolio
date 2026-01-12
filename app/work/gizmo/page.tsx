import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection,
  ImageRow
} from "../../components/case-study";

export default function GizmoProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator, Designer" },
    { label: "Date", value: "2026" },
    { label: "Publisher", value: "Laurence King" }
  ];

  const heroSlides = [
    { src: "/images/gizmo/Gizmo4.3 front.jpeg", caption: "Gizmo - book cover" }
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

        <CaseStudyMeta items={metaItems} />

        <ImageSlideshow slides={heroSlides} aspectRatio="video" />

        <ContentSection title="Overview">
          <div className="space-y-4">
            <p>
              Gizmo is a comprehensive illustrated survey of the electronic devices that defined generations — from the Walkman to the Game Boy, the Polaroid to the Palm Pilot. Each gadget is rendered in detailed technical illustration, accompanied by stories of invention, cultural impact, and eventual obsolescence.
            </p>
            <p>
              The book celebrates the physical, tactile nature of technology before everything became a rectangle of glass — the satisfying click of buttons, the whir of motors, the warm glow of CRT screens.
            </p>
          </div>
        </ContentSection>

        {/* Book spreads with white background for full image display */}
        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src="/images/gizmo/gizmo-01.png"
                alt="Gizmo spread"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-02.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-03.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-04.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-05.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-06.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-07.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-08.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-09.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-10.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-11.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-12.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src="/images/gizmo/gizmo-13.png"
                  alt="Gizmo spread"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src="/images/gizmo/gizmo-14.png"
                alt="Gizmo spread"
                fill
                className="object-contain"
              />
            </div>
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
