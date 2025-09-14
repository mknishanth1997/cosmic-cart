import ImageHolderWithTitle from "@/components/ImageHolderWithTitle/ImageHolderWithTitle";
import React from "react";

const imgUrl = [
  "/surfacePreview/surfacePreview1.webp",
  "/surfacePreview/surfacePreview2.webp",
  "/surfacePreview/surfacePreview3.webp",
];

export default function ThirdPart() {
  return (
    <div className="flex gap-5 justify-center p-16 flex-wrap">
      {" "}
      {imgUrl.map((img) => (
        <ImageHolderWithTitle url={img}></ImageHolderWithTitle>
      ))}
    </div>
  );
}
