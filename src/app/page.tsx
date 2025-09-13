"use client";
import { Carousel } from "flowbite-react";
import { useKeenSlider } from "keen-slider/react";

import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import "./page.module.css";
import { ProductDisplayCard } from "@/components/ProductDisplayCard/ProductDisplayCard";
import styles from "./page.module.css";
import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Home() {
  return (
    <>
      <div className={styles.homePageContainer}>
        <ImageSlider></ImageSlider>
        <ProductDisplayCard></ProductDisplayCard>
        <ProductDisplayCard></ProductDisplayCard>
      </div>
    </>
  );
}
