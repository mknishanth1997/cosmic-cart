"use client";

import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

type ToastMessageProps = {
  message: string;
  onClose: () => void;
};

export default function ToastMessage({ message, onClose }: ToastMessageProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>
      </Toast>
    </div>
  );
}
