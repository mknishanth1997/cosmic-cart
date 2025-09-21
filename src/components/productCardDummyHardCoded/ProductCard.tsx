"use client";
import Image from "next/image";
import style from "./ProductCard.module.css";

export default function ProductCard({ thing }) {
  return (
    <div className={style.container}>
      <div className="relative w-[300px] h-[420px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-purple-700 via-purple-900 to-black p-4">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Product Image */}
          <div className="w-full h-[180px] relative rounded-lg overflow-hidden flex justify-center mb-4 ">
            <Image
              src={thing.productImg}
              alt={thing.productName}
              fill
              className="object-cover blur-sm scale-110"
            />
            <Image
              src={thing.productImg}
              alt={thing.productName}
              fill
              className="object-contain transition-transform duration-300 hover:scale-110"
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* Title + Description */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 pt-2 pb-2">
                {thing.productName}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed line-clamp-3">
                {thing.productDescription}
              </p>
            </div>

            {/* Footer: Price + Button */}
            <div className="mt-4 flex justify-between items-center w-full">
              <span className="text-lg font-bold text-purple-200">{`Rs ${thing.productPrice}`}</span>
              <button className="px-4 py-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-medium text-sm transition-all duration-300 border border-transparent hover:border-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
