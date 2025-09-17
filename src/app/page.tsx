"use client";

import CheckoutPageComp from "@/checkoutPageComp/CheckoutPageComp";
import { ProductCardDisplayPage } from "@/ProductCardDispalyPage/ProductCardDisplayPage";
import SuccessfullPageComp from "@/SuccessfullPageComp/SuccessfullPageComp";

export default function Home() {
  return (
    <>
      <div>
        <SuccessfullPageComp></SuccessfullPageComp>
        <ProductCardDisplayPage></ProductCardDisplayPage>
        {/* <CheckoutPageComp></CheckoutPageComp> */}
      </div>
      {/* <ProductDescriptionPageComponent></ProductDescriptionPageComponent> */}
    </>
  );
}
