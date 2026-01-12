import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NetworkRailProject() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Project Meta */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <div>
              <span className="font-mono text-xs text-white/30 block mb-1">Role</span>
              <span className="text-white/80">Senior Designer at Space Agency</span>
            </div>
            <div>
              <span className="font-mono text-xs text-white/30 block mb-1">Date</span>
              <span className="text-white/80">2020</span>
            </div>
            <div>
              <span className="font-mono text-xs text-white/30 block mb-1">Client</span>
              <span className="text-white/80">Network Rail</span>
            </div>
          </div>
        </section>

        {/* Hero Section - White Frame */}
        <section className="mb-16 md:mb-24">
          <div className="frame p-8 md:p-12 pt-16 md:pt-20">
            <div className="max-w-[75%]">
              <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-[1.1] font-display">
                A comprehensive pictogram system for UK rail wayfinding - clear, consistent visual language across thousands of stations.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="frame p-4 overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/images/network-rail/hero1.jpg"
                alt="Network Rail Pictogram System"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold mb-6 font-display">Overview</h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Led the design of a comprehensive pictogram system for Network Rail's UK station wayfinding while at Space Agency. The system needed to work across diverse environments - from historic Victorian stations to modern transport hubs.
            </p>
            <p>
              The pictograms balance clarity and character, maintaining legibility at small sizes while conveying warmth and accessibility. Each icon follows strict geometric principles while avoiding the coldness of purely functional signage.
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="mb-16">
          <h2 className="font-mono text-xs text-white/40 mb-6">PICTOGRAM SYSTEM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/network-rail/pictograms1.jpg"
                  alt="Network Rail pictograms"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4">
              <div className="relative aspect-square">
                <Image
                  src="/images/network-rail/pictograms2.jpg"
                  alt="Network Rail pictograms"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="frame p-4 md:col-span-2">
              <div className="relative aspect-video">
                <Image
                  src="/images/network-rail/pictograms3.jpg"
                  alt="Network Rail pictograms in context"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="mb-12">
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
