"use client";

import { useState } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { HiClipboardCopy, HiShare } from "react-icons/hi";

export default function ShareSpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Actions */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-center space-y-3 gap-2 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Share */}
        <button className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border shadow hover:bg-gray-50">
          <HiShare className="w-5 h-5" />
          <span className="sr-only">Share</span>
        </button>

        {/* Copy */}
        <button className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-lg border shadow hover:bg-gray-50">
          <HiClipboardCopy className="w-5 h-5" />
          <span className="sr-only">Copy</span>
        </button>

        {/* WhatsApp */}
        <button className="flex justify-center items-center w-[52px] h-[52px] text-white bg-green-500 rounded-lg shadow hover:bg-green-600">
          <FaWhatsapp className="w-5 h-5" />
          <span className="sr-only">WhatsApp</span>
        </button>

        {/* Telegram */}
        <button className="flex justify-center items-center w-[52px] h-[52px] text-white bg-sky-500 rounded-lg shadow hover:bg-sky-600">
          <FaTelegramPlane className="w-5 h-5" />
          <span className="sr-only">Telegram</span>
        </button>
      </div>

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center text-white bg-gray-700 rounded-lg w-[52px] h-[43px] hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none"
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
}
