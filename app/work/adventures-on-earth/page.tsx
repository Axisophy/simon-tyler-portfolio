import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function AdventuresOnEarthProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2019" },
    { label: "Publisher", value: "Pavilion" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Adventures on Earth"
          tagline="Exploration of Earth's extreme environments - polar regions, volcanoes, mountains, oceans, deserts."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Adventures on Earth explores our planet's most extreme environments - from the frozen polar regions to erupting volcanoes, towering mountain peaks to the deepest ocean trenches, and scorching deserts. Bold illustrations bring these incredible landscapes to life. Published by Pavilion.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" placeholder="Adventures on Earth book cover" />

        <ContentSection title="The Book">
          <p>
            Case study content coming soon.
          </p>
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
