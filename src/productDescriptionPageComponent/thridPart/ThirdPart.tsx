"use client";
import ImageHolderWithTitle from "@/components/ImageHolderWithTitle/ImageHolderWithTitle";
import { useData } from "@/context/dataContext";
import React from "react";

const imgUrl = [
  "/surfacePreview/surfacePreview1.webp",
  "/surfacePreview/surfacePreview2.webp",
  "/surfacePreview/surfacePreview3.webp",
];

const title = ["Future Colonies", "Surface Preview", "Local Wildlife"];

export default function ThirdPart({ id }) {
  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  console.log(typeof id);
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  return (
    <div className="flex gap-5 justify-center  flex-wrap">
      {" "}
      {planet?.planetDescription.surfacePreviewImages.map((img, index) => (
        <ImageHolderWithTitle
          key={img}
          url={img}
          title={title[index]}
        ></ImageHolderWithTitle>
      ))}
    </div>
  );
}
