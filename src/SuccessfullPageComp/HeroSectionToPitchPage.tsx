"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 18, stiffness: 110 },
    },
  };
  const buttonPulse = {
    scale: [1, 1.06, 1],
    boxShadow: [
      "0 0 24px rgba(99,102,241,0.6)",
      "0 0 46px rgba(147,51,234,0.9)",
      "0 0 24px rgba(99,102,241,0.6)",
    ],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 sm:px-12 overflow-hidden"
      style={{
        backgroundImage: "url('/spacewall5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // remove backgroundAttachment: 'fixed' on mobile if trouble — kept out for stability
      }}
    >
      {/* overlays: make bg slightly lighter so planet shows through */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      </div>

      {/* content: smaller max-width so headline breaks cleanly; lots of vertical padding for breathing */}
      <motion.div
        className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 py-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-base sm:text-sm font-medium text-gray-300 tracking-wide"
          variants={itemVariants}
        >
          Your new world awaits. But how will you get there?
        </motion.h3>

        {/* BIG fluid headline:
            - clamp(min, preferred, max) makes it scale with viewport
            - max-w-3xl narrows line-length so it wraps nicely
            - lineHeight is tight but readable
        */}
        <motion.h1
          className="w-full max-w-3xl font-extrabold tracking-tight text-indigo-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.85)]"
          style={{
            // fluid typography: adjust the max (12rem) if you want it even bigger
            fontSize: "clamp(2.25rem, 5.5vw + 1rem, 12rem)",
            lineHeight: 1, // tight but not crushed
            marginBottom: 0,
          }}
          variants={itemVariants}
        >
          Invest in Your Country&apos;s
          <br />
          <span
            className="text-purple-400"
            style={{
              // slightly smaller to keep visual hierarchy but still huge on desktop
              fontSize: "clamp(2rem, 5vw + 1rem, 10rem)",
            }}
          >
            Space Program
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-gray-300 text-lg leading-relaxed"
          variants={itemVariants}
          style={{ marginTop: "0.75rem", marginBottom: "1.5rem" }}
        >
          From rockets to colonies — back the mission today and help launch the
          future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-6"
          variants={itemVariants}
        >
          <motion.button
            className="px-14 py-5 rounded-full font-bold text-lg uppercase tracking-wide text-white bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            animate={buttonPulse}
          >
            🚀 Fund the Mission
          </motion.button>

          <motion.button
            className="px-12 py-4 rounded-full font-semibold text-lg backdrop-blur-md bg-white/10 border border-white/30 shadow-lg text-white hover:bg-white/20 hover:border-white/50 transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            🌌 Explore Options
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
