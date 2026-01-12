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

export default function IWMDuxfordProject() {
  const metaItems = [
    { label: "Role", value: "Senior Designer" },
    { label: "Date", value: "2020" },
    { label: "Client", value: "Imperial War Museum (with Spaceagency)" }
  ];

  const heroSlides = [
    { src: "/images/IWM-duxford/Duxford1.jpg", caption: "IWM Duxford wayfinding signage" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="IWM Duxford"
          tagline="Wayfinding and identity signage for the Imperial War Museum's historic Duxford Airfield."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Wayfinding and identity signage for the Imperial War Museum's historic Duxford Airfield. Working with Spaceagency, I contributed to the design of a comprehensive signage system that respects the site's aviation heritage while providing clear navigation for visitors.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford2.jpeg", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford3.webp", alt: "Duxford signage" }
          ]}
          aspectRatio="video"
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford4.webp", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford5.jpeg", alt: "Duxford signage" }
          ]}
          aspectRatio="video"
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford6.jpg", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford7.webp", alt: "Duxford signage" }
          ]}
          aspectRatio="video"
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford8.webp", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford9.jpg", alt: "Duxford signage" }
          ]}
          aspectRatio="video"
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford10.webp", alt: "Duxford signage" }
          ]}
          aspectRatio="wide"
        />

        <ContentSection title="The Project">
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
