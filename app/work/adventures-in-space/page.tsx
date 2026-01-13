import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function AdventuresInSpaceProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2018" },
    { label: "Publisher", value: "Pavilion" }
  ];

  const heroSlides = [
    { src: "/images/adventuresinspace/space-cover.jpg", caption: "Adventures in Space book cover" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Adventures in Space"
          tagline="An illustrated guide to space exploration and astronomy."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Adventures in Space is an illustrated guide to space exploration and astronomy, taking readers on a journey from Earth orbit to the edge of the observable universe. Bold illustrations bring the wonders of space to life for young readers. Published by Pavilion.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} />

        <section className="mb-px grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="frame p-4 md:p-6">
            <img src="/images/adventuresinspace/space2.jpg" alt="Adventures in Space spread" className="rounded-lg h-auto max-w-full" />
          </div>
          <div className="frame p-4 md:p-6">
            <img src="/images/adventuresinspace/space3.jpg" alt="Adventures in Space spread" className="rounded-lg h-auto max-w-full" />
          </div>
        </section>

        <section className="mb-px grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="frame p-4 md:p-6">
            <img src="/images/adventuresinspace/space4.jpg" alt="Adventures in Space spread" className="rounded-lg h-auto max-w-full" />
          </div>
          <div className="frame p-4 md:p-6">
            <img src="/images/adventuresinspace/space5.jpg" alt="Adventures in Space spread" className="rounded-lg h-auto max-w-full" />
          </div>
        </section>

        <ContentSection title="The Book">
          <p>
            Adventures in Space is an illustrated guide to space exploration and astronomy, taking readers on a journey from Earth orbit to the edge of the observable universe. Bold illustrations bring the wonders of space to life for young readers.
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
