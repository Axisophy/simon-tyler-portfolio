import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventures on Earth",
  description: "Adventures on Earth explores our planet's extreme environments - polar regions, volcanoes, mountains, oceans, and deserts. Published by Pavilion.",
  alternates: {
    canonical: "https://simontyler.co.uk/work/adventures-on-earth"
  },
  openGraph: {
    title: "Adventures on Earth | Simon Tyler",
    description: "Adventures on Earth explores our planet's extreme environments - polar regions, volcanoes, mountains, oceans, and deserts. Published by Pavilion.",
    url: "https://simontyler.co.uk/work/adventures-on-earth",
    type: "article",
    images: [{ url: "/images/adventuresonearth/adventures-earth-cover.jpg" }]
  }
};

export default function AdventuresOnEarthProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2019" },
    { label: "Publisher", value: "Pavilion" }
  ];

  const heroSlides = [
    { src: "/images/adventuresonearth/adventures-earth-cover.jpg", caption: "Adventures on Earth book cover" }
  ];

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

        <ImageSlideshow slides={heroSlides} />

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
