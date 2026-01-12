"use client";

import { useState } from "react";

interface Slide {
  src: string;
  caption: string;
}

interface ImageSlideshowProps {
  slides: Slide[];
  placeholder?: string;
}

export default function ImageSlideshow({
  slides,
  placeholder
}: ImageSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // If no slides, show placeholder
  if (slides.length === 0 || !slides[0].src) {
    return (
      <section className="mb-px">
        <div className="frame p-4 md:p-6">
          <div className="flex items-center justify-center bg-black/5 rounded-lg h-[300px]">
            <p className="font-mono text-xs text-black/30">{placeholder || "Project images"}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-px">
      {/* Image Frame */}
      <div className="frame p-4 md:p-6">
        <div className="relative">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].caption}
            className="rounded-lg h-auto max-w-full"
          />

          {/* Navigation arrows - only show if multiple slides */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="flex items-center gap-8 mt-3">
          <p className="font-mono text-xs text-black/50">{slides[currentSlide].caption}</p>
          {slides.length > 1 && (
            <p className="font-mono text-xs text-black/30">{currentSlide + 1} / {slides.length}</p>
          )}
        </div>
      </div>
    </section>
  );
}
