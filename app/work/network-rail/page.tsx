import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CaseStudyHero,
  CaseStudyMeta,
  ImageSlideshow,
  ContentSection,
  CardGrid,
  ImageRow
} from "../../components/case-study";

export default function NetworkRailProject() {
  const metaItems = [
    { label: "Role", value: "Senior Designer at Spaceagency" },
    { label: "Date", value: "2020" },
    { label: "Client", value: "Network Rail (with Weston Williamson + Partners)" }
  ];

  const designCriteria = [
    {
      number: "01",
      title: "ISO Adherence",
      description: "The ISO 7001 standard represents decades of international testing. Rather than reinvent established conventions, we worked closely with ISO pictograms as a foundation - familiar to travellers worldwide."
    },
    {
      number: "02",
      title: "Typographic Connection",
      description: "The pictograms sit alongside Rail Alphabet 2 by Margaret Calvert and Henrik Kubel. We extracted formal elements from the letterforms and applied them across the icon set."
    },
    {
      number: "03",
      title: "Modern Content",
      description: "Existing pictograms contained anachronistic references. We updated icons like Lost Property - replacing the umbrella with a wheeled suitcase, phone, and keys."
    },
    {
      number: "04",
      title: "Cultural Accuracy",
      description: "The set references British identity: double-decker buses, black cab silhouettes, UK tram designs."
    }
  ];

  const heroSlides = [
    { src: "/images/network-rail/hero1.jpg", caption: "Network Rail Pictogram System" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Network Rail Pictograms"
          tagline="A comprehensive pictogram system for UK rail wayfinding - balancing ISO clarity with British character."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Led the redesign of Network Rail's pictogram system while at Spaceagency, working alongside Weston Williamson + Partners. The brief was to create a comprehensive set of pictograms for UK station wayfinding that would work across Network Rail's managed stations - from historic Victorian termini to modern transport hubs.
              </p>
              <p>
                The project involved extensive stakeholder consultation, including sessions with the Built Environment Access Panel (BEAP) to ensure accessibility across diverse user needs.
              </p>
            </div>
          }
        />

        <ImageSlideshow slides={heroSlides} />

        <CardGrid title="Design Criteria" cards={designCriteria} columns={2} />

        <section className="mb-px grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="frame p-4 md:p-6">
            <img src="/images/network-rail/pictograms1.jpg" alt="Pictogram set 1" className="rounded-lg h-auto max-w-full" />
          </div>
          <div className="frame p-4 md:p-6">
            <img src="/images/network-rail/pictograms2.jpg" alt="Pictogram set 2" className="rounded-lg h-auto max-w-full" />
          </div>
        </section>

        {/* Design System */}
        <section className="mb-px">
          <div className="frame p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">Design System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
              <div className="bg-black/5 rounded-lg p-6">
                <p className="font-mono text-sm text-pink-500 mb-2">The "D" Shape</p>
                <p className="text-sm text-black/70 leading-relaxed">The signature element is derived from the bowl of Rail Alphabet's capital P. This form - a rectangle with one rounded end - appears across vehicles, cup handles, and luggage details.</p>
              </div>
              <div className="bg-black/5 rounded-lg p-6">
                <p className="font-mono text-sm text-pink-500 mb-2">Grid Construction</p>
                <p className="text-sm text-black/70 leading-relaxed">All pictograms are built on a 100x100 unit grid, with 2.5 units as the base module. Line weights, corner radii, and spacing are all multiples of 2.5.</p>
              </div>
              <div className="bg-black/5 rounded-lg p-6">
                <p className="font-mono text-sm text-pink-500 mb-2">Relative Scaling</p>
                <p className="text-sm text-black/70 leading-relaxed">Vehicles are scaled according to actual physical size - bus largest, taxi smallest. This aids recognition and avoids visual confusion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-px grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="frame p-4 md:p-6">
            <img src="/images/network-rail/pictograms3.jpg" alt="Pictograms in context" className="rounded-lg h-auto max-w-full" />
          </div>
          <div className="frame p-4 md:p-6">
            <img src="/images/network-rail/pictograms4.jpg" alt="Pictograms detail" className="rounded-lg h-auto max-w-full" />
          </div>
        </section>

        <ContentSection title="Stakeholder Feedback">
          <p>
            The BEAP panel review in January 2020 surfaced key concerns that shaped the final designs: strong preference for ISO-style pictograms due to universal familiarity, feedback that the proposed arrow was too thin, and that male/female pictograms needed clearer distinction.
          </p>
        </ContentSection>

        <ContentSection title="Outcome">
          <p>
            A complete pictogram system covering 85+ icons: transport modes, facilities, accessibility, wayfinding arrows, and operational signage. The system balances international legibility with British character, and connects visually to the Rail Alphabet typographic family.
          </p>
        </ContentSection>

        {/* Back Link */}
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
