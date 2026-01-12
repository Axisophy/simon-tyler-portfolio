"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  caption: string;
}

interface ImageSlideshowProps {
  slides: Slide[];
  aspectRatio?: "video" | "wide" | "square";
  placeholder?: string;
  containOnWhite?: boolean;
}

export default function ImageSlideshow({
  slides,
  aspectRatio = "wide",
  placeholder,
  containOnWhite = false
}: ImageSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square"
  };

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
        <div className="frame-dark rounded-lg overflow-hidden">
          <div className={`${aspectClasses[aspectRatio]} flex items-center justify-center`}>
            <p className="font-mono text-xs text-white/30">{placeholder || "Project images"}</p>
          </div>
          {placeholder && (
            <div className="px-4 py-3">
              <p className="font-mono text-xs text-white/50">{placeholder}</p>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-px">
      <div className={`${containOnWhite ? 'frame' : 'frame-dark'} rounded-lg overflow-hidden`}>
        {/* Slideshow Container */}
        <div className={`relative ${aspectClasses[aspectRatio]} ${containOnWhite ? 'bg-white' : ''}`}>
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].caption}
            fill
            className={containOnWhite ? "object-contain" : "object-cover"}
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
        <div className="px-4 py-3 flex items-center justify-between">
          <p className={`font-mono text-xs ${containOnWhite ? 'text-black/50' : 'text-white/50'}`}>{slides[currentSlide].caption}</p>
          {slides.length > 1 && (
            <p className={`font-mono text-xs ${containOnWhite ? 'text-black/30' : 'text-white/30'}`}>{currentSlide + 1} / {slides.length}</p>
          )}
        </div>
      </div>
    </section>
  );
}
