"use client";
import { Button, Tooltip } from "flowbite-react";
import ManyStyledButton from "../ManyStyledButton/ManyStyledButton";
import styles from "./ProductDisplayCard.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import ShareSpeedDial from "@/Library/flow-bite/SpeedDial/ShareSpeedDial";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { extractBlogsKeys } from "@/Data/blogsRawData";
import { useData } from "@/context/dataContext";
import ProductCarousel from "@/productDescriptionPageComponent/firstPart/ImageProductCarosel.";
import { useRouter } from "next/navigation";
// Component
export function ProductDisplayCard({
  planetThumbnailImg,
  planetOffer,
  planetName,
  planetDescription,
  planetPrice,
  planetAvailabilty,
  planetId,
}) {
  const { cosmicShop, saveCosmicCart } = useData();
  const router = useRouter();
  // Handle Wishlisht
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

  // Shopping Cart
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
  const [wishList, setWishList] = useState<boolean>(false);
  // Toast Message
  const notify = (t: string) => toast.success(t);
  const planetIdeintification = planetId;
  return (
    <div className={styles.productDisplayCardContainer}>
      {/* Image Container */}
      <Link href={`/productDescriptionPage/${planetId}`}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.planetThumbnailImg}
            src={planetThumbnailImg}
            alt="Planet"
            width={250}
            height={250}
            quality={75} // compression quality
            priority={false}
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
              {" "}
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
          <h4 className="price">{`Rs ${planetPrice}`}</h4>
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
            {" "}
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
            {" "}
            <ManyStyledButton
              variant="secondary"
              size="md"
              Icon={FaCartArrowDown}
              onClick={() => {
                handleAddShoppingCart();
                notify("Item added to the cart");
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
