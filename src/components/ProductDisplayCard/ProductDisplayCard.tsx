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
export function ProductDisplayCard() {
  const [wishList, setWishList] = useState<boolean>(false);
  // Toast Message
  const notify = (t: string) => toast.success(t);
  return (
    <div className={styles.productDisplayCardContainer}>
      {/* Image Container */}
      <div className={styles.imgContainer}>
        <Image
          className={styles.planetThumbnailImg}
          src="/planet/planet14.webp"
          alt="Planet"
          width={250}
          height={250}
        />
        {/* Overlay */}
        <div className={styles.imageOverlay}>
          <span className="bg-red-700 text-white text-sm font-medium px-2 py-0.5 rounded-sm">
            50% off
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
          <h3 className={styles.planetHeaderText}>Kepler-442b</h3>
          <p>
            This is the planet we call home. Our resilience will protect us, and
            our intelligence will propel us.
          </p>
        </div>

        <div className={styles.priceAndAvailability}>
          <h4 className="price">₹15,000</h4>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
            In Stock
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
      {extractBlogsKeys().map((key) => (
        <Link
          className="text-blue-500 underline"
          key={key}
          href={`blogs/${key}`}
        >
          {key}
        </Link>
      ))}
    </div>
  );
}
