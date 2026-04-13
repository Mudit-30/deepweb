"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const coreMembers = [
  "Harshit Agrawal", "Anaghaa Patil", "Mudit Saxena", "Amogh Shastry",
  "Kartikey mani Tripathi", "Siddharth Priyatam", "Nikita Hedge", "Shyreyas"
];

const generalMembers = [
  "Swayam Bohara", "Venkatesh Reddy", "Shaik Imran", "Ananya Kalmath",
  "Yashmita", "gursharan kaur", "Harshita", "Vanshika", "Vibodharya Jampale Sathish",
  "Mihika Jain", "Akash Biswas", "Shriya Bhat", "Niranjan Nishore", "Sinchana",
  "Nysa Lakhotia", "Akash S", "Venkat", "Ishita Agarwal", "Supriya J",
  "Dakshitha S", "Mukul Prasad", "Sreejani Bhattacharya", "Vigyanth", "Deshena",
  "Rohan N Karadigudd", "Mohammed Mohsin Mahaboob Basha", "Omkar Tonne",
  "Subhash Kashyap K H", "Swastik R Phadke", "Pranav R Mane"
];

const crewMembers = [...coreMembers, ...generalMembers];

// Seeded random for deterministic organic layouts
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export function Testimonials() {
  const [activeNode, setActiveNode] = useState<any>(null);

  const { nodes, edges } = useMemo(() => {
    const list = [...crewMembers]; // Length 8 + 30 = 38
    const rand = mulberry32(10101); // Magic seed for best spacing
    
    const result = [];
    // 1 center + 7 ring1 + 12 ring2 + 18 ring3 = 38 Nodes
    const layers = [1, 7, 12, 18];
    // We adjust Radii to be slightly oval to match modern 16:9 screens better
    const radiiX = [0, 15, 30, 46]; 
    const radiiY = [0, 18, 35, 46];

    let currentIdx = 0;

    for (let ring = 0; ring < layers.length; ring++) {
      const count = layers[ring];
      const rx = radiiX[ring];
      const ry = radiiY[ring];
      for (let i = 0; i < count; i++) {
        if (currentIdx >= list.length) break;
        
        const angle = (i / count) * Math.PI * 2;
        const offset = ring * 0.4 + (rand() * 0.3); // Organic spiral offset
        const variance = ring === 0 ? 0 : rand() * 4; // Distance deviation
        
        const x = 50 + (rx + variance) * Math.cos(angle + offset);
        const y = 50 + (ry + variance) * Math.sin(angle + offset);
        
        const name = list[currentIdx];
        const words = name.split(" ");
        const initials = words.length > 1 ? words[0][0] + words[1][0] : words[0][0] + (words[0][1] || "");
        
        result.push({
           id: currentIdx,
           name,
           initials: initials.toUpperCase(),
           x, y,
           isBig: currentIdx < 8 // first 8 are marked Core/Big
        });
        currentIdx++;
      }
    }

    // Connect nodes to their closest neighbors to form synpatic edges
    const lines = [];
    for (let i = 0; i < result.length; i++) {
      let dists = result.map((n, idx) => ({ idx, d: Math.hypot(n.x - result[i].x, n.y - result[i].y) }));
      dists.sort((a,b) => a.d - b.d);
      
      lines.push({ source: i, target: dists[1].idx }); // Closet neighbor
      lines.push({ source: i, target: dists[2].idx }); // 2nd closest
      if (rand() > 0.4) lines.push({ source: i, target: dists[3].idx }); // Randomly 3rd closest
    }

    return { nodes: result, edges: lines };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-transparent flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]/50" style={{ boxShadow: "inset 0 0 100px rgba(24,134,202,0.15)" }} />
      </div>

      <div className="w-full px-4 lg:px-12 mx-auto relative z-10 text-left pt-12 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Crew <span style={{ color: "#52A9F0" }}>Network</span>
        </motion.h2>
        <p className="text-slate-400 max-w-xl text-sm mb-6">
          The brilliant minds driving DeepStation MSRIT. Click a node to explore.
        </p>
      </div>

      <div className="relative w-full flex-grow mx-auto overflow-hidden">
        {/* Synaptic Connections (SVG lines behind nodes) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {edges.map((edge, i) => {
             const s = nodes[edge.source];
             const t = nodes[edge.target];
             return (
               <motion.line 
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: i * 0.01 }}
                 key={i} 
                 x1={`${s.x}%`} y1={`${s.y}%`} 
                 x2={`${t.x}%`} y2={`${t.y}%`} 
                 stroke="rgba(82, 169, 240, 0.25)" 
                 strokeWidth={s.isBig && t.isBig ? 2.5 : 1} 
               />
             )
          })}
        </svg>

        {/* Interactive Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            onClick={() => setActiveNode(node)}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: node.id * 0.02, type: "spring", stiffness: 200, damping: 15 }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:z-20 border border-[#52A9F0]/60 transition-colors ${node.isBig ? "w-14 h-14 text-sm bg-[#1886CA] text-white font-bold" : "w-8 h-8 text-[10px] bg-[#020617] text-[#52A9F0] hover:bg-[#1886CA] hover:text-white"}`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, boxShadow: node.isBig ? "0 0 25px rgba(24,134,202,0.6)" : "none" }}
            whileHover={{ scale: 1.3, boxShadow: "0 0 30px rgba(82,169,240,0.8)" }}
          >
             {node.initials}
          </motion.div>
        ))}
      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
         {activeNode && (
           <motion.div
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setActiveNode(null)}
           >
             <motion.div
               initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
               className="glass-card max-w-sm w-full p-8 rounded-3xl relative border border-[#52A9F0]/30 shadow-2xl"
               onClick={(e) => e.stopPropagation()}
               style={{ background: "#020617" }}
             >
               <button onClick={() => setActiveNode(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                 <X size={20} />
               </button>
               <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold bg-[#1886CA] text-white mb-6 shadow-lg shadow-[#1886CA]/50">
                 {activeNode.initials}
               </div>
               <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>{activeNode.name}</h3>
               <p className="text-xs uppercase tracking-widest text-[#52A9F0] font-bold mb-6">{activeNode.isBig ? "Core Node / Architect" : "Active Member"}</p>
               
               <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                 {activeNode.isBig 
                   ? "Driving the neural network of our community forward. Specialized in computational architectures and accelerating DeepStation's core infrastructure."
                   : "Vital node within the DeepStation mesh. Focused on algorithmic exploration and integrating advanced systems into real-world applications."}
               </p>

               <button className="flex w-full items-center justify-center gap-2 bg-[#1886CA] hover:bg-[#52A9F0] active:scale-95 text-white py-3 rounded-full font-bold transition-all">
                 Connect <ExternalLink size={16} />
               </button>
             </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </section>
  );
}
