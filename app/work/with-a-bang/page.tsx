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
    { label: "Role", value: "Co-founder, Creative Director" },
    { label: "Date", value: "2023—present" },
    { label: "Link", value: "withabang.co", href: "https://withabang.co" }
  ];

  const heroSlides: { src: string; caption: string }[] = [];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="With a Bang"
          tagline="Design-led textiles and homewares — bold patterns for everyday living."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <p>
              With a Bang is a design-led textiles and homewares business creating bold, graphic patterns for cushions, throws, and home accessories. Every product is designed in-house and manufactured in the UK.
            </p>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" placeholder="With a Bang hero image" />

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
