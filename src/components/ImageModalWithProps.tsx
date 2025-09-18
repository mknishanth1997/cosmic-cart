"use client";

import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) {
  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
