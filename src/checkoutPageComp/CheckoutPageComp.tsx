"use client";
import { HelperText, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Link from "next/link";
import style from "./CheckoutPageComp.module.css";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import ImageSliderWithCheckoutButton from "./ImageSliderWithCheckoutButton";
import ImageSlider2ForThisComp from "./ImageSlider2ForThisComp";
import { useSearchParams } from "next/navigation";
export default function CheckoutPageComp() {
  const [input, setInput] = useState("");

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // const numericId = id ? Number(id) : null;
  const numericId = id;

  console.log("Checkout page got ID:", numericId);
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1 className="text-center text-2xl font-bold mb-4">Checkout Page</h1>
        <ShoppingCart id={numericId} input={input} setInput={setInput} />
      </div>
      <div className={style.right}>
        <ImageSliderWithCheckoutButton input={input} setInput={setInput} />
        <ImageSlider2ForThisComp />
      </div>
    </div>
  );
}
