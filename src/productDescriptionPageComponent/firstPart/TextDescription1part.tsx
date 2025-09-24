"use client";
import { Badge } from "flowbite-react";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import { useData } from "@/context/dataContext";
import React, { useState } from "react";
import styles from "./TextDescription1part.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation"; // ✅ Correct
import ImageModal from "@/components/ImageModalWithProps";

export default function TextDescription1part({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  const router = useRouter();
  console.log({ id });
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  // Find the planet by id

  const notify = (t: string) => toast.success(t); // toast
  if (!planet) {
    return <div>Planet not found 🚀</div>;
  }

  const planetId = planet.planetId;
  const planetPrice = planet.planetPrice; // assuming you store price here

  // --- Wishlist ---
  const isInWishList = cosmicShop.wishListItems.some(
    (item) => item.planetId === planetId
  );

  function handleAddWishList() {
    let updatedWishlist;
    if (isInWishList) {
      updatedWishlist = cosmicShop.wishListItems.filter(
        (item) => item.planetId !== planetId
      );
    } else {
      updatedWishlist = [
        ...cosmicShop.wishListItems,
        { planetId, addedAt: new Date() },
      ];
    }

    saveCosmicCart({
      ...cosmicShop,
      wishListItems: updatedWishlist,
    });
  }

  // --- Shopping Cart ---
  const isInShoppingCart = cosmicShop.cartItems.some(
    (item) => item.planetId === planetId
  );

  function handleAddShoppingCart() {
    let updatedShoppingCart;
    console.log({ updatedShoppingCart });
    if (isInShoppingCart) {
      updatedShoppingCart = cosmicShop.cartItems.filter(
        (item) => item.planetId !== planetId
      );
    } else {
      updatedShoppingCart = [
        ...cosmicShop.cartItems,
        { planetId, priceAtTime: planetPrice, addedAt: new Date() },
      ];
    }

    saveCosmicCart({
      ...cosmicShop,
      cartItems: updatedShoppingCart,
    });
  }

  return (
    <div className={styles.container}>
      <div className="flex flex-col gap-4 p-4 sm:p-6 rounded-2xl shadow-lg">
        {/* Title & Ratings */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {planet?.planetName}
          </h1>
          <h6 className="text-sm sm:text-md md:text-lg font-medium text-gray-600 dark:text-gray-400">
            {planet?.planetTitleDescription}
          </h6>
          <p className="text-yellow-400 text-base sm:text-lg">
            {"⭐".repeat(planet?.planetStars || 0)}
          </p>
        </div>

        {/* Price & Delivery Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {planet?.planetPrice !== undefined
              ? new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(planet.planetPrice)
              : "Rs 0"}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
              Deliver in:
            </span>
            <Badge color="success" size="sm" className="whitespace-nowrap">
              {`${planet?.deliveryIn} light years`}
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
          {planet?.planetInnterDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <ManyStyledButton
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              if (planet.planetName === "Earth") {
                notify("Sorry! Earth is already owned by humans🌍");
                setIsModalOpen(true);
              } else {
                notify("Proceeding to Checkout 🚀");
                setTimeout(() => {
                  router.push(`/checkOutPage?id=${String(id)}`);
                }, 1000);
              }
            }}
          >
            Buy Now
          </ManyStyledButton>
          <Toaster></Toaster>
          <ManyStyledButton
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              handleAddShoppingCart();
              console.log("Added to the shopping cart");
              notify(
                isInShoppingCart ? "Removed from Cart 🛒" : " Added to Cart 🛒"
              );
            }}
          >
            {isInShoppingCart ? "Remove from Cart" : "Add to Cart"}
          </ManyStyledButton>
          <ManyStyledButton
            variant="link"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              handleAddWishList();
              notify(
                isInShoppingCart
                  ? "Added to Wishlist ❤️"
                  : " Removed from Wishlist 💔"
              );
            }}
          >
            {isInWishList ? "Remove from wish" : "Add to Wish"}
          </ManyStyledButton>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/public/"
        imageAlt="Planet Preview"
      />
    </div>
  );
}
