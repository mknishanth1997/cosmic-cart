import React from "react";
import Image from "next/image";
import styles from "./ImageHolderWithTitle2.module.css";
import { Tooltip } from "flowbite-react";

type Props = {
  url: string;
  title: string;
};

export default function ImageHolderWithTitle1({ url, title }: Props) {
  return (
    <div className={styles.imgContainer}>
      <div className="relative w-[363px] h-[192px] bg-blue-300 rounded-lg">
        <Image
          src={url}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
