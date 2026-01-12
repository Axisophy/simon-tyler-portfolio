interface ImageItem {
  src?: string;
  alt: string;
  placeholder?: string;
}

interface ImageRowProps {
  images: ImageItem[];
}

export default function ImageRow({ images }: ImageRowProps) {
  return (
    <section className="mb-px">
      <div className="frame p-4 md:p-6">
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            image.src ? (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-lg h-auto max-w-full"
              />
            ) : (
              <div
                key={index}
                className="flex items-center justify-center bg-black/5 rounded-lg h-[200px] w-[300px]"
              >
                <p className="font-mono text-xs text-black/30">{image.placeholder || image.alt}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
