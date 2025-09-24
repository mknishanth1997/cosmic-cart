"use client";

import { useEffect } from "react";

export default function GlobalDarkReader({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Import darkreader dynamically on client-side only
    import("darkreader").then(({ enable }) => {
      enable({
        // brightness: 100,
        // contrast: 90,
        // sepia: 10,
      });
    });
  }, []);

  return <>{children}</>;
}
