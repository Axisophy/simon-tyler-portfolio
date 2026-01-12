interface Card {
  number: string;
  title: string;
  description: string;
}

interface CardGridProps {
  title: string;
  cards: Card[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ title, cards, columns = 2 }: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="mb-px">
      <div className="frame p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-6 font-display">{title}</h2>
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4`}>
          {cards.map((card, index) => (
            <div key={index} className="bg-black/5 rounded-lg p-6">
              <p className="font-mono text-sm text-pink-500 mb-2">{card.number}</p>
              <h3 className="text-lg font-bold text-black mb-2">{card.title}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
