"use client";

import CheckoutPageComp from "@/checkoutPageComp/CheckoutPageComp";
import ShoppingCart from "@/checkoutPageComp/ShoppingCart/ShoppingCart";
import MarkMama from "@/components/MarkMama/MarkMama";
import { ProductCardDisplayPage } from "@/ProductCardDispalyPage/ProductCardDisplayPage";
import SuccessfullPageComp from "@/SuccessfullPageComp/SuccessfullPageComp";

export default function Home() {
  return (
    <>
      <div>
        <MarkMama id={1}></MarkMama>
        {/* <SuccessfullPageComp></SuccessfullPageComp> */}
        <ProductCardDisplayPage></ProductCardDisplayPage>
        {/* <CheckoutPageComp></CheckoutPageComp> */}
      </div>
      {/* <ProductDescriptionPageComponent></ProductDescriptionPageComponent> */}
    </>
  );
}
