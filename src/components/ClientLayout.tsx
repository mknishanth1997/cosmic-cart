"use client";

import { useState } from "react";
import { SidebarFlowBite } from "@/Library/flow-bite/SideBar/SideBar";
import { Header } from "@/ProductCardDispalyPage/Header/Header1";
import { SecondaryHeader } from "@/ProductCardDispalyPage/Header/Header2";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarFlowBite isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="flex-1 flex flex-col">
        {/* Header with hamburger */}
        <Header onToggle={() => setIsOpen((prev) => !prev)} />
        <SecondaryHeader /> {/* put directly below main header */}
        <main className="p-4">{children}</main>
        {/* Page content */}
      </div>
    </div>
  );
}
