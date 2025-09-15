// app/productDescriptionPage/[id]/layout.tsx
import FooterPpd from "@/Library/flow-bite/FooterPpd";
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <FooterPpd></FooterPpd>
    </>
  );
}
