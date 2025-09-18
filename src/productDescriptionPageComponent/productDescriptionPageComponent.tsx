"use client";
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
  console.log({ ID });
  return (
    <div className={styles.container}>
      <h1 className={styles.firstHeading}>The Kepler-442a</h1>
      <div>
        <FirstPart id={id}></FirstPart>
        <SecondPart id={ID}></SecondPart>
      </div>
      <div>
        <h3 className={styles.subHeading}>
          {" "}
          <span className={styles.emoji}>🔭</span> Explore every detail
        </h3>
        <ThirdPart id={ID} />
      </div>
      <div>
        <h3 className={styles.subHeading}>
          {" "}
          <span className={styles.emoji}>🛍️</span> People also bought this
        </h3>
        <FourthPart id={ID}></FourthPart>
      </div>
      <div>
        <h3 className={styles.subHeading}>
          {" "}
          <span className={styles.emoji}>📦</span> About this item
        </h3>
        <SixthPart id={ID}></SixthPart>
      </div>
      <div>
        <h3 className={styles.subHeading}>
          {" "}
          <span className={styles.emoji}>🏭</span> From the manufacturer
        </h3>
        <FifthPart id={ID}></FifthPart>
      </div>
    </div>
  );
}
