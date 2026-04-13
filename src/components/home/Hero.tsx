"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Calendar, Terminal, Users, Zap, Shield, Rocket } from "lucide-react";
import gsap from "gsap";


export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const buttonsRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.8 }); // after preloader

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power4.out" }
      );
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");
    }
    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 text-left pointer-events-none flex flex-col lg:flex-row lg:justify-between items-center flex-wrap"
      >
        {/* Left Column: Text */}
        <div className="lg:w-[45%] w-full">


          {/* Headline */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <div className="text-white" style={{ textShadow: "0 0 30px rgba(255,255,255,0.2)" }}>
              DeepStation<span style={{ color: "#ef4444" }}>RIT</span>
            </div>
          </h1>

          </div>

        {/* Right Column: Descriptions & Actions */}
        <div className="lg:w-[35%] w-full flex flex-col justify-center items-end relative mt-16 lg:mt-0 pointer-events-auto text-right lg:pr-12">
          {/* Subtext */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed"
          >
            The official autonomous college chapter of the global DeepStation community.
            Join elite hackathons, expert-led sessions, and hands-on workshops shaping
            the future of AI at Ramaiah Institute of Technology.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-end gap-6 pointer-events-auto w-full"
          >
            <a
              href="#events"
              className="btn-primary group flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Explore Events
            </a>
            <a href="#hackathons" className="btn-outline flex items-center gap-2">
              <Terminal className="w-5 h-5" style={{ color: "#38a9f8" }} />
              View Hackathons
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
