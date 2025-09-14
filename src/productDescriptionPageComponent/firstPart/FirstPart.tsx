"use client";
import React from "react";
import ProductCarousel from "./ImageProductCarosel.";
import TextDescription1part from "./TextDescription1part";
import styles from "./FirstPart.module.css";
const images = [
  { url: "/planet/planet15.webp", bg: "bg-[#f5f5f5]" },
  { url: "/WEB BANNER 12.png", bg: "bg-[#e0f7fa]" },
  { url: "/test.jpg", bg: "bg-[#fff3e0]" },
  { url: "/images/product4.png", bg: "bg-[#fce4ec]" },
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
