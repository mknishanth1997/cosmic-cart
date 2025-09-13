"use client";
import { useState, useEffect } from "react";

const images = ["/WEB BANNER 12.png", "/WEB BANNER 41.png", "WEB BANNER 8.png"];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 3s
  const autoSlide = false; // change to true if you want to resume

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-150 overflow-hidden rounded-xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full flex-none">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-150 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
          >
            {""}
          </button>
        ))}
      </div>
    </div>
  );
}
