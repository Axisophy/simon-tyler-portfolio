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
          <p className="text-lg text-white/60 max-w-2xl mb-8">
            Currently seeking design roles. Open to product design, design systems,
            and data visualisation opportunities.
          </p>
          <a
            href="mailto:thesimontyler@gmail.com"
            className="text-xl md:text-2xl text-pink-500 hover:opacity-70 transition-opacity font-semibold"
          >
            thesimontyler@gmail.com
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
