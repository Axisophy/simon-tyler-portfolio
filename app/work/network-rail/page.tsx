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
    { label: "Role", value: "Senior Designer" },
    { label: "Date", value: "2020" },
    { label: "Client", value: "Network Rail (with Spaceagency + Weston Williamson)" }
  ];

  const designCriteria = [
    {
      number: "01",
      title: "ISO Compliance",
      description: "Meet ISO 7001 requirements for public information symbols while allowing for character and warmth beyond purely functional signage."
    },
    {
      number: "02",
      title: "Typographic Derivation",
      description: "Derive pictogram geometry from Network Rail's custom typeface, ensuring visual consistency between text and symbols across all touchpoints."
    },
    {
      number: "03",
      title: "Scale Flexibility",
      description: "Work at sizes from 12mm app icons to 2-metre platform signs. Maintain legibility and character at every scale without optical corrections breaking the system."
    },
    {
      number: "04",
      title: "British Character",
      description: "Balance international clarity with distinctly British character — warm, approachable, slightly rounded — reflecting the heritage of the rail network."
    }
  ];

  const heroSlides = [
    { src: "/images/network-rail/hero1.jpg", caption: "Network Rail Pictogram System" }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">

        <CaseStudyHero
          title="Network Rail Pictograms"
          tagline="A comprehensive pictogram system for UK rail wayfinding — balancing ISO clarity with British character."
        />

        <CaseStudyMeta
          items={metaItems}
          overview={
            <div className="space-y-4">
              <p>
                Network Rail operates over 2,500 stations across the UK, from Victorian termini to modern transport hubs. Each station requires clear, consistent wayfinding — but existing pictogram systems were fragmented, inconsistent, and often borrowed from other transport networks without adaptation.
              </p>
              <p>
                Working with Spaceagency and Weston Williamson, I led the design of a comprehensive pictogram system that would work across this diverse estate while maintaining a distinctly British character.
              </p>
            </div>
          }
        />

        <ImageSlideshow slides={heroSlides} aspectRatio="wide" />

        <CardGrid title="Design Criteria" cards={designCriteria} columns={2} />

        <ImageRow
          images={[{ alt: "Typography derivation diagram", placeholder: "Typography derivation diagram" }]}
          aspectRatio="wide"
        />

        <ContentSection title="Design System" subtitle="Grid & Construction" accentSubtitle>
          <div className="space-y-4">
            <p>
              Every pictogram is constructed on a consistent grid derived from the stroke weights and proportions of Network Rail's custom typeface. This ensures visual harmony between text and symbols at any scale.
            </p>
            <p>
              The grid accommodates three complexity levels: simple symbols (arrows, ticks) use quarter-grid positioning; standard symbols (facilities, transport modes) use eighth-grid; complex symbols (human figures, vehicles) use sixteenth-grid for finer detail.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { alt: "Grid construction", placeholder: "Grid overlay on pictograms" },
            { alt: "Complexity levels", placeholder: "Three complexity levels" }
          ]}
          aspectRatio="video"
        />

        <ContentSection title="Design System" subtitle="Human Figures" accentSubtitle>
          <div className="space-y-4">
            <p>
              Human figures follow a consistent 7-head proportion, with joints positioned at grid intersections. This allows for natural poses while maintaining systematic consistency. The figures are deliberately gender-neutral and avoid cultural specificity.
            </p>
            <p>
              Accessibility representations (wheelchair users, visual impairment, etc.) follow the same proportional system, ensuring they feel like natural parts of the family rather than afterthoughts.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Design System" subtitle="Vehicles & Objects" accentSubtitle>
          <div className="space-y-4">
            <p>
              Vehicles are rendered at consistent optical scales — a bus appears the same visual weight as a train, despite their different real-world sizes. This required careful calibration to ensure immediate recognition while maintaining system harmony.
            </p>
            <p>
              Objects follow a "recognition-first" principle: the most distinctive feature of each object is emphasised, even if this means departing from strict geometric accuracy.
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[{ alt: "Vehicle scaling comparison", placeholder: "Vehicle scaling comparison" }]}
          aspectRatio="wide"
        />

        <ContentSection title="Stakeholder Feedback">
          <div className="space-y-4">
            <p className="italic text-black/60">
              "The pictograms strike exactly the right balance — clear enough for international visitors, characterful enough to feel distinctly British. They work beautifully alongside our typeface."
            </p>
            <p className="text-sm text-black/50">
              — Network Rail Brand Team
            </p>
          </div>
        </ContentSection>

        <ImageRow
          images={[
            { src: "/images/network-rail/pictograms1.jpg", alt: "Pictogram set 1" },
            { src: "/images/network-rail/pictograms2.jpg", alt: "Pictogram set 2" }
          ]}
          aspectRatio="square"
        />

        <ImageRow
          images={[{ src: "/images/network-rail/pictograms3.jpg", alt: "Pictograms in context" }]}
          aspectRatio="wide"
        />

        <ContentSection title="Outcome">
          <div className="space-y-4">
            <p>
              The pictogram system is now being rolled out across Network Rail's managed stations, starting with major termini and working through the regional network. The system includes over 200 individual symbols covering facilities, transport connections, accessibility, safety, and wayfinding.
            </p>
            <p>
              The accompanying guidelines ensure consistent implementation by Network Rail's in-house teams and external suppliers, with clear rules for grid usage, colour application, and scale relationships.
            </p>
          </div>
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
