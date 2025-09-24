"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SidebarFlowBite } from "@/Library/flow-bite/SideBar/SideBar";
import { Header } from "@/ProductCardDispalyPage/Header/Header1";

const blogTitles = [
  "Mars: The Celestial Wonder",
  "Venus: Hellishly Hot but Gorgeous",
];

export function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isVisible) return null;

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-700 px-2 py-1 shadow-sm flex items-center justify-between
        transition-all duration-500 ease-out
        ${
          isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
    >
      {/* Scrollable links container */}
      <div className="flex-1 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-600">
        <div className="flex gap-4 min-w-[max-content]">
          {blogTitles.map((title, index) => (
            <Link
              key={index}
              href={`/blogs/${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-[14px] font-medium flex-shrink-0 whitespace-nowrap transition-colors duration-200"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

{
  /* {extractBlogsKeys().map((key) => (
          <Link
            key={key}
            href={`/blogs/${key}`}
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-[14px] font-medium flex-shrink-0 transition-colors duration-200"
          >
            {key}
          </Link>
        ))} */
}
