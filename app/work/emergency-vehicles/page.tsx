import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection
} from "../../components/case-study";

export default function EmergencyVehiclesProject() {
  const metaItems = [
    { label: "Role", value: "Author, Illustrator" },
    { label: "Date", value: "2020" },
    { label: "Publisher", value: "Faber & Faber" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Emergency Vehicles"
          tagline="Technical illustrations of emergency vehicles from around the world."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Emergency Vehicles features detailed technical illustrations of emergency vehicles from around the world - fire engines, ambulances, police cars, rescue helicopters, and more. Each vehicle is rendered with precision and accompanied by information about its design and function. Published by Faber & Faber.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} height={400} placeholder="Emergency Vehicles book cover" />

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
