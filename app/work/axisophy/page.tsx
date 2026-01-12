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
    { label: "Role", value: "Founder" },
    { label: "Date", value: "2020—present" },
    { label: "Link", value: "axisophy.com", href: "https://axisophy.com" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Axisophy"
          tagline="Data visualisation prints — the art of intelligent data."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Axisophy is a data visualisation print studio, transforming complex datasets into museum-grade prints. Mathematical structures, geological timescales, phylogenetic trees, and computational art — rendered with obsessive attention to accuracy and aesthetic quality.
              </p>
              <p>
                Each print begins with real data: astronomical catalogues, evolutionary trees, mathematical constants. The challenge is finding visual forms that honour the data's inherent structure while creating something genuinely beautiful to live with.
              </p>
            </div>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" placeholder="Axisophy prints" />

        <ImageRow
          images={[
            { alt: "Print collection", placeholder: "Print collection overview" },
            { alt: "Print detail", placeholder: "Print detail" }
          ]}
          aspectRatio="video"
        />

        <ContentSection title="The Collection" subtitle="Mathematical Forms" accentSubtitle>
          <div className="space-y-4">
            <p>
              Visualisations of mathematical constants, prime distributions, and abstract structures. The golden ratio rendered as nested rectangles. Pi's digits mapped to colour. The Mandelbrot set at print-resolution detail.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="The Collection" subtitle="Geological Time" accentSubtitle>
          <div className="space-y-4">
            <p>
              The 4.5 billion year history of Earth compressed into a single visual timeline. Each geological period, mass extinction, and evolutionary milestone plotted with accurate relative durations — making deep time tangible.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="The Collection" subtitle="Evolutionary Trees" accentSubtitle>
          <div className="space-y-4">
            <p>
              Phylogenetic trees showing the relationships between species — from the tree of life spanning all domains to focused studies of specific lineages. Each branch point backed by molecular and fossil evidence.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[{ alt: "Featured prints", placeholder: "Featured prints" }]}
          aspectRatio="wide"
        />

        <ContentSection title="Press">
          <div className="space-y-4">
            <p>
              Featured in The Guardian, Elle Decoration, and The Times. Selected for the Design Museum Shop and stockists across Europe and North America.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Production">
          <div className="space-y-4">
            <p>
              All prints are produced in the UK on archival paper using museum-grade giclée printing. Each print is individually inspected before shipping in custom protective packaging.
            </p>
          </div>
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
