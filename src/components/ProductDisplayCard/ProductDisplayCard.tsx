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
  // Handle Wishlisht
  function handleAddWishList() {}
  const [wishList, setWishList] = useState<boolean>(false);
  // Toast Message
  const notify = (t: string) => toast.success(t);
  const planetIdeintification = planetId;
  return (
    <div className={styles.productDisplayCardContainer}>
      {/* Image Container */}
      <div className={styles.imgContainer}>
        <Image
          className={styles.planetThumbnailImg}
          src={planetThumbnailImg}
          alt="Planet"
          width={250}
          height={250}
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
              onClick={() => {
                setWishList(!wishList);
                wishList
                  ? notify("Item removed from the Wishlist")
                  : notify("Item added to the Wishlist");
              }}
              className={styles.overlayButton}
            >
              {""}
              <FaHeart color={wishList ? "red" : "gray"} size={18} />
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Text Container */}
      <div className={styles.descriptionContainer}>
        <div className={styles.titleAndDescription}>
          <h3 className={styles.planetHeaderText}>{planetName}</h3>
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
            <ManyStyledButton variant="primary" size="md">
              Buy Now
            </ManyStyledButton>
          </Tooltip>

          <Tooltip content="Add to Cart">
            {" "}
            <ManyStyledButton
              variant="secondary"
              size="md"
              Icon={FaCartArrowDown}
              onClick={() => notify("Item added to the cart")}
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
