"use client";
import { Tooltip } from "flowbite-react";
import ManyStyledButton from "../ManyStyledButton/ManyStyledButton";
import styles from "./ProductDisplayCard.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import ShareSpeedDial from "@/Library/flow-bite/SpeedDial/ShareSpeedDial";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useData } from "@/context/dataContext";
import { useRouter } from "next/navigation";

type ProductDisplayCardProps = {
  planetThumbnailImg: string;
  planetOffer: { hasOffer: boolean; offerPrice?: number };
  planetName: string;
  planetDescription: string;
  planetPrice: number | string;
  planetAvailabilty: boolean;
  planetId: string | number;
};

export function ProductDisplayCard({
  planetThumbnailImg,
  planetOffer,
  planetName,
  planetDescription,
  planetPrice,
  planetAvailabilty,
  planetId,
}: ProductDisplayCardProps) {
  const { cosmicShop, saveCosmicCart } = useData();
  const router = useRouter();

  // check if this planet is in wishlist
  const isInWishList = cosmicShop.wishListItems.some(
    (item) => item.planetId === planetId
  );

  const isINShoppingCart = cosmicShop.cartItems.some(
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

  function handleAddShoppingCart() {
    let updatedShoppingCart;
    if (isINShoppingCart) {
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

  // Price formatter for India (₹ and Indian digit grouping)
  const formatPrice = (p: number | string) => {
    // sanitize input (strip non-numeric characters)
    const numeric =
      typeof p === "number" ? p : Number(String(p).replace(/[^0-9.-]+/g, ""));
    const amount = Number.isFinite(numeric) ? numeric : 0;

    // INR formatting, no decimal places (change maximumFractionDigits if you want paise)
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={styles.productDisplayCardContainer}>
      {/* Image Container */}
      <Link href={`/productDescriptionPage/${planetId}`}>
        <div className={styles.imgContainer}>
          {/* Keep using next/image but add responsive hints + lazy loading */}
          <Image
            className={styles.planetThumbnailImg}
            src={planetThumbnailImg}
            alt={`${planetName} thumbnail`}
            width={250}
            height={250}
            quality={75} // compression quality
            priority={false}
            sizes="(max-width: 640px) 120px, 250px" // helps Next.js choose right srcset
            loading="lazy"
            fetchPriority="low"
            style={{ objectFit: "cover" }} // prevents weird letterbox/space
          />
          {/* Overlay */}
          <div className={styles.imageOverlay}>
            <span
              className={`bg-red-700 text-white text-sm font-medium px-2 py-0.5 rounded-sm ${
                planetOffer.hasOffer ? "visible" : "invisible"
              }`}
            >
              {`${planetOffer.offerPrice}% Off`}
            </span>
            <Tooltip content="Add to Wishlist">
              <button
                onClick={(e) => {
                  e.preventDefault(); // ✅ stops Link navigation
                  e.stopPropagation(); // ✅ stops event bubbling
                  handleAddWishList();
                  toast(
                    isInWishList
                      ? "Removed from Wishlist 💔"
                      : "Added to Wishlist ❤️"
                  );
                }}
                className={`${styles.overlayButton} transition-transform duration-300 
    hover:scale-125 active:scale-95`}
              >
                {""}
                <FaHeart
                  size={18}
                  className={`transition-colors duration-300 ${
                    isInWishList ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </Tooltip>
          </div>
        </div>
      </Link>

      {/* Text Container */}
      <div className={styles.descriptionContainer}>
        <div className={styles.titleAndDescription}>
          <h3 className={styles.planetHeaderText}>
            <Link href={`/productDescriptionPage/${planetId}`}>
              {planetName}
            </Link>
          </h3>
          <p>{planetDescription}</p>
        </div>

        <div className={styles.priceAndAvailability}>
          <h4 className="price">{formatPrice(planetPrice)}</h4>
          <span
            className={`text-sm font-medium px-2 py-0.5 rounded-sm
    ${
      planetAvailabilty
        ? "bg-green-100 text-green-800"
        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    }
  `}
          >
            {planetAvailabilty ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className={styles.actionButtons}>
          <Tooltip content="Purchase the Planet">
            <ManyStyledButton
              variant="primary"
              size="md"
              onClick={() => {
                router.push(`/checkOutPage?id=${String(planetId)}`);
              }}
            >
              Buy Now
            </ManyStyledButton>
          </Tooltip>

          <Tooltip content="Add to Cart">
            <ManyStyledButton
              variant="secondary"
              size="md"
              Icon={FaCartArrowDown}
              onClick={() => {
                handleAddShoppingCart();
                toast.success("Item added to the cart");
              }}
            >
              {""}
            </ManyStyledButton>
            <Toaster />
          </Tooltip>

          <div className={styles.speedDialWrapper}>
            <ShareSpeedDial />
          </div>
        </div>
      </div>
    </div>
  );
}
