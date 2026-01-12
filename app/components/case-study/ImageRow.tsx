import Image from "next/image";

interface ImageItem {
  src?: string;
  alt: string;
  placeholder?: string;
}

interface ImageRowProps {
  images: ImageItem[];
  aspectRatio?: "video" | "wide" | "square" | "4/3";
}

export default function ImageRow({ images, aspectRatio = "video" }: ImageRowProps) {
  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
    "4/3": "aspect-[4/3]"
  };

  const isSingle = images.length === 1;

  return (
    <section className="mb-px">
      <div className={`grid grid-cols-1 ${!isSingle ? 'md:grid-cols-2' : ''} gap-px`}>
        {images.map((image, index) => (
          <div key={index} className="frame-dark overflow-hidden">
            <div className={`relative ${aspectClasses[aspectRatio]} flex items-center justify-center`}>
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <p className="font-mono text-xs text-white/30">{image.placeholder || image.alt}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
