"use client";
import React from "react";
import CartAndWishComp from "./cartAndWishComp";
import style from "./CartPage.module.css";
import { useSearchParams } from "next/navigation";

export default function CartPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("CartPage got ID:", id);
  return (
    <div className={style.mainContainer}>
      <h1 className="text-center p-16">
        {id === "wishListItems" ? "Wish List Items" : "Cart Items"}
      </h1>
      <CartAndWishComp id={id}></CartAndWishComp>
    </div>
  );
}
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   console.log("CartPage got ID:", id);
