"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// desktop & mobile images (you can change mobile ones separately)
const desktopImages = [
  "/WEB BANNER 12.png",
  "/WEB BANNER 41.png",
  "/WEB BANNER 8.png",
];

const mobileImages = [
  "/MOBILE BANNER 1.png",
  "/MOBILE BANNER 2.png",
  "/MOBILE BANNER 3.png",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = isMobile ? mobileImages : desktopImages;
  const length = images.length;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto slide toggle
  const autoSlide = false; // set true if you want autoplay

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [length, autoSlide]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border h-fit ${
        isMobile ? "aspect-square" : "aspect-[16/6]"
      }`}
    >
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
              className="w-full h-full object-cover"
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
