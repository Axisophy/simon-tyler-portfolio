import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Contact Header */}
        <section className="pt-[100px] mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 font-display">
            Get in Touch
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Currently seeking design roles. Open to product design, design systems,
            and data visualisation opportunities.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mb-16">
          <div className="frame p-4 md:p-6">
            <h2 className="font-mono text-xs text-black/40 mb-4">EMAIL</h2>
            <a
              href="mailto:thesimontyler@gmail.com"
              className="text-xl md:text-2xl text-pink-500 hover:opacity-70 transition-opacity font-semibold"
            >
              thesimontyler@gmail.com
            </a>
          </div>
        </section>

        {/* Projects Links */}
        <section className="mb-16">
          <h2 className="font-mono text-xs text-white/40 mb-6">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
            <a
              href="https://mxwll.io"
              target="_blank"
              rel="noopener"
              className="frame p-4 md:p-6 transition-all group"
            >
              <p className="text-black font-semibold group-hover:text-pink-500 transition-colors">Mxwll →</p>
              <p className="text-sm text-black/50">Scientific data lab</p>
            </a>
            <a
              href="https://elxsis.com"
              target="_blank"
              rel="noopener"
              className="frame p-4 md:p-6 transition-all group"
            >
              <p className="text-black font-semibold group-hover:text-pink-500 transition-colors">Elxsis →</p>
              <p className="text-sm text-black/50">Computational art</p>
            </a>
            <a
              href="https://axisophy.com"
              target="_blank"
              rel="noopener"
              className="frame p-4 md:p-6 transition-all group"
            >
              <p className="text-black font-semibold group-hover:text-pink-500 transition-colors">Axisophy →</p>
              <p className="text-sm text-black/50">Data viz prints</p>
            </a>
            <a
              href="https://withabang.co"
              target="_blank"
              rel="noopener"
              className="frame p-4 md:p-6 transition-all group"
            >
              <p className="text-black font-semibold group-hover:text-pink-500 transition-colors">With a Bang →</p>
              <p className="text-sm text-black/50">Textiles & homewares</p>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
