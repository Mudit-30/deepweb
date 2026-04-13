"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const archiveItems = [
  { id: 1, title: "Genesis Hackathon",  date: "March 2026",    color: "#001830", size: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Neural Summit",      date: "February 2026", color: "#1886CA", size: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Vision Workshop",    date: "January 2026",  color: "#0065A5", size: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Robo-Sprint",        date: "December 2025", color: "#1886CA", size: "md:col-span-1 md:row-span-2" },
  { id: 5, title: "NLP Deep Dive",      date: "November 2025", color: "#001830", size: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Open Source Day",    date: "October 2025",  color: "#0065A5", size: "md:col-span-1 md:row-span-1" },
];

export function MissionArchive() {
  const [selectedItem, setSelectedItem] = useState<typeof archiveItems[0] | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
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
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer glass-card ${item.size}`}
              style={{ borderColor: "rgba(24,134,202,0.2)" }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Color block */}
              <div
                className="absolute inset-0 opacity-80 group-hover:scale-110 transition-transform duration-700"
                style={{ background: item.color }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm"
                style={{ background: "rgba(24,134,202,0.8)" }}
              >
                <Maximize2 className="w-8 h-8 text-white mb-4 opacity-70" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-white/80 font-medium tracking-wider uppercase text-xs">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)" }}
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
              className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden glass-card flex items-center justify-center"
              style={{ borderColor: "rgba(24,134,202,0.3)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 opacity-90" style={{ background: selectedItem.color }} />
              <div className="relative z-10 text-center p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {selectedItem.title}
                </h2>
                <p className="text-xl font-bold tracking-[0.3em] uppercase" style={{ color: "#52A9F0" }}>
                  {selectedItem.date}
                </p>
                <div className="mt-12 w-24 h-1 mx-auto" style={{ background: "linear-gradient(to right, transparent, #1886CA, transparent)" }} />
                <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg">
                  Archived data from the {selectedItem.title} mission. DeepStation x MSRIT continues to push the boundaries of collective intelligence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
