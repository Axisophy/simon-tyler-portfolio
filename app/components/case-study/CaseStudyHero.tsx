interface CaseStudyHeroProps {
  title: string;
  tagline: string;
}

export default function CaseStudyHero({ title, tagline }: CaseStudyHeroProps) {
  return (
    <section className="pt-[100px] mb-8">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-4">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-white/60 max-w-3xl">
        {tagline}
      </p>
    </section>
  );
}
