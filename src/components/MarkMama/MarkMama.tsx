"use client";
import { useData } from "@/context/dataContext";
import React, { useState, useEffect } from "react";
import ImageHolderWithTitle1 from "../ImageHolderWithTitle/ImageHolderWithTitle1";

const title = ["Future Colonies", "Surface Preview", "Local Wildlife"];

// NOTE: Check the filenames in /public/mark — one looked misspelled before.
// e.g. replace 'markstraightrihgtup.webp' with the real filename if it's different.
const wildlifeImages = {
  center: "/mark/markstraight.webp",
  left: "/mark/markleft.webp",
  leftUp: "/mark/markleftup.webp",
  right: "/mark/markright.webp",
  // <-- verify this filename exists in /public/mark
  rightUp: "/mark/markstraightrihgtup.webp",
  down: "/mark/markstraightdown.webp",
};

// simple fallback image in case a url is missing
const FALLBACK_IMG = "/mark/placeholder.webp";

function normalizeImgValue(img: any) {
  if (!img) return FALLBACK_IMG;
  if (typeof img === "string") return img;
  // common object shapes
  if (typeof img === "object") {
    return img.url ?? img.src ?? img.image ?? FALLBACK_IMG;
  }
  return FALLBACK_IMG;
}

export default function MarkMama({
  id,
  className = "",
}: {
  id: number;
  className?: string;
}) {
  const { allPlanetData } = useData();
  const planet = allPlanetData.find((p) => p.planetId === id);

  const [wildlifeImg, setWildlifeImg] = useState(wildlifeImages.center);

  // Full-screen mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;

      if (xRatio < 0.33 && yRatio < 0.33) setWildlifeImg(wildlifeImages.leftUp);
      else if (xRatio < 0.33) setWildlifeImg(wildlifeImages.left);
      else if (xRatio > 0.66 && yRatio < 0.4)
        setWildlifeImg(wildlifeImages.rightUp);
      else if (xRatio > 0.66) setWildlifeImg(wildlifeImages.right);
      else if (yRatio > 0.66) setWildlifeImg(wildlifeImages.down);
      else setWildlifeImg(wildlifeImages.center);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Quick defensive guard
  if (!planet) {
    // optional: return a placeholder UI instead of null
    return <div className={className}>Planet not loaded yet.</div>;
  }

  // debug — remove when fixed
  // this helps you inspect the actual shape of surfacePreviewImages
  // open browser console to see this
  console.log(
    "surfacePreviewImages:",
    planet.planetDescription?.surfacePreviewImages
  );

  return (
    <div className={`${className} flex gap-5 justify-center flex-wrap`}>
      {planet.planetDescription?.surfacePreviewImages?.map(
        (img: any, index: number) => {
          const extraClass =
            index === 2
              ? "animate-pulse shadow-[0_0_20px_rgba(255,255,0,0.6)] rounded-lg"
              : "";

          const src = index === 2 ? wildlifeImg : normalizeImgValue(img);

          return (
            <ImageHolderWithTitle1
              key={index}
              url={src} // if ImageHolderWithTitle1 expects `src` instead of `url`, change this prop name
              title={title[index]}
              className={`w-[363px] h-[192px] ${extraClass}`}
            />
          );
        }
      )}
    </div>
  );
}
