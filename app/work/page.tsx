import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Work() {
  const projects = [
    {
      slug: "mxwll",
      title: "Mxwll",
      year: "2024—25",
      description: "End-to-end product design for a scientific data laboratory",
      tags: ["Product Design", "UI/UX", "Data Visualisation", "React"],
      category: "Digital Product"
    },
    {
      slug: "elxsis",
      title: "Elxsis",
      year: "2024—25",
      description: "Computational art studio exploring mathematical forms",
      tags: ["Creative Direction", "Generative Art", "Python"],
      category: "Digital Product"
    },
    {
      slug: "network-rail",
      title: "Network Rail Pictograms",
      year: "2020",
      description: "Comprehensive pictogram system for UK rail wayfinding",
      tags: ["Pictograms", "Wayfinding", "Iconography", "Illustration"],
      category: "Design Systems"
    },
    {
      slug: "iwm-duxford",
      title: "IWM Duxford",
      year: "2020",
      description: "Wayfinding and identity signage for the Imperial War Museum's historic Duxford Airfield. At Space Agency.",
      tags: ["Wayfinding", "Identity", "Signage"],
      category: "Wayfinding"
    },
    {
      slug: "axisophy",
      title: "Axisophy",
      year: "2020—25",
      description: "Data visualisation print studio",
      tags: ["E-commerce", "Shopify", "Illustration", "Graphic Design"],
      category: "Product Design"
    },
    {
      slug: "with-a-bang",
      title: "With a Bang",
      year: "2023—25",
      description: "Design-led textiles and homewares business",
      tags: ["Product Design", "Branding", "Textiles"],
      category: "Product Design"
    },
    {
      slug: "gizmo",
      title: "Gizmo",
      year: "2026",
      description: "A comprehensive illustrated survey of retro technology - the gadgets we loved and lost. Published by Laurence King.",
      tags: ["Book", "Illustration", "Design", "Writing"],
      category: "Books"
    },
    {
      slug: "bugs",
      title: "Bugs",
      year: "2017",
      description: "Illustrated compendium of 50+ insects with bold graphic illustrations. Published by Pavilion.",
      tags: ["Book", "Illustration", "Writing"],
      category: "Books"
    },
    {
      slug: "adventures-in-space",
      title: "Adventures in Space",
      year: "2018",
      description: "Illustrated guide to space exploration and astronomy. Published by Pavilion.",
      tags: ["Book", "Illustration", "Writing"],
      category: "Books"
    },
    {
      slug: "adventures-on-earth",
      title: "Adventures on Earth",
      year: "2019",
      description: "Exploration of Earth's extreme environments - polar regions, volcanoes, mountains, oceans, deserts. Published by Pavilion.",
      tags: ["Book", "Illustration", "Writing"],
      category: "Books"
    },
    {
      slug: "emergency-vehicles",
      title: "Emergency Vehicles",
      year: "2020",
      description: "Technical illustrations of emergency vehicles from around the world. Published by Faber & Faber.",
      tags: ["Book", "Illustration", "Writing"],
      category: "Books"
    },
    {
      slug: "magnificent-machines",
      title: "The World's Most Magnificent Machines",
      year: "2020",
      description: "Illustrations for David Long's book on 32 magnificent machines from history. Published by Faber & Faber.",
      tags: ["Book", "Illustration"],
      category: "Books"
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Page Title */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-display">
            Selected Work
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Projects spanning digital product design, design systems, data visualisation, and publishing.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="frame p-4 md:p-6 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-xs text-pink-500 mb-2">{String(index + 1).padStart(2, '0')}</p>
                    <h2 className="text-2xl md:text-3xl font-medium text-black group-hover:text-pink-500 font-display transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-black/40">{project.year}</span>
                </div>

                <p className="text-black/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded text-black/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
