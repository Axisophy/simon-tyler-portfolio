import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  subtitle?: string;
  accentSubtitle?: boolean;
}

export default function ContentSection({
  title,
  children,
  subtitle,
  accentSubtitle = false
}: ContentSectionProps) {
  return (
    <section className="mb-px">
      <div className="frame p-8 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 font-display">{title}</h2>
        {subtitle && (
          <h3 className={`text-lg font-semibold mb-4 ${accentSubtitle ? 'text-pink-500' : 'text-black/70'}`}>
            {subtitle}
          </h3>
        )}
        <div className="text-base text-black/80 leading-relaxed max-w-4xl">
          {children}
        </div>
      </div>
    </section>
  );
}
