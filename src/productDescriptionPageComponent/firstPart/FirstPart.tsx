"use client";
import React from "react";
import ProductCarousel from "./ImageProductCarosel.";
import TextDescription1part from "./TextDescription1part";
import styles from "./FirstPart.module.css";
const images = [
  {
    url: "/test.jpg",
    bg: "bg-[#f5f5f5]",
  },
  { url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg", bg: "bg-[#e0f7fa]" },
  {
    url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
    bg: "bg-[#fff3e0]",
  },
  { url: "/documerica-x-EG-R-bUTI-unsplash.jpg", bg: "bg-[#fce4ec]" },
  { url: "/DG_FomMXoAA4OSI.jpeg", bg: "bg-[#fce4ec]" },
];
export default function FirstPart() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <ProductCarousel images={images} />
      </div>
      <div className={styles.rightPart}>
        <TextDescription1part />
      </div>
    </div>
  );
}
