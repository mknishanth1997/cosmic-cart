"use client";

import { ProductCardDisplayPage } from "@/ProductCardDispalyPage/ProductCardDisplayPage";
import FirstPart from "@/productDescriptionPageComponent/firstPart/FirstPart";
import ProductCarousel from "@/productDescriptionPageComponent/firstPart/ImageProductCarosel.";
import TextDescription1part from "@/productDescriptionPageComponent/firstPart/TextDescription1part";
import ProductDescriptionPageComponent from "@/productDescriptionPageComponent/productDescriptionPageComponent";

export default function Home() {
  return (
    <>
      {/* <ProductCardDisplayPage></ProductCardDisplayPage> */}
      <ProductDescriptionPageComponent></ProductDescriptionPageComponent>
    </>
  );
}
