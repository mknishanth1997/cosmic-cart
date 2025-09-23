"use client";
import React, { useEffect, useState } from "react";
import style from "./SuccessfullPageComp.module.css";
import { Rocket, Moon, Star, Trophy, Sparkles } from "lucide-react";
import PlanetaryCertificate from "./PlanetaryCertficate";
import DownloadSection from "./DownloadSection";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import Confetti from "react-confetti";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
import HeroSectionToPitchPage from "./HeroSectionToPitchPage";
const generatePDF = () => {
  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // ----- Background Gradient -----
  // Note: jsPDF doesn't directly support gradients; we can simulate with colored rectangle
  doc.setFillColor(10, 10, 40); // dark space blue
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  // ----- Border -----
  doc.setDrawColor(255, 215, 0); // gold
  doc.setLineWidth(4);
  doc.rect(20, 20, pageWidth - 40, pageHeight - 40, "S");

  // ----- Header -----
  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(255, 223, 0); // golden title
  doc.text("Galactic Planetary Ownership Certificate", pageWidth / 2, 80, {
    align: "center",
  });

  // ----- Subtitle -----
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.text(
    "This certifies that the following entity is the official owner of the interstellar body named:",
    pageWidth / 2,
    130,
    { align: "center", maxWidth: pageWidth - 100 }
  );

  // ----- Planet Name -----
  doc.setFont("helvetica", "bolditalic");
  doc.setFontSize(30);
  doc.setTextColor(135, 206, 235); // planetary blue
  doc.text("Planet Kepler-22b", pageWidth / 2, 180, { align: "center" });

  // ----- Decorative separator -----
  doc.setDrawColor(255, 223, 0);
  doc.setLineWidth(1.5);
  doc.line(80, 200, pageWidth - 80, 200);

  // ----- Message -----
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text(
    "Thank you for your intergalactic purchase. Please retain this certificate as proof of ownership.\n\nTravel arrangements and visitation rights are subject to Galactic Authority regulations.",
    pageWidth / 2,
    230,
    { align: "center", maxWidth: pageWidth - 100, lineHeightFactor: 1.4 }
  );

  // ----- Signature placeholders -----
  doc.setFontSize(16);
  doc.setTextColor(255, 223, 0);
  doc.text("Authorized Galactic Officer", 100, pageHeight - 80);
  doc.text("Purchaser Signature", pageWidth - 140, pageHeight - 80);

  // ----- Save PDF -----
  doc.save("Galactic_Planet_Certificate.pdf");
};
export default function SuccessfullPageComp() {
  const searchParams = useSearchParams();
  const input = searchParams.get("input");
  console.log("Success page got ID:", input);
  const [showConfetti, setShowConfetti] = useState(true); // start immediately
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const confettiDuration = 5; // seconds, easy to change
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    // Stop confetti after confettiDuration seconds
    const timer = setTimeout(
      () => setShowConfetti(false),
      confettiDuration * 1000
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Array of vibrant colors for maximum colorfulness
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FF4500",
    "#32CD32",
    "#1E90FF",
    "#FFD700",
    "#FF69B4",
    "#00CED1",
    "#FFA500",
    "#ADFF2F",
    "#4682B4",
    "#FF6347",
    "#BA55D3",
    "#20B2AA",
    "#FF1493",
    "#7CFC00",
    "#4169E1",
    "#FF8C00",
    "#9932CC",
    "#008B8B",
    "#DC143C",
    "#556B2F",
    "#191970",
    "#DAA520",
    "#4B0082",
    "#2E8B57",
  ];

  return (
    <div className={style.container}>
      <HeroSection />
      <div className="flex flex-col justify-center items-center gap-6 px-4 sm:px-0">
        <div className="hidden sm:block">
          <PlanetaryCertificate input={input} />
        </div>
        <DownloadSection onClick={generatePDF}></DownloadSection>
        <div className="w-full sm:w-auto flex justify-center">
          <ManyStyledButton onClick={askCameraAccess}>
            Meet the Moron
          </ManyStyledButton>
          {showConfetti && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={500}
              gravity={0.4}
              wind={0.1}
              colors={colors}
              recycle={true}
              initialVelocityX={{ min: -20, max: 20 }}
              initialVelocityY={{ min: -30, max: 0 }}
              drawShape={(ctx) => {
                const shapeType = Math.random();
                ctx.beginPath();
                if (shapeType < 0.25) {
                  ctx.arc(0, 0, 5, 0, 2 * Math.PI); // Circle
                } else if (shapeType < 0.5) {
                  ctx.rect(-4, -4, 8, 8); // Square
                } else if (shapeType < 0.75) {
                  ctx.moveTo(0, -5);
                  ctx.lineTo(5, 5);
                  ctx.lineTo(-5, 5);
                  ctx.closePath(); // Triangle
                } else {
                  for (let i = 0; i < 5; i++) {
                    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    const radius = i % 2 === 0 ? 5 : 2.5;
                    ctx.lineTo(
                      Math.cos(angle) * radius,
                      Math.sin(angle) * radius
                    );
                  }
                  ctx.closePath(); // Star
                }
                ctx.fill();
              }}
            />
          )}
        </div>
        <div className="animate-bounce mt-6">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <HeroSectionToPitchPage />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col  items-center text-center px-4 py-16 text-white overflow-x-hidden">
      {/* Planet images container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        <img
          src="/planet/planet1.webp"
          alt="Planet 1"
          className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
        />
        <img
          src="/planet/planet2.webp"
          alt="Planet 2"
          className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
        />
        <img
          src="/planet/planet3.webp"
          alt="Planet 3"
          className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
        />
        <img
          src="/planet/planet4.webp"
          alt="Planet 4"
          className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 break-words">
        You now officially own this planet! 🌍
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-base sm:text-lg max-w-xs sm:max-w-xl break-words">
        Claim your cosmic glory and show off your ownership certificate.
      </p>

      {/* Funny space icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 text-green-400">
        <Rocket className="w-6 sm:w-8 h-6 sm:h-8 hover:rotate-12 transition-transform" />
        <Moon className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-125 transition-transform" />
        <Star className="w-6 sm:w-8 h-6 sm:h-8 hover:animate-pulse" />
        <Trophy className="w-6 sm:w-8 h-6 sm:h-8 hover:-rotate-12 transition-transform" />
        <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 hover:animate-spin transition-transform" />
      </div>
    </section>
  );
}
async function askCameraAccess() {
  try {
    // Ask for video (camera) permission
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // If granted, you can attach the stream to a video element
    const videoElement = document.createElement("video");
    videoElement.srcObject = stream;
    videoElement.autoplay = true;
    videoElement.width = 640;
    videoElement.height = 480;
    document.body.appendChild(videoElement);

    console.log("Camera access granted!");
    return stream; // Return the stream for further use
  } catch (err) {
    console.error("Camera access denied or error:", err);
    alert("Camera access is required to use this feature.");
    return null;
  }
}
