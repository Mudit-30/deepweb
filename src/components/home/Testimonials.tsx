"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "AI Researcher",
    initials: "AS",
    quote: "DeepStation AI Club has been a game-changer for my research. The community is incredibly supportive and the hackathons are world-class.",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Scientist",
    initials: "PP",
    quote: "The workshops here are hands-on and practical. I've learned more in one weekend than I did in months of self-study.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "ML Engineer",
    initials: "VS",
    quote: "Being part of the DeepStation crew means access to the best AI minds in India. The collaborative spirit is what makes this place special.",
  },
  {
    id: 4,
    name: "Ananya Krishnan",
    role: "Computer Vision Intern",
    initials: "AK",
    quote:
      "DeepStation x MSRIT opened doors I didn't know existed. I landed my first AI internship within 3 months of joining.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32 mx-auto relative z-10 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          From <span style={{ color: "#52A9F0" }}>The Crew</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="glass-card p-8 rounded-[2rem] flex flex-col justify-between"
              style={{ background: "rgba(0,24,48,0.4)" }}
            >
              <Quote className="w-8 h-8 opacity-20 mb-6" style={{ color: "#1886CA" }} />
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 flex-grow">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "linear-gradient(to bottom right, #1886CA, #52A9F0)" }}
                >
                  {testimonial.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">
                    {testimonial.name}
                  </span>
                  <span className="font-semibold" style={{ color: "#52A9F0" }}>
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
