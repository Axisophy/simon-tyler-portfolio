import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function WithABangProject() {
  const metaItems = [
    { label: "Role", value: "Founder, Creative Director" },
    { label: "Date", value: "2023-present" },
    { label: "Link", value: "withabang.co", href: "https://withabang.co" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="With a Bang"
          tagline="Design-led textiles and homewares - turning rigorous graphic ideas into beautifully made everyday objects."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              With a Bang is a design-led textiles and homewares studio, focused on turning rigorous graphic ideas into beautifully made everyday objects. The work sits somewhere between modernist pattern systems and a slightly techno-futurist sensibility - bold, graphic, and intentional, but always warm enough to live with.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" placeholder="With a Bang hero image" />

        <ContentSection title="The Work">
          <div className="space-y-4">
            <p>
              At the core is an obsession with repeat structures - grids, dots, waves, and engineered irregularities - developed like a family of "instruments" rather than one-off prints. Each design is treated as a system: scalable, repeatable, and adaptable across products and colourways, with names and variants that behave like a coherent catalogue.
            </p>
            <p>
              The aim is to make patterns that feel considered and contemporary without being trend-led - things you can return to for years, the way you might return to a favourite piece of industrial design.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="The Business">
          <div className="space-y-4">
            <p>
              Alongside the creative work, With a Bang is a serious commercial build: sourcing and supplier relationships, pricing and margins, launch planning, logistics, and the foundations for sustainable growth.
            </p>
            <p>
              The brand is designed to expand over time - starting with bedding and moving into a wider homewares world - while keeping a consistent, high-integrity point of view about design, materials, and how products should feel in the hand and in the home.
            </p>
          </div>
        </ContentSection>

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
