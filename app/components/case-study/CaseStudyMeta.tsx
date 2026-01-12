interface MetaItem {
  label: string;
  value: string;
  href?: string;
}

interface CaseStudyMetaProps {
  items: MetaItem[];
}

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <section className="mb-px">
      <div className="frame p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index}>
              <span className="font-mono text-xs text-black/50 block mb-1">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-pink-500 hover:opacity-70 transition-opacity font-medium"
                >
                  {item.value} →
                </a>
              ) : (
                <span className="text-sm text-black font-medium">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
