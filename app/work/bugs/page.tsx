import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function BugsProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2017" },
    { label: "Publisher", value: "Pavilion" }
  ];

  const heroSlides = [
    { src: "/images/bugs/bugs-cover.jpg", caption: "Bugs book cover" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Bugs"
          tagline="An illustrated compendium of 50+ insects with bold graphic illustrations."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Bugs is an illustrated compendium featuring over 50 insects rendered in bold, graphic illustration style. Each spread combines detailed visual studies with fascinating facts about insect biology, behaviour, and habitats. Published by Pavilion.
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
