"use client";

import { useState } from "react";
import { SidebarFlowBite } from "@/Library/flow-bite/SideBar/SideBar";
import { Header } from "@/ProductCardDispalyPage/Header/Header1";
import { SecondaryHeader } from "@/ProductCardDispalyPage/Header/Header2";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex overflow-hidden">
      {/* Sidebar */}
      <SidebarFlowBite
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="z-30"
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col relative z-0 overflow-hidden">
        {/* Sticky headers */}
        <div className="sticky top-0 z-20 flex flex-col">
          <Header onToggle={() => setIsOpen((prev) => !prev)} />
          <SecondaryHeader />
        </div>

        {/* Page content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
