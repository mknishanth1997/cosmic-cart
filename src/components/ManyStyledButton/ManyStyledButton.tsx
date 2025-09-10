"use client";
import { MouseEventHandler } from "react";
import styles from "./ManyStyledButton.module.css";
import { ReactNode, ElementType } from "react";
import React from "react";
type Variant = "primary" | "secondary" | "link";

type ButtonProp = {
  children: any;
  variant: Variant;
  Icon?: ElementType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ManyStyledButton({
  children,
  variant,
  Icon,
  onClick,
}: ButtonProp) {
  const className = colorHelper(variant);
  return (
    <button className={className} onClick={onClick} type="button">
      {Icon && <Icon size={24} color="inherit"></Icon>}
      {children}
    </button>
  );
}

function colorHelper(variant: Variant = "primary") {
  const v = {
    primary: `${styles.manyStyledButton} ${styles.primary}`,
    secondary: `${styles.manyStyledButton} ${styles.secondary} ${styles.gradientTEext}`,
    link: `${styles.manyStyledButton} ${styles.link}`,
  };
  return v[variant];
}
