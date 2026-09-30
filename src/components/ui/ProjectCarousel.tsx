"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: CarouselImage[];
  projectName: string;
}

export function ProjectCarousel({ images, projectName }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-16/9 rounded-sm overflow-hidden bg-neutral-100 border border-text/10 select-none">
      {/* Warstwa zdjęć z płynnym przejściem (crossfade) */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || `${projectName} - slajd ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Przyciski nawigacji strzałkami (brak autoplay) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-sm bg-neutral-900/70 hover:bg-neutral-900 text-white transition-colors duration-150 cursor-pointer focus:outline-hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Następne zdjęcie"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-sm bg-neutral-900/70 hover:bg-neutral-900 text-white transition-colors duration-150 cursor-pointer focus:outline-hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Kropki nawigacyjne (wskaźniki slajdów) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-neutral-900/60">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Przejdź do slajdu ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  dotIdx === currentIndex ? "bg-accent w-4" : "bg-white/60 hover:bg-white w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
