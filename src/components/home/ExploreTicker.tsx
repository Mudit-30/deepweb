"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Bot, MessageSquare, FileText, Zap, Mic, Globe, ArrowRight } from "lucide-react";

const tickerItems = [
  { icon: Brain,         title: "Neural Networks",  description: "Build and train deep learning architectures from scratch.", color: "#60a5fa" },
  { icon: Eye,           title: "Computer Vision",  description: "Explore visual AI systems for real-world applications.",      color: "#22d3ee" },
  { icon: Bot,           title: "Robotics Lab",     description: "Hands-on autonomous systems and embedded AI projects.",       color: "#c084fc" },
  { icon: MessageSquare, title: "NLP Research",     description: "Language models, transformers, and semantic understanding.",  color: "#818cf8" },
  { icon: FileText,      title: "Research Papers",  description: "Weekly deep dives into cutting-edge AI publications.",        color: "#38a9f8" },
  { icon: Zap,           title: "Hackathons",       description: "48-hour sprints to build AI solutions under pressure.",       color: "#facc15" },
  { icon: Mic,           title: "Expert Talks",     description: "Industry leaders and researchers share their knowledge.",     color: "#f472b6" },
  { icon: Globe,         title: "Open Source",      description: "Contribute to real-world AI projects with the community.",    color: "#4ade80" },
];

export function ExploreTicker() {
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div
        className="relative w-full overflow-hidden group"
      >
        <div className="flex animate-ticker w-fit group-hover:[animation-play-state:paused] py-4">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ width: "calc(100vw / 3)", minWidth: "300px" }}
            >
              <div
                className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(82,169,240,0.2)] transition-all duration-500 group/card h-full flex flex-col relative overflow-hidden"
                style={{ background: "rgba(0,24,48,0.85)", borderColor: "rgba(24,134,202,0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#52A9F0]/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 relative z-10">
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white relative z-10" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>

                <p className="text-slate-400 mb-8 leading-relaxed relative z-10 line-clamp-2">
                  {item.description}
                </p>

                <button className="mt-auto flex items-center gap-2 font-bold group-hover/card:gap-3 transition-all relative z-10" style={{ color: "#52A9F0" }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
