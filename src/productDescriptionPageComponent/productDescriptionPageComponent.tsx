import React from "react";
import FirstPart from "./firstPart/FirstPart";
import SecondPart from "./secondPart/SecondPart";
import ImageHolderWithTitle from "@/components/ImageHolderWithTitle/ImageHolderWithTitle";
import ThirdPart from "./thridPart/ThirdPart";

export default function ProductDescriptionPageComponent() {
  return (
    <div>
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
      <ThirdPart />
    </div>
  );
}
