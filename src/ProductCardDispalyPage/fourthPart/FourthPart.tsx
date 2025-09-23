"use client";
import ProductCard from "@/components/productCardDummyHardCoded/ProductCard";
import React from "react";
import { useData } from "@/context/dataContext";
export default function FourthPart({ id }) {
  const { allPlanetData } = useData();
  console.log(typeof id);
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  const pab = planet?.peopleAlsoBought;
  console.log({ pab });
  return (
    <div className="flex  w-full justify-center gap-16 flex-wrap   ">
      {pab?.map((t) => (
        <ProductCard key={t.productName} thing={t}></ProductCard>
      ))}
    </div>
  );
}
