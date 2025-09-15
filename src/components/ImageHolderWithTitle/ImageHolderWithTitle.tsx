import React from "react";
import Image from "next/image";
import styles from "./ImageHolderWithTitle.module.css";
type Props = {
  url: string;
  title: string;
};

export default function ImageHolderWithTitle({ url, title }: Props) {
  return (
    <div className={styles.imgContainer}>
      <Image src={url} alt="Planet" width={360} height={200} />
      <h3>{title}</h3>
    </div>
  );
}
