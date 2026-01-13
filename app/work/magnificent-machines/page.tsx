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
  title: "The World's Most Magnificent Machines",
  description: "Illustrations for David Long's book featuring 32 remarkable machines from history - steam engines to space rockets. Published by Faber & Faber.",
  alternates: {
    canonical: "https://simontyler.co.uk/work/magnificent-machines"
  },
  openGraph: {
    title: "Magnificent Machines | Simon Tyler",
    description: "Illustrations for David Long's book featuring 32 remarkable machines from history - steam engines to space rockets. Published by Faber & Faber.",
    url: "https://simontyler.co.uk/work/magnificent-machines",
    type: "article",
    images: [{ url: "/images/magnificentmachines/magnificent-machines-cover.jpg" }]
  }
};

export default function MagnificentMachinesProject() {
  const metaItems = [
    { label: "Role", value: "Illustrator" },
    { label: "Date", value: "2020" },
    { label: "Publisher", value: "Faber & Faber" }
  ];

  const heroSlides = [
    { src: "/images/magnificentmachines/magnificent-machines-cover.jpg", caption: "Magnificent Machines book cover" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="The World's Most Magnificent Machines"
          tagline="Illustrations for David Long's book on 32 magnificent machines from history."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              The World's Most Magnificent Machines features illustrations for David Long's exploration of 32 remarkable machines from history - from early steam engines to space rockets, submarines to supersonic aircraft. Each machine is brought to life through detailed technical illustration. Published by Faber & Faber.
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
