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
      <h1 className={styles.firstHeading}>Kepler-442a</h1>
      <FirstPart id={id}></FirstPart>
      <SecondPart id={ID}></SecondPart>
      <h3 className={styles.subHeading}>Explore every detail</h3>
      <ThirdPart id={ID} />
      <h3 className={styles.subHeading}>People also bought this</h3>
      <FourthPart id={ID}></FourthPart>
      <h3 className={styles.subHeading}>About this item</h3>
      <SixthPart id={ID}></SixthPart>
      <h3 className={styles.subHeading}>From the manufacturer</h3>
      <FifthPart id={ID}></FifthPart>
    </div>
  );
}
