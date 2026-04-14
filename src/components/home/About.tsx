"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Calendar, ArrowRight, BookOpen, Users, MessageCircle, HeartHandshake } from "lucide-react";
import gsap from "gsap";

const features = [
  {
    title: "Hackathons",
    description: "Push your limits in our intense, high-stakes AI hackathons. Build real-world solutions alongside the top elite developers across the country.",
    icon: Cpu,
    color: "linear-gradient(to bottom right, #3b82f6, #22d3ee)",
    link: "https://deepstation.ai/hackathons",
  },
  {
    title: "Events",
    description: "Immerse yourself in our premier expert-led workshops and interactive technical deep-dives to master cutting-edge AI frameworks.",
    icon: Calendar,
    color: "linear-gradient(to bottom right, #a855f7, #818cf8)",
    link: "https://luma.com/DeepStation",
  },
  {
    title: "Community Directory",
    description: "Network with over 4,000 global AI innovators, researchers, and engineers. Find your next co-founder or collaborator right here.",
    icon: Users,
    color: "linear-gradient(to bottom right, #f59e0b, #fcd34d)",
    link: "https://deepstation.ai/community",
  },
  {
    title: "Blogs",
    description: "Read thought-provoking articles, tutorials, and research breakdowns directly from the minds pioneering the future of AI.",
    icon: BookOpen,
    color: "linear-gradient(to bottom right, #10b981, #34d399)",
    link: "https://deepstation.ai/blog",
  },
  {
    title: "Join India Chapter",
    description: "Become part of the most exclusive autonomous AI tech community in the nation. Join our official WhatsApp group to stay connected.",
    icon: MessageCircle,
    color: "linear-gradient(to bottom right, #25D366, #128C7E)",
    link: "https://chat.whatsapp.com/Dcx4t7hvCcdIDCOc9FeQAq",
  },
  {
    title: "Apply as Volunteer/Sponsor",
    description: "Drive the revolution. Apply to become a dedicated volunteer or bring your brand to the bleeding edge as an official event sponsor.",
    icon: HeartHandshake,
    color: "linear-gradient(to bottom right, #ef4444, #f87171)",
    link: "#join",
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
    const cleanups: (() => void)[] = [];
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
      cleanups.push(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
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
            <span className="badge-orange">Latest Updates</span>
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

            <div ref={bodyRef} className="space-y-6 pt-2 flex flex-col items-end text-right w-full lg:w-4/5 ml-auto">
              <motion.p
                className="text-slate-300 text-2xl md:text-3xl leading-relaxed max-w-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={bodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Check out what's happening at the <span style={{ color: "#38a9f8" }}>Station</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={bodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 pt-4"
              >
                <a
                  href="https://deepstation.ai/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1886CA] hover:bg-[#52A9F0] active:scale-95 text-white text-lg px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(24,134,202,0.4)] hover:shadow-[0_0_40px_rgba(82,169,240,0.6)]"
                >
                  <BookOpen className="w-6 h-6" />
                  View Our Blogs
                </a>
              </motion.div>
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
        <div className="relative w-full overflow-hidden group">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex animate-ticker w-fit group-hover:[animation-play-state:paused] py-4"
          >
            {[...features, ...features].map((feature, index) => (
              <motion.div
                key={`${feature.title}-${index}`}
                variants={itemVariants}
                className="flex-shrink-0 px-4"
                style={{ width: "350px" }}
              >
                <div
                  className="group/card relative p-8 rounded-[2rem] glass-card hover:bg-white/10 transition-colors duration-500 overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                    style={{ background: feature.color }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white relative z-10" style={{ fontFamily: "var(--font-display)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-100 font-medium mb-8 leading-relaxed relative z-10 flex-grow text-[15px] drop-shadow-md">
                    {feature.description}
                  </p>
                  <a
                    href={feature.link}
                    target={feature.link.startsWith("http") ? "_blank" : "_self"}
                    rel={feature.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 font-bold group-hover/card:gap-3 transition-all relative z-10 mt-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full w-fit shadow-lg shadow-black/20"
                    style={{ color: "#fff" }}
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(14,140,228,0.08)", filter: "blur(120px)" }} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(99,102,241,0.06)", filter: "blur(120px)" }} />
    </section>
  );
}
