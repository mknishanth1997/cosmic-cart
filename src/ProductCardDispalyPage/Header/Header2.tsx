"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { extractBlogsKeys } from "@/Data/blogsRawData";

export function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // for animation

  // Trigger animation after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-700 px-2 py-1 shadow-sm flex items-center justify-between
      transition-all duration-500 ease-out
      ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
    >
      {/* Scrollable blog links */}
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {extractBlogsKeys().map((key) => (
          <Link
            key={key}
            href={`/blogs/${key}`}
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 text-[14px] font-medium flex-shrink-0 transition-colors duration-200"
          >
            {key}
          </Link>
        ))}
      </div>

      {/* Dismiss button */}
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
