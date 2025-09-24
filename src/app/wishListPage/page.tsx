"use client";
import CartPage from "@/cartandwishlistItemsComp/CartPage";
import React, { Suspense } from "react";

export default function wishListPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CartPage />
      </Suspense>
    </div>
  );
}
