import ProductDescriptionPageComponent from "@/productDescriptionPageComponent/productDescriptionPageComponent";
import React from "react";

export default function productDescriptionPage({ params }) {
  const { id } = React.use(params);
  console.log(id);
  return (
    <div>
      <ProductDescriptionPageComponent
        id={id}
      ></ProductDescriptionPageComponent>
    </div>
  );
}
