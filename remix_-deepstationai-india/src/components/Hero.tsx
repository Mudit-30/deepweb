import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, Calendar, Terminal, Users, Zap, Shield, Rocket } from "lucide-react";

const stats = [
  { label: "Community Members", value: "10K+", icon: Users },
  { label: "Hackathons Hosted", value: "50+", icon: Zap },
  { label: "Expert Speakers", value: "100+", icon: Shield },
  { label: "Projects Launched", value: "500+", icon: Rocket },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
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
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 pointer-events-auto border-brand-400/30 shadow-[0_0_15px_rgba(56,169,248,0.3)]"
        >
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-200">
            India's Leading AI Community
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
        >
          <div className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">DeepStation</div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#52A9F0] via-[#1886CA] to-[#0065A5] drop-shadow-[0_0_30px_rgba(24,134,202,0.4)]">
            AI Club
          </div>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Join DeepStation AI Club, an open community platform hosting elite
          hackathons, expert events, and hands-on workshops to shape the
          future of artificial intelligence.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <button className="group relative bg-gradient-to-r from-[#1886CA] to-[#0065A5] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(24,134,202,0.5)] hover:shadow-[0_0_50px_rgba(82,169,240,0.8)] flex items-center gap-2 overflow-hidden border border-[#52A9F0]/50">
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Explore Events
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center gap-2 border-[#1886CA]/30 hover:border-[#52A9F0]/60 hover:shadow-[0_0_30px_rgba(24,134,202,0.4)]">
            <Terminal className="w-5 h-5 text-brand-400" />
            View Hackathons
          </button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-[3rem] glass-card border-brand-500/20 bg-brand-500/5 relative overflow-hidden mt-20 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-transparent to-indigo-500/10 opacity-50" />
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center relative z-10"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-6 h-6 text-brand-400 opacity-70" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
