import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ContentSection
} from "../../components/case-study";

export default function GizmoProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2026" },
    { label: "Publisher", value: "Laurence King" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Gizmo"
          tagline="The retro-tech we loved and lost - a comprehensive illustrated survey of electronic gadgets."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Gizmo charts the evolution and genealogy of personal electronic devices, taking the reader on an illustrated journey through the amazing diversity of gadgets - classified by purpose and type, design, origins, colour and shape. The iconic, the frivolous, the utilitarian, and the unwanted inventions long consigned to the scrapheap.
            </p>
          }
        />

        {/* Book cover - same height as spreads below */}
        <section className="mb-px">
          <div className="frame p-4">
            <div className="relative aspect-[4/3] bg-white">
              <Image
                src="/images/gizmo/Gizmo4.3 front.jpeg"
                alt="Gizmo - book cover"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="mb-px">
          <div className="frame px-4 py-3">
            <p className="font-mono text-xs text-black/50">Gizmo - book cover</p>
          </div>
        </section>

        <ContentSection title="The Book">
          <div className="space-y-4">
            <p>
              We live in a world where many aspects of late twentieth century science fiction have become technological reality. As gadgets and technology have become more miniaturised, sleek and capable, so too has an appetite for the sort of quirky, retro tech that wistfully reminds us of earlier times.
            </p>
            <p>
              This book sets out to provide a comprehensive survey of electronic and time-saving gadgets and devices, their evolution and genealogy - revealing where they come from and how they developed. In charting the diverse spectrum of gizmos by type and purpose, it uncovers the sometimes unexpected connections between them.
            </p>
            <p>
              Finally, we discover how these technologies have become the nexus of our interaction with each other and the world around us - shaping creativity and culture, storing memories, helping, guiding and, increasingly, thinking for us.
            </p>
          </div>
        </ContentSection>

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

        {/* Details */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Details</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-mono text-xs text-black/50 mb-1">Pages</p>
                <p className="text-sm text-black">224</p>
              </div>
              <div>
                <p className="font-mono text-xs text-black/50 mb-1">Format</p>
                <p className="text-sm text-black">Hardback</p>
              </div>
              <div>
                <p className="font-mono text-xs text-black/50 mb-1">Publication</p>
                <p className="text-sm text-black">May 2026</p>
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
