"use client";
import { useState, useEffect } from "react";

// desktop & mobile images (you can change mobile ones separately)
const desktopImages = [
  "/Pasted image (2).png",
  "/Pasted image (3).png",
  "/Pasted image (4).png",
  "/herobanner3.webp",
];

const mobileImages = [
  "/Pasted image (2).png",
  "/Pasted image (3).png",
  "/Pasted image (4).png",
  "/herobanner3.webp",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = isMobile ? mobileImages : desktopImages;
  const length = images.length;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto slide toggle
  const autoSlide = false;

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length, autoSlide]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
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
              className="w-full h-auto object-cover" // h-auto will prevent it from stretching
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
    </div>
  );
}
