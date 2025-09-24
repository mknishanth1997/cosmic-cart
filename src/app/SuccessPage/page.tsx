"use client";
import SuccessfullPageComp from "@/SuccessfullPageComp/SuccessfullPageComp";
import React, { Suspense } from "react";

export default function SuccessfullPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessfullPageComp />
      </Suspense>
    </div>
  );
}
