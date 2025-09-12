"use client";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import "./page.module.css";
import { ProductDisplayCard } from "@/components/ProductDisplayCard/ProductDisplayCard";

export default function Home() {
  return (
    <>
      {/* {" "}
      <ManyStyledButton
        variant="primary"
        onClick={() => console.log("clicked")}
      >
        Button
      </ManyStyledButton>
      <ManyStyledButton variant="secondary">Secondary Button</ManyStyledButton>
      <ManyStyledButton variant="link">Button</ManyStyledButton>{" "}
      <p className="text-4xl text-red-500 bg-yellow-200 p-4">
        Tailwind works ✅
      </p>
      <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
        Green
      </span> */}

      <ProductDisplayCard></ProductDisplayCard>
    </>
  );
}
