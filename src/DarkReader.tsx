// components/GlobalDarkReader.tsx
"use client";

import { useEffect } from "react";
import { enable as enableDarkReader } from "darkreader";

export default function GlobalDarkReader({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    enableDarkReader({
      //   brightness: 100,
      //   contrast: 90,
      //   sepia: 10,
    });
  }, []);

  return <>{children}</>;
}
