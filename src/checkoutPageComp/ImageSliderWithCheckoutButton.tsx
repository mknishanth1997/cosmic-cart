"use client";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import { useEffect, useState } from "react";

const ImageSliderWithCheckoutButton = ({
  autoSlide = true,
  interval = 3000,
}) => {
  const slides = [
    {
      id: 1,
      src: "/planet/planet11.webp",
      alt: "Planet 1",
      text: "This could be you 🌍",
    },
    {
      id: 2,
      src: "/planet/planet12.webp",
      alt: "Planet 2",
      text: "Discover the unknown 🚀",
    },
    {
      id: 3,
      src: "/surfacePreview/surfacePreview1.webp",
      alt: "Planet 3",
      text: "Your journey starts here ✨",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoSlide, interval, slides.length]);

  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6 rounded-2xl shadow-xl bg-[linear-gradient(to_right,#581c87,#831843)] flex flex-col items-center">
      {/* Image container */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-full object-cover"
        />
        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                index === current
                  ? "bg-indigo-400 sm:bg-indigo-500"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="mt-4 sm:mt-6 text-center px-2 sm:px-4">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-100">
          {slides[current].text}
        </h3>
      </div>

      {/* Checkout button */}
      <div className="mt-3 sm:mt-5">
        <ManyStyledButton>Purchase the Planet</ManyStyledButton>
      </div>
    </div>
  );
};

export default ImageSliderWithCheckoutButton;
