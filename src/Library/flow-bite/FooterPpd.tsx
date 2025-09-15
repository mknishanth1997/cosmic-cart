import React from "react";

export default function FooterPpd() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-center">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="/privacy"
            className="text-blue-400 hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-blue-400 hover:underline transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
