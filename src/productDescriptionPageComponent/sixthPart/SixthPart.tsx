"use client";
import React from "react";
import style from "./SixthPart.module.css";
import { useData } from "@/context/dataContext";

export default function SixthPart({ id }) {
  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  console.log(typeof id);
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  return (
    <div>
      <div className="flex justify-center items-center px-4 sm:px-6  overflow-x-hidden ">
        <div
          className={`w-full max-w-6xl flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 rounded-2xl p-4 sm:p-6 md:p-8 box-border ${style.cardContainer}`}
        >
          {planet?.planetDescription.detailedDescription.map((obj) => (
            <div className="flex-1 flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-1 md:min-w-0">
              <h3 className="pb-2 text-lg sm:text-xl font-semibold">
                {obj.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed break-words">
                {obj.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
