"use client";
import Image from "next/image";
import style from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={style.container}>
      <div className="relative w-[290px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Gradient Background */}
        <div className="absolute inset-0 opacity-80 "></div>
        <div className="relative z-10 p-4 flex flex-col items-center">
          {/* Product Image Container */}
          <div className="w-full h-[160px] relative rounded-lg overflow-hidden flex justify-center">
            <Image
              src="/surfacePreview/surfacePreview2.webp"
              alt="Planet Product"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          {/* Product Title */}
          <h3 className="mt-4 text-lg font-semibold text-white pt-2.5 ">
            Kepler-442b Deluxe
          </h3>
          {/* Product Description */}
          <p className="mt-2 text-xs sm:text-sm text-gray-200 leading-snug line-clamp-3 pt-2 pb-2">
            Experience the luxury of an alien lifestyle with stunning
          </p>
          {/* Footer: Price + Button */}
          <div className="mt-4 flex justify-between items-center w-full">
            <span className="text-lg font-bold text-purple-200">$4,999</span>
            <button className="px-3 py-1.5 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-medium text-xs sm:text-sm transition-all duration-300 border border-transparent hover:border-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
