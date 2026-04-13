"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const archiveItems = [
  { 
    id: 1, 
    title: "Building AI Agents Workshop",  
    date: "William Falcon",    
    desc: "Join William Falcon, creator of PyTorch Lightning and CEO of Lightning AI, for a hands-on session on AI agent development. He introduced Lightning AI’s latest tools and demonstrated how they enable you to build lightning-fast, production-ready agents that scale effortlessly.",
    image: "/img/archives/page1_img1.png", 
    size: "md:col-span-2 md:row-span-2" 
  },
  { 
    id: 2, 
    title: "Florida AI Summit",      
    date: "DeepStation Network", 
    desc: "A massive convergence of AI operations leaders and product managers featuring speakers from General Motors, Red Hat AI, Elevance Health, Microsoft, and GE HealthCare.",
    image: "/img/archives/page2_img1.png", 
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 3, 
    title: "Vibe Coding Days",    
    date: "Miami",  
    desc: "Miami’s most creative tech community where developers, designers, founders, and curious minds come together to build amazing things. A perfect blend of creative energy and technical excellence using Vercel’s v0.",
    image: "/img/archives/page5_img1.png", 
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 4, 
    title: "OpenAI Academy Partner",        
    date: "OpenAI", 
    desc: "DeepStation partnered with OpenAI Academy to automatically generate comprehensive Knowledge Graphs from text documents, significantly enhancing RAG capabilities beyond traditional Vector-based approaches.",
    image: "/img/archives/page4_img1.png", 
    size: "md:col-span-1 md:row-span-2" 
  },
  { 
    id: 5, 
    title: "Vibe Models & Demos",      
    date: "Hackathon Track", 
    desc: "Showcasing vibe coded products developed tightly with global developers, demonstrating the power of rapid prototyping.",
    image: "/img/archives/page5_img2.png", 
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 6, 
    title: "Industry Sponsors",    
    date: "Global Partners",  
    desc: "Accelerating the DeepStation ecosystem with investment partners like a16z and former engineers from Apple.",
    image: "/img/archives/page3_img0.png", 
    size: "md:col-span-1 md:row-span-1" 
  },
];

export function MissionArchive() {
  const [selectedItem, setSelectedItem] = useState<typeof archiveItems[0] | null>(null);

  // Fallback handler if image fails to load (often PDF rips include tiny transparent spacer images instead of the real photo)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/img/archives/page1_img0.png"; // Fallback to first image
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10 w-full py-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase block mb-4"
            style={{ color: "#52A9F0" }}
          >
            Past Operations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mission <span style={{ color: "#52A9F0" }}>Archive</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: "200px" }}>
          {archiveItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer border border-[#52A9F0]/20 ${item.size} bg-[#020617] z-10`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Solid black base to completely block background */}
              <div className="absolute inset-0 bg-[#020617]" />

              {/* Extracted Image Background */}
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                onError={handleImageError}
                alt={item.title}
              />
              
              {/* Color overlay to ensure text is readable */}
              <div
                className="absolute inset-0 opacity-40 bg-black group-hover:opacity-20 transition-opacity duration-500"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-x-0 bottom-0 top-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6 text-center backdrop-blur-md bg-gradient-to-t from-[#020617] to-transparent"
              >
                <Maximize2 className="w-6 h-6 text-white mb-2 opacity-70" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
              </div>

              {/* Static Label bottom left */}
              <div className="absolute bottom-6 left-6 text-left pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>{item.title}</h3>
                <p className="text-xs uppercase tracking-widest text-[#52A9F0] drop-shadow-md font-bold">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            style={{ background: "rgba(2, 6, 23, 0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-8 right-8 p-3 rounded-full glass hover:bg-white/10 text-white transition-all z-[110]"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-auto md:aspect-video rounded-[3rem] overflow-hidden glass-card flex flex-col md:flex-row items-center"
              style={{ borderColor: "rgba(24,134,202,0.3)", background: "#020617" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Half */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#020617]">
                <img 
                  src={selectedItem.image} 
                  onError={handleImageError}
                  className="w-full h-full object-cover opacity-80"
                  alt={selectedItem.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020617] to-transparent opacity-80 pointer-events-none" />
              </div>

              {/* Modal Text Half */}
              <div className="relative z-10 w-full md:w-1/2 p-8 md:p-12 text-left">
                <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "#52A9F0" }}>
                  {selectedItem.date}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {selectedItem.title}
                </h2>
                
                <div className="w-16 h-1 mb-8" style={{ background: "linear-gradient(to right, #1886CA, transparent)" }} />
                
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
