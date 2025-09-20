"use client";
import React, { useRef, useState, useEffect } from "react";
import FirstPart from "./firstPart/FirstPart";
import SecondPart from "./secondPart/SecondPart";
import ThirdPart from "./thridPart/ThirdPart";
import FourthPart from "@/ProductCardDispalyPage/fourthPart/FourthPart";
import FifthPart from "./fifthPart/FifthPart";
import SixthPart from "./sixthPart/SixthPart";
import MarkMama from "@/components/MarkMama/MarkMama";
import styles from "./productDescriptionPageComponent.module.css";

export default function ProductDescriptionPageComponent({ id }) {
  const ID = Number(id);
  const markRef = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  const [initialTop, setInitialTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // store initial top offset
  useEffect(() => {
    if (markRef.current) {
      setInitialTop(markRef.current.offsetTop);
    }
  }, []);

  // Handle sticky/fixed
  useEffect(() => {
    const handleScroll = () => {
      if (!markRef.current || isMobile) return;
      const headerHeight = 64; // height of your header
      const scrollY = window.scrollY;

      setFixed(scrollY + headerHeight >= initialTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialTop, isMobile]);

  return (
    <div className={styles.container}>
      <h1 className={styles.firstHeading}>The Kepler-442a</h1>
      <div>
        <FirstPart id={id} />
        <SecondPart id={ID} />
      </div>

      <div>
        <h3 className={styles.subHeading}>
          <span className={styles.emoji}>🔭</span> Explore every detail
        </h3>
        {ID === 1 && !isMobile ? (
          <div
            ref={markRef}
            className={`${
              fixed ? "fixed top-[64px] left-0 w-full z-50 bg-white" : ""
            }`}
          >
            <MarkMama id={ID} />
          </div>
        ) : (
          <ThirdPart id={ID} />
        )}
      </div>

      <div>
        <h3 className={styles.subHeading}>
          <span className={styles.emoji}>🛍️</span> People also bought this
        </h3>
        <FourthPart id={ID} />
      </div>

      <div>
        <h3 className={styles.subHeading}>
          <span className={styles.emoji}>📦</span> About this item
        </h3>
        <SixthPart id={ID} />
      </div>

      <div>
        <h3 className={styles.subHeading}>
          <span className={styles.emoji}>🏭</span> From the manufacturer
        </h3>
        <FifthPart id={ID} />
      </div>
    </div>
  );
}
