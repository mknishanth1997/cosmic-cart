"use client";

import CheckoutPageComp from "@/checkoutPageComp/CheckoutPageComp";
import { ProductCardDisplayPage } from "@/ProductCardDispalyPage/ProductCardDisplayPage";

export default function Home() {
  return (
    <>
      <div>
        <ProductCardDisplayPage></ProductCardDisplayPage>
        {/* <CheckoutPageComp></CheckoutPageComp> */}
      </div>
      {/* <ProductDescriptionPageComponent></ProductDescriptionPageComponent> */}
    </>
  );
}
