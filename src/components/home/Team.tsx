"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link2 } from "lucide-react";

const SPRING = { ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const teamData = [
  { name: "Grant Kurz",       role: "Founder",              org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fgrant-kurz.png&w=640&q=75"               },
  { name: "Gianni Crivello",  role: "Growth & Partnerships", org: "DeepStation",       img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fgianni-crivello.png&w=640&q=75"         },
  { name: "Michelle Haka",    role: "Chapter Head",          org: "DeepStation Brasil", img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fmichelle-haka.jpeg&w=640&q=75"         },
  { name: "Iris Caro",        role: "Director of Operations", org: "DeepStation",      img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Firis-caro.jpeg&w=640&q=75"              },
  { name: "Sonali Patel",     role: "Product Design",        org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fsonali-patel.jpeg&w=640&q=75"          },
  { name: "Alex Comerford",   role: "ML Engineer",           org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Falexander-comerford.jpeg&w=640&q=75"   },
  { name: "Izzy Matos",       role: "Producer",              org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fizzy.jpeg&w=640&q=75"                  },
  { name: "Muntaser Syed",    role: "AI Advocate",           org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fmuntaser.png&w=640&q=75"               },
  { name: "Malak El Baz",     role: "Software Engineer",     org: "DeepStation",        img: "https://deepstation.ai/_next/image?url=%2Fimg%2Fteam%2Fmalak.jpeg&w=640&q=75"                 },
];

function TeamCard({ member, index }: { member: typeof teamData[0]; index: number }) {
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="card-happy group p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ...SPRING }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Avatar with gradient ring */}
      <div className="relative mb-5">
        <div
          className="w-20 h-20 rounded-full p-0.5"
          style={{ background: "linear-gradient(135deg, #1886CA, #52A9F0)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden" style={{ border: "2px solid #020617" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
          </div>
        </div>
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "0 0 0 6px rgba(24,134,202,0.2)" }}
        />
      </div>

      <h3
        className="font-bold text-white text-base mb-0.5 group-hover:transition-colors duration-300"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {member.name}
      </h3>
      <p className="text-xs font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "#38a9f8" }}>
        {member.role}
      </p>
      <p className="text-slate-500 text-xs mb-4">{member.org}</p>

      <button
        className="flex items-center gap-1.5 text-xs font-bold text-slate-400 rounded-full px-3.5 py-1.5 transition-all duration-250 opacity-0 group-hover:opacity-100 glass hover:bg-white/10"
        style={{ border: "1px solid rgba(24,134,202,0.3)" }}
      >
        <Link2 className="w-3 h-3" />
        Connect
      </button>
    </motion.div>
  );
}

export function Team() {
  const titleRef    = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="team" className="relative py-24 px-6 overflow-hidden bg-transparent">
      <div className="blob-sky w-[500px] h-[500px] bottom-0 left-0 opacity-20" />

      <div className="w-full px-4 lg:px-12 mx-auto relative z-10">
        <div ref={titleRef} className="text-left mb-16">
          <motion.span
            className="badge-orange mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            👥 The Builders
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              className="font-bold text-4xl lg:text-5xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
              initial={{ y: "100%" }}
              animate={titleInView ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.85, delay: 0.1, ...SPRING }}
            >
              Meet Our Team
            </motion.h2>
          </div>
          <motion.p
            className="text-slate-400 text-base mt-3"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            The passionate human brains behind DeepStation — building the future of AI education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
