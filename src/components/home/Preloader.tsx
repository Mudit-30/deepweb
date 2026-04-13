"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "INITIALIZING DEEPSTATION AI CORE...",
    "ESTABLISHING NEURAL LINK...",
    "SYNCHRONIZING AI MODULES...",
    "LOADING VIRTUAL ENVIRONMENT...",
    "SYSTEM READY.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 20) setTextIndex(0);
    else if (progress < 40) setTextIndex(1);
    else if (progress < 70) setTextIndex(2);
    else if (progress < 95) setTextIndex(3);
    else setTextIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-brand-400 font-mono overflow-hidden"
      style={{ color: "#38a9f8" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,140,228,0.12),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mb-8 rounded-full"
          style={{
            border: "4px solid transparent",
            borderTopColor: "#38a9f8",
            borderRightColor: "rgba(56,169,248,0.3)",
            borderBottomColor: "rgba(56,169,248,0.1)",
            borderLeftColor: "rgba(56,169,248,0.3)",
          }}
        />

        <div className="h-6 mb-4 text-sm tracking-widest text-center" style={{ color: "#38a9f8" }}>
          {texts[textIndex]}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{
              background: "#38a9f8",
              boxShadow: "0 0 10px rgba(56,169,248,0.8)",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>

        <div className="mt-4 text-xs tracking-widest opacity-50" style={{ color: "#38a9f8" }}>
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
}
