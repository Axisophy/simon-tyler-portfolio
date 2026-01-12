interface ImageItem {
  src?: string;
  alt: string;
  placeholder?: string;
}

interface ImageRowProps {
  images: ImageItem[];
  height?: number;
}

export default function ImageRow({ images, height = 300 }: ImageRowProps) {
  return (
    <section className="mb-px">
      <div className="flex flex-wrap gap-px">
        {images.map((image, index) => (
          <div key={index} className="frame-dark overflow-hidden w-fit">
            {image.src ? (
              <img
                src={image.src}
                alt={image.alt}
                className="block"
                style={{ height: `${height}px`, width: 'auto' }}
              />
            ) : (
              <div
                className="flex items-center justify-center bg-white/5"
                style={{ height: `${height}px`, width: '400px' }}
              >
                <p className="font-mono text-xs text-white/30">{image.placeholder || image.alt}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
