import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function MagnificentMachinesProject() {
  const metaItems = [
    { label: "Role", value: "Illustrator" },
    { label: "Date", value: "2020" },
    { label: "Publisher", value: "Faber & Faber" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

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

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" placeholder="Magnificent Machines book cover" />

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
