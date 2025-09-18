"use client";
import { useData } from "@/context/dataContext";
import React from "react";
import Image from "next/image";

export default function FifthPart({ id }) {
  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  console.log(typeof id);
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  return (
    <div className="flex flex-col items-center space-y-4 gap-8  ">
      {planet?.planetGallery.map((img, index) => (
        <Image
          key={index} // ✅ add unique key
          src={img}
          alt={`Banner ${index + 1}`}
          width={1400}
          height={900}
        />
      ))}
    </div>
  );
}
