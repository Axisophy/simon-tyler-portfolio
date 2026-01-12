import Link from "next/link";

export default function Work() {
  const projects = [
    {
      slug: "maxwell",
      title: "Maxwell",
      year: "2024-25",
      description: "End-to-end product design for a scientific data laboratory",
      tags: ["UI/UX", "Product Design", "Data Viz"],
      category: "Digital Product"
    },
    {
      slug: "elxsis",
      title: "Elxsis",
      year: "2024-25",
      description: "Computational art studio exploring mathematical forms",
      tags: ["Generative Art", "Creative Direction", "Development"],
      category: "Digital Product"
    },
    {
      slug: "network-rail",
      title: "Network Rail Pictograms",
      year: "2020",
      description: "Comprehensive pictogram system for UK rail wayfinding",
      tags: ["Design Systems", "Iconography", "Wayfinding"],
      category: "Design Systems"
    },
    {
      slug: "axisophy",
      title: "Axisophy",
      year: "2020-25",
      description: "Data visualization print studio",
      tags: ["Product Design", "Data Viz", "Art Direction"],
      category: "Product Design"
    },
    {
      slug: "with-a-bang",
      title: "With a Bang",
      year: "2023-25",
      description: "Design-led textiles and homewares business",
      tags: ["Product Design", "Branding", "Textiles"],
      category: "Product Design"
    },
    {
      slug: "books",
      title: "Books & Illustration",
      year: "2015-25",
      description: "Published works for children and adults",
      tags: ["Editorial", "Illustration", "Publishing"],
      category: "Editorial"
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="technical-border m-4 md:m-6 lg:m-8 min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)] p-6 md:p-12 lg:p-16 grid-pattern">
        
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="flex justify-between items-start">
            <Link href="/" className="hover:opacity-60 transition-opacity">
              <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Simon Tyler</h1>
              <p className="font-mono text-xs text-white/40">
                51.4416°N, 0.5694°E
              </p>
            </Link>
            <nav className="flex gap-6 font-mono text-xs">
              <Link href="/work" className="text-accent">
                Work
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Selected Work</h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Projects spanning digital product design, design systems, data visualization, and physical products.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link 
                key={project.slug}
                href={`/work/${project.slug}`}
                className="technical-border p-8 hover:border-accent/50 transition-all group"
              >
                <div className="aspect-video bg-white/5 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white/20">
                    [{project.title}]
                  </div>
                </div>
                <div className="mb-3">
                  <span className="font-mono text-xs text-accent">{project.category}</span>
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-white/40">{project.year}</span>
                </div>
                <p className="text-white/60 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-1 bg-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-white/40">
              © 2026 Simon Tyler
            </p>
            <div className="flex gap-6 font-mono text-xs text-white/40">
              <a href="mailto:simon@example.com" className="hover:text-accent transition-colors">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
