"use client";
import { useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

type ProductImage = {
  url: string;
};

interface ProductCarouselProps {
  images: ProductImage[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe logic
  let startX = 0;
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    startX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
  };

  return (
    // 1. Added rounded-3xl to the outer container for a soft corner
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl">
      <div
        className="flex transition-transform duration-500 snap-x snap-mandatory scroll-smooth"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-center p-4">
            <div
              // 2. Ensuring the inner image container also has rounded corners
              // The original rounded-3xl was already there, just making sure it's clear
              className="relative aspect-square w-full rounded-3xl
            bg-gradient-to-r from-[rgba(88,28,135,0.3)] to-[rgba(131,24,67,0.3)]
            shadow-[0px_1px_0px_rgba(255,255,255,0.1),0px_8px_32px_rgba(139,69,255,0.15)]
            flex items-center justify-center overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-green-500 rounded-full px-3 py-1 z-10">
                <span className={`${orbitron.className} text-sm text-black`}>
                  🌟 Premium
                </span>
              </div>

              <Image
                src={item.url}
                alt={`Product ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover p-2 drop-shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={prevSlide}
          // 3. Adjusted button position to be within the rounded outer container
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-20"
        >
          ◀
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          // 4. Adjusted button position to be within the rounded outer container
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md z-20"
        >
          ▶
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center mt-3 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                current === idx ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
