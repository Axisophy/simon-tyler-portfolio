"use client";

import { useState } from "react";

interface Slide {
  src: string;
  caption: string;
}

interface ImageSlideshowProps {
  slides: Slide[];
  height?: number;
  placeholder?: string;
  containOnWhite?: boolean;
}

export default function ImageSlideshow({
  slides,
  height = 400,
  placeholder,
  containOnWhite = false
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
        <div className="frame-dark overflow-hidden w-fit">
          <div
            className="flex items-center justify-center bg-white/5"
            style={{ height: `${height}px`, width: '600px' }}
          >
            <p className="font-mono text-xs text-white/30">{placeholder || "Project images"}</p>
          </div>
        </div>
        {placeholder && (
          <div className="frame-dark px-4 py-3 mt-px w-fit">
            <p className="font-mono text-xs text-white/50">{placeholder}</p>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="mb-px">
      {/* Image Frame - shrink to fit */}
      <div className={`${containOnWhite ? 'frame' : 'frame-dark'} overflow-hidden w-fit relative`}>
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].caption}
          className="block"
          style={{ height: `${height}px`, width: 'auto' }}
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

      {/* Caption Frame - separate with padding */}
      <div className={`${containOnWhite ? 'frame' : 'frame-dark'} px-4 py-3 mt-px w-fit flex items-center gap-8`}>
        <p className={`font-mono text-xs ${containOnWhite ? 'text-black/50' : 'text-white/50'}`}>{slides[currentSlide].caption}</p>
        {slides.length > 1 && (
          <p className={`font-mono text-xs ${containOnWhite ? 'text-black/30' : 'text-white/30'}`}>{currentSlide + 1} / {slides.length}</p>
        )}
      </div>
    </section>
  );
}
