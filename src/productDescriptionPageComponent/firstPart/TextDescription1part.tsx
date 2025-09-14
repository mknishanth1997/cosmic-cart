"use client";
import { Badge } from "flowbite-react";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import { useData } from "@/context/dataContext";
import React from "react";
import styles from "./TextDescription1part.module.css";

export default function TextDescription1part() {
  const { cosmicShop, saveCosmicCart } = useData();

  return (
    <div className={styles.container}>
      <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-2xl shadow-lg">
        {/* Title & Ratings */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Keplere - 442b
          </h1>
          <h6 className="text-sm sm:text-md md:text-lg font-medium text-gray-600 dark:text-gray-400">
            Not just a planet, a new beginning
          </h6>
          <p className="text-yellow-400 text-base sm:text-lg">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Price & Delivery Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            $12,000,000
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
              Deliver in:
            </span>
            <Badge color="success" size="sm" className="whitespace-nowrap">
              4 light years
            </Badge>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Feature 1 */}
          <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
            <p className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
              100% Cash Back
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              You heard it right. 100% you won't get your cash back after
              purchase.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
            <p className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
              No Cost EMI
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              You just need to prove to the bank you don't need a loan.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
            <p className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">
              Partner Offer
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              Don't have the money? Borrow from friends and family. A sucker is
              born every minute.
            </p>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          totam dolorem harum iusto, quod cumque cum possimus accusamus alias
          labore minima.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <ManyStyledButton
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Buy Now
          </ManyStyledButton>
          <ManyStyledButton
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Add to Cart
          </ManyStyledButton>
          <ManyStyledButton
            variant="link"
            size="lg"
            className="w-full sm:w-auto"
          >
            Wishlist
          </ManyStyledButton>
        </div>
      </div>
    </div>
  );
}
