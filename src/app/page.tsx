"use client";

import { ProductCardDisplayPage } from "@/ProductCardDispalyPage/ProductCardDisplayPage";
import FirstPart from "@/productDescriptionPageComponent/firstPart/FirstPart";
import ProductCarousel from "@/productDescriptionPageComponent/firstPart/ImageProductCarosel.";
import TextDescription1part from "@/productDescriptionPageComponent/firstPart/TextDescription1part";
import ProductDescriptionPageComponent from "@/productDescriptionPageComponent/productDescriptionPageComponent";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <>
      <div>
        <ProductCardDisplayPage></ProductCardDisplayPage>
      </div>
      {/* <ProductDescriptionPageComponent></ProductDescriptionPageComponent> */}
    </>
  );
}
