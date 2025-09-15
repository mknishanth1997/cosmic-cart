import React from "react";
import FirstPart from "./firstPart/FirstPart";
import SecondPart from "./secondPart/SecondPart";
import ImageHolderWithTitle from "@/components/ImageHolderWithTitle/ImageHolderWithTitle";
import ThirdPart from "./thridPart/ThirdPart";
import ProductCard from "@/components/productCardDummyHardCoded/ProductCard";
import styles from "./productDescriptionPageComponent.module.css";
import FourthPart from "@/ProductCardDispalyPage/fourthPart/FourthPart";
import SixthPart from "./sixthPart/SixthPart";
import FifthPart from "./fifthPart/FifthPart";

export default function ProductDescriptionPageComponent() {
  return (
    <div className={styles.container}>
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
      <ThirdPart />
      <FifthPart></FifthPart>
      <FourthPart></FourthPart>
      <SixthPart></SixthPart>
    </div>
  );
}
