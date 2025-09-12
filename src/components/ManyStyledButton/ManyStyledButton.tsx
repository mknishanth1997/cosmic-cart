"use client";
import { MouseEventHandler, ReactNode, ElementType } from "react";
import styles from "./ManyStyledButton.module.css";
import React from "react";

type Variant = "primary" | "secondary" | "link";
type Size = "sm" | "md" | "lg";

type ButtonProp = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  Icon?: ElementType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ManyStyledButton({
  children,
  variant = "primary",
  size = "md",
  Icon,
  onClick,
}: ButtonProp) {
  const className = `${styles.manyStyledButton} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={className} onClick={onClick} type="button">
      {Icon && <Icon size={20} color="inherit" />}
      {children}
    </button>
  );
}

// Usage:
{
  /* <ManyStyledButton variant="primary" onClick={() => console.log("clicked")}>
  Button
</ManyStyledButton>; */
}
