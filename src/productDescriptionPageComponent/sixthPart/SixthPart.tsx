"use client";
import React from "react";
import style from "./SixthPart.module.css";
import { useData } from "@/context/dataContext";

export default function SixthPart({ id }: { id: number }) {
  const { allPlanetData } = useData();
  const planet = allPlanetData.find((planet) => planet.planetId === id);

  return (
    <div className="flex justify-center px-4 sm:px-6 overflow-x-hidden">
      <div
        className={`w-full max-w-6xl grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 rounded-2xl p-4 sm:p-6 md:p-8 box-border ${style.cardContainer}`}
      >
        {planet?.planetDescription.detailedDescription.map((obj, i) => (
          <div
            key={i}
            className="flex flex-col justify-start h-full transition-transform duration-300 ease-in-out hover:-translate-y-1"
          >
            <h3 className="pb-2 text-lg sm:text-xl font-semibold">
              {obj.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed break-words flex-1">
              {obj.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
