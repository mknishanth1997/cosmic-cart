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
      {planet?.planetGallery.map((img) => (
        <Image
          src={img}
          alt="Banner 41"
          width={1400} // pick something reasonable for your banner
          height={400} // aspect ratio control
          className="max-w-full h-auto"
        />
      ))}
    </div>
  );
}
