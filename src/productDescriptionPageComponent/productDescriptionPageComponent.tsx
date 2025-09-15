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

export default function ProductDescriptionPageComponent({ id }) {
  console.log({ id });
  const ID = Number(id);
  return (
    <div className={styles.container}>
      <FirstPart id={id}></FirstPart>
      <SecondPart id={ID}></SecondPart>
      <ThirdPart id={ID} />
      <FourthPart id={ID}></FourthPart>
      <SixthPart id={ID}></SixthPart>
      <FifthPart id={ID}></FifthPart>
    </div>
  );
}
