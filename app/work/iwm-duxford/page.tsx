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
    { label: "Role", value: "Project Leader at Spaceagency" },
    { label: "Date", value: "2020" },
    { label: "Client", value: "Imperial War Museum" }
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
          tagline="Wayfinding and identity signage for Europe's largest air museum."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              Led the team rebranding and redesigning the wayfinding for the Imperial War Museum at Duxford - the largest air museum in Europe.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} height={400} />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford2.jpeg", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford3.webp", alt: "Duxford signage" }
          ]}
          height={300}
        />

        <ContentSection title="The Work">
          <div className="space-y-4">
            <p>
              The project involved developing a colour-coded symbol identity and layout system for the large-scale navigational totems used across the huge Duxford site, providing directions between the various exhibition zones.
            </p>
            <p>
              I also designed a new pictogram set, specific signage layouts, and a series of supergraphics including large-format vinyl imagery and branding for the exterior of the visitor centre at the museum entrance.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford4.webp", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford5.jpeg", alt: "Duxford signage" }
          ]}
          height={300}
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford6.jpg", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford7.webp", alt: "Duxford signage" }
          ]}
          height={300}
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford8.webp", alt: "Duxford signage" },
            { src: "/images/IWM-duxford/Duxford9.jpg", alt: "Duxford signage" }
          ]}
          height={300}
        />

        <ImageRow
          images={[
            { src: "/images/IWM-duxford/Duxford10.webp", alt: "Duxford signage" }
          ]}
          height={350}
        />

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
