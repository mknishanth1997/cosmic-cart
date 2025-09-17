import React from "react";

export default function PlanetaryCertificate({
  input,
}: {
  input: string | null;
}) {
  return (
    <div className="bg-slate-900 border-2 border-teal-400 rounded-lg p-8 sm:p-12 w-full max-w-xl mx-auto shadow-2xl text-center relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-10">
        {/* Title Section */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-teal-300 drop-shadow-[0_0_5px_rgba(0,255,200,0.7)] uppercase">
            Planetary Ownership
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-wide text-teal-200 uppercase">
            Certificate
          </h2>
        </div>

        {/* Certificate Details */}
        <div className="flex-grow space-y-8 sm:space-y-12 flex flex-col justify-center">
          <div className="p-4 sm:p-6 border-2 border-teal-400/50 rounded-lg backdrop-blur-sm bg-black/20 ">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              This certificate confirms ownership of
            </p>
            <p className="text-white text-3xl sm:text-4xl font-bold font-serif italic">
              Earth (Sol-3)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-left border-t border-b border-teal-400/50 pt-6 pb-6 sm:pt-10 sm:pb-10">
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Designated Owner
              </p>
              <p className="text-white text-2xl sm:text-3xl font-semibold">
                {input || "John Doe"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                Acquisition Date
              </p>
              <p className="text-white text-2xl sm:text-3xl font-semibold">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full pt-8 text-center">
          <p className="text-gray-500 text-xs italic leading-relaxed">
            "7 billion hostile humans included. Enjoy responsibly.
            <br />
            No refunds or exchanges."
          </p>
          <p className="text-teal-400 text-xs mt-2 uppercase">
            Intergalactic Council of Real Estate
          </p>
        </div>
      </div>
    </div>
  );
}
