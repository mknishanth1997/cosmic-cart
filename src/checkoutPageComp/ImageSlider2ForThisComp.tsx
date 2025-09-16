"use client";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import { useEffect, useState } from "react";

const ImageSlider2ForThisComp = ({ autoSlide = true, interval = 3000 }) => {
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
    <div className="w-full max-w-md mx-auto p-4 rounded-xl shadow-lg bg-[linear-gradient(to_right,#581c87,#831843)] flex flex-col items-center ">
      {/* Image container with bg */}
      <div className="relative w-full h-64 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-full object-cover"
        />
        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === current
                  ? "bg-indigo-500"
                  : "bg-gray-400 dark:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text below image */}
      <div className="mt-4 text-center pb-4 pt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {slides[current].text}
        </h3>
      </div>

      {/* Checkout button */}

      <ManyStyledButton variant="secondary">
        I serve the Soviet Union
      </ManyStyledButton>
    </div>
  );
};

export default ImageSlider2ForThisComp;
