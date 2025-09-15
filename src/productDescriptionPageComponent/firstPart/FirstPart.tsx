"use client";
import React from "react";
import ProductCarousel from "./ImageProductCarosel.";
import TextDescription1part from "./TextDescription1part";
import styles from "./FirstPart.module.css";
import { useData } from "@/context/dataContext";
// const images = [
//   {
//     url: "/test.jpg",
//   },
//   { url: "/neelakshi-singh-fT7TgUqIf4Y-unsplash.jpg" },
//   {
//     url: "/benjamin-voros-phIFdC6lA4E-unsplash.jpg",
//   },
//   { url: "/documerica-x-EG-R-bUTI-unsplash.jpg" },
//   { url: "/DG_FomMXoAA4OSI.jpeg" },
// ];
export default function FirstPart({ id }) {
  const { allPlanetData } = useData();
  const planet = allPlanetData.find((planet) => planet.planetId === +id);
  const images = planet?.planetDescription?.images || [];
  const ID = Number(id);

  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <ProductCarousel images={images} />
      </div>
      <div className={styles.rightPart}>
        <TextDescription1part id={ID} />
      </div>
    </div>
  );
}
