"use client";
import ImageHolderWithTitle from "@/components/ImageHolderWithTitle/ImageHolderWithTitle";
import { useData } from "@/context/dataContext";
import React, { useState, useEffect } from "react";
import ImageHolderWithTitle1 from "../ImageHolderWithTitle/ImageHolderWithTitle1";

const title = ["Future Colonies", "Surface Preview", "Local Wildlife"];

const wildlifeImages = {
  center: "/mark/markstraight.webp",
  left: "/mark/markleft.webp",
  leftUp: "/mark/markleftup.webp",
  right: "/mark/markright.webp",
  rightUp: "/mark/markstraightrihgtup.webp",
  down: "/mark/markstraightdown.webp",
};

export default function MarkMama({ id }) {
  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  const planet = allPlanetData.find((planet) => planet.planetId === id);

  const [wildlifeImg, setWildlifeImg] = useState(wildlifeImages.center);

  // Full-screen mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;

      if (xRatio < 0.33 && yRatio < 0.33) setWildlifeImg(wildlifeImages.leftUp);
      else if (xRatio < 0.33) setWildlifeImg(wildlifeImages.left);
      else if (xRatio > 0.66 && yRatio < 0.4)
        setWildlifeImg(wildlifeImages.rightUp); // slightly larger y range
      else if (xRatio > 0.66) setWildlifeImg(wildlifeImages.right);
      else if (yRatio > 0.66) setWildlifeImg(wildlifeImages.down);
      else setWildlifeImg(wildlifeImages.center);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex gap-5 justify-center flex-wrap">
      {planet?.planetDescription.surfacePreviewImages.map((img, index) => (
        <ImageHolderWithTitle1
          key={index === 2 ? wildlifeImg : index}
          url={index === 2 ? wildlifeImg : img}
          title={title[index]}
          className="w-[363px] h-[192px]" // fix the size
        />
      ))}
    </div>
  );
}
