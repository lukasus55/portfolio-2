"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  poster?: string;
  title: string;
  aspectRatio?: "16/9" | "16/10" | "21/9";
}

export function ProjectVideo({
  src,
  poster,
  title,
  aspectRatio = "16/9",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay zablokowany przez przeglądarkę (np. tryb oszczędzania energii)
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const aspectClass =
    aspectRatio === "21/9"
      ? "aspect-21/9"
      : aspectRatio === "16/10"
      ? "aspect-16/10"
      : "aspect-16/9";

  return (
    <div
      onClick={togglePlay}
      className={`relative w-full ${aspectClass} rounded-sm overflow-hidden bg-neutral-900 border border-text/10 shadow-xs cursor-pointer group select-none`}
      role="region"
      aria-label={`Podgląd wideo projektu - ${title}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Dyskretna kontrolka Play/Pause w rogu (widoczna na hover lub przy pauzie) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        aria-label={isPlaying ? "Wstrzymaj wideo" : "Odtwórz wideo"}
        className={`absolute bottom-4 right-4 z-20 w-10 h-10 rounded-sm bg-neutral-900/80 hover:bg-neutral-900 text-white flex items-center justify-center transition-all duration-200 cursor-pointer ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
    </div>
  );
}
