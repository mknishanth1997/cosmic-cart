"use client";
import CheckoutPageComp from "@/checkoutPageComp/CheckoutPageComp";
import React, { Suspense } from "react";

export default function CheckOutPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutPageComp />
      </Suspense>
    </div>
  );
}
