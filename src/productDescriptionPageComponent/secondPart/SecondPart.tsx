"use client";
import { useData } from "@/context/dataContext";
import { Thermometer, Sun, Globe } from "lucide-react";

export default function SecondPart({ id }) {
  const { cosmicShop, saveCosmicCart, allPlanetData } = useData();
  console.log(typeof id);
  const planet = allPlanetData.find((planet) => planet.planetId === id);
  return (
    <div className="flex justify-center ">
      <div className="w-[80%] p-4 sm:p-6 md:p-10 rounded-3xl shadow-lg backdrop-blur-sm bg-transparent bg-[linear-gradient(to_right,rgba(88,28,135,0.3)_0%,rgba(131,24,67,0.3)_100%)]">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Left side: Why Choose This Planet */}
          <div className="flex flex-col gap-6 text-white text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {`Why Choose ${planet?.planetName}?`}
            </h2>
            <ul className="list-disc list-inside text-base md:text-lg space-y-3 font-medium text-white ">
              {planet?.planetDescription.bulletPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Right side: Specifications Card */}
          <div className="relative md:w-1/2 p-6 md:p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <div className="flex flex-col gap-5">
              {/* Temperature */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 transition-all duration-300 hover:scale-105">
                <div className="p-2 rounded-full bg-red-500/30">
                  <Thermometer className="w-6 h-6 text-red-400" />
                </div>
                <span className="text-base md:text-lg font-semibold text-white">
                  Temperature: 70°C hot 🔥
                </span>
              </div>
              {/* Solar Exposure */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 transition-all duration-300 hover:scale-105">
                <div className="p-2 rounded-full bg-yellow-500/30">
                  <Sun className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-base md:text-lg font-semibold text-white">
                  Solar Exposure: Extreme ☀️
                </span>
              </div>
              {/* Gravity */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/60 transition-all duration-300 hover:scale-105">
                <div className="p-2 rounded-full bg-green-500/30">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-base md:text-lg font-semibold text-white">
                  Gravity: 1.2x Earth 🌍
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
