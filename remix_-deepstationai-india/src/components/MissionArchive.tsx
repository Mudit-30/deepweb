import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

const archiveItems = [
  {
    id: 1,
    title: "Genesis Hackathon",
    date: "March 2026",
    color: "bg-[#001830]",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Neural Summit",
    date: "February 2026",
    color: "bg-[#1886CA]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Vision Workshop",
    date: "January 2026",
    color: "bg-[#0065A5]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Robo-Sprint",
    date: "December 2025",
    color: "bg-[#1886CA]",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    title: "NLP Deep Dive",
    date: "November 2025",
    color: "bg-[#001830]",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Open Source Day",
    date: "October 2025",
    color: "bg-[#0065A5]",
    size: "md:col-span-1 md:row-span-1",
  },
];

export default function MissionArchive() {
  const [selectedItem, setSelectedItem] = useState<typeof archiveItems[0] | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#52A9F0] text-xs font-bold tracking-[0.3em] uppercase block mb-4"
          >
            Past Operations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Mission <span className="text-[#52A9F0]">Archive</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {archiveItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${item.size} glass-card border-[#1886CA]/20`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Placeholder Color Block */}
              <div className={`absolute inset-0 ${item.color} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
              
              {/* Animated Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1886CA]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <Maximize2 className="w-8 h-8 text-white mb-4 opacity-70" />
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-medium tracking-wider uppercase text-xs">
                    {item.date}
                  </p>
                </motion.div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/95 backdrop-blur-xl"
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
              className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden glass-card border-[#1886CA]/30 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 ${selectedItem.color} opacity-90`} />
              <div className="relative z-10 text-center p-12">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                  {selectedItem.title}
                </h2>
                <p className="text-[#52A9F0] text-xl font-bold tracking-[0.3em] uppercase">
                  {selectedItem.date}
                </p>
                <div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-[#1886CA] to-transparent mx-auto" />
                <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg">
                  Archived data from the {selectedItem.title} mission. 
                  DeepStationAI continues to push the boundaries of collective intelligence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
