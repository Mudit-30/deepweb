import { motion } from "motion/react";
import React from "react";

export const GalaxyBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  const nebulaOrbs = [
    { color: "bg-blue-600/20", size: "w-[600px] h-[600px]", x: "10%", y: "20%", duration: 20 },
    { color: "bg-indigo-600/20", size: "w-[500px] h-[500px]", x: "60%", y: "50%", duration: 25 },
    { color: "bg-cyan-600/10", size: "w-[700px] h-[700px]", x: "30%", y: "70%", duration: 30 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] z-0">
      {/* Nebula Clouds */}
      {nebulaOrbs.map((orb, i) => (
        <motion.div
          key={`nebula-${i}`}
          className={`absolute rounded-full blur-[120px] ${orb.color} ${orb.size}`}
          initial={{ x: orb.x, y: orb.y, scale: 0.8 }}
          animate={{
            x: [orb.x, `${parseInt(orb.x) + 5}%`, orb.x],
            y: [orb.y, `${parseInt(orb.y) + 5}%`, orb.y],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: star.size > 2 ? "0 0 10px rgba(255, 255, 255, 0.8)" : "none",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Galaxy Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-blue-900/20 via-transparent to-transparent opacity-50" />
    </div>
  );
};
