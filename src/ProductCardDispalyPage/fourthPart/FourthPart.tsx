import ProductCard from "@/components/productCardDummyHardCoded/ProductCard";
import React from "react";
import Image from "next/image";
export default function FourthPart() {
  return (
    <div className="flex  w-full justify-center gap-16 flex-wrap ">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
}
