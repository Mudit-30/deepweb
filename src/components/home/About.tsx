"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Globe, Calendar, ArrowRight } from "lucide-react";
import gsap from "gsap";

const features = [
  {
    title: "Hackathons",
    description: "Compete in high-stakes AI challenges and build real-world solutions with top developers across India.",
    icon: Cpu,
    color: "linear-gradient(to bottom right, #3b82f6, #22d3ee)",
    id: "hackathons",
  },
  {
    title: "Expert Events",
    description: "Learn from industry experts and AI researchers through interactive live sessions and deep dives.",
    icon: Globe,
    color: "linear-gradient(to bottom right, #a855f7, #818cf8)",
    id: "workshops",
  },
  {
    title: "Workshops",
    description: "Hands-on technical training sessions focusing on the latest AI frameworks, tools, and best practices.",
    icon: Calendar,
    color: "linear-gradient(to bottom right, #0e8ce4, #60a5fa)",
    id: "events",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export function About() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 3D tilt effect via GSAP
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
        const rotateY = ((x - rect.width / 2)  / (rect.width / 2))  *  10;
        gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, ease: "power2.out", duration: 0.4 });
      };
      const handleMouseLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, ease: "power3.out", duration: 0.6 });
      };
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const titleRef    = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const bodyRef     = useRef<HTMLDivElement>(null);
  const bodyInView  = useInView(bodyRef,  { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-transparent">
      {/* Decorative blobs */}
      <div className="blob-orange w-[500px] h-[500px] -top-32 -left-32 opacity-30" />
      <div className="blob-sky   w-[500px] h-[500px] -bottom-20 -right-20 opacity-20" />

      <div className="w-full px-4 lg:px-12 mx-auto relative z-10">
        {/* ── Origin Story ── */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(14,140,228,0.2)" }}
            >
              <span className="text-xs font-black" style={{ color: "#38a9f8" }}>DS</span>
            </div>
            <span className="badge-orange">Origin Story</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  className="font-bold text-4xl lg:text-5xl text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                  initial={{ y: "100%" }}
                  animate={titleInView ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-2xl lg:text-3xl font-black tracking-[0.2em] text-[#ef4444] uppercase mb-4 block" style={{ textShadow: "0 0 20px rgba(239,68,68,0.5)"}}>EXPLORE THE STATION</span>
                  <span className="text-6xl lg:text-8xl font-black">What We Do.</span>
                </motion.h2>
              </div>
            </div>

            <div ref={bodyRef} className="space-y-5 pt-2 flex flex-col items-end text-right w-full lg:w-4/5 ml-auto">
              {[
                "Six months ago, DeepStation Founder & CEO Grant Kurz visited India to officially launch our expansion.",
                "The vision: to bring the relentless energy of Silicon Valley's AI community directly to the brightest engineering students India has to offer.",
                "DeepStation x MSRIT is the premier autonomous college chapter — the heartbeat of our India chapter at Ramaiah Institute of Technology.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  className="text-slate-400 text-base leading-relaxed max-w-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={bodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Core Offerings ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center mb-20 text-left">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 lg:mb-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Core <br className="hidden lg:block"/>
              <span style={{ color: "#38a9f8" }}>Offerings</span>
            </motion.h2>
          </div>
          <div className="flex flex-col justify-center items-end text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-300 max-w-sm text-xl leading-relaxed"
            >
              DeepStation x MSRIT provides a comprehensive ecosystem for AI enthusiasts to grow, compete, and collaborate.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              id={feature.id}
              variants={itemVariants}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group relative p-8 rounded-[2rem] glass-card hover:bg-white/10 transition-colors duration-500 overflow-hidden transform-style-3d"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10 translate-z-12"
                style={{ background: feature.color }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10 translate-z-8" style={{ fontFamily: "var(--font-display)" }}>
                {feature.title}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed relative z-10 translate-z-4">
                {feature.description}
              </p>
              <button
                className="flex items-center gap-2 font-bold group-hover:gap-3 transition-all relative z-10 translate-z-8"
                style={{ color: "#38a9f8" }}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(14,140,228,0.08)", filter: "blur(120px)" }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(99,102,241,0.06)", filter: "blur(120px)" }} />
    </section>
  );
}
