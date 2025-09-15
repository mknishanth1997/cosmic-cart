import ProductDescriptionPageComponent from "@/productDescriptionPageComponent/productDescriptionPageComponent";
import React from "react";

export default function productDescriptionPage({ params }) {
  const { id } = React.use(params);
  return (
    <div>
      <ProductDescriptionPageComponent></ProductDescriptionPageComponent>
    </div>
  );
}
