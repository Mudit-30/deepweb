import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "INITIALIZING DEEPSTATION AI CORE...",
    "ESTABLISHING NEURAL LINK...",
    "SYNCHRONIZING AI MODULES...",
    "LOADING VIRTUAL ENVIRONMENT...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Change text based on progress
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
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-[#020617] to-[#020617]" />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Logo / Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mb-8 border-4 border-t-brand-400 border-r-brand-400/30 border-b-brand-400/10 border-l-brand-400/30 rounded-full"
        />

        {/* Text */}
        <div className="h-6 mb-4 text-sm md:text-base tracking-widest text-center">
          {texts[textIndex]}
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 text-xs tracking-widest opacity-50">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
}
