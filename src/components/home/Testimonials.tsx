"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const coreMembers = [
  "Grant Kurz", "Harshit Agrawal", "Anaghaa Patil", "Mudit Saxena", "Amogh Shastry",
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

const imageMap: Record<string, string> = {
  "Grant Kurz": "/img/crew/grant kurz.jpeg",
  "Akash S": "/img/crew/Akash S.jpeg",
  "Anaghaa Patil": "/img/crew/Anaghaa.jpeg",
  "Harshit Agrawal": "/img/crew/Harshit.jpeg",
  "Mudit Saxena": "/img/crew/Mudit.jpeg",
  "Mukul Prasad": "/img/crew/Mukul.jpeg",
  "Niranjan Nishore": "/img/crew/Niranjan Nichore.jpeg",
  "Rohan N Karadigudd": "/img/crew/Rohan.jpeg",
  "Akash Biswas": "/img/crew/akash biswas.jpeg",
  "Amogh Shastry": "/img/crew/amogh.jpeg",
  "Ishita Agarwal": "/img/crew/ishita.jpeg",
  "Nikita Hedge": "/img/crew/nikita ravindra.jpeg",
  "Nysa Lakhotia": "/img/crew/nysa.jpeg",
  "Siddharth Priyatam": "/img/crew/siddharth.jpeg",
  "Sinchana": "/img/crew/sinchana.jpeg",
  "Vanshika": "/img/crew/vanshika.jpeg",
  "Vibodharya Jampale Sathish": "/img/crew/vibodharya.jpeg",
  "Vigyanth": "/img/crew/vigyanth.jpeg",
  "Yashmita": "/img/crew/yashmita Sudhir.jpeg"
};

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
    
    const result: any[] = [];
    // 1 center + 7 ring1 + 12 ring2 + 18 ring3 = 38 Nodes
    const layers = [1, 7, 12, 18];
    // We adjust Radii to be strictly systematic and spread out to avoid clutter
    const radiiX = [0, 20, 36, 48]; 
    const radiiY = [0, 24, 40, 48];

    let currentIdx = 0;

    for (let ring = 0; ring < layers.length; ring++) {
      const count = layers[ring];
      const rx = radiiX[ring];
      const ry = radiiY[ring];
      for (let i = 0; i < count; i++) {
        if (currentIdx >= list.length) break;
        
        const angle = (i / count) * Math.PI * 2;
        // Perfectly systematic offset mathematically distributing the rings
        const offset = ring * (Math.PI / count); 
        
        const x = 50 + rx * Math.cos(angle + offset);
        const y = 50 + ry * Math.sin(angle + offset);
        
        const name = list[currentIdx];
        const words = name.split(" ");
        const initials = words.length > 1 ? words[0][0] + words[1][0] : words[0][0] + (words[0][1] || "");
        
        result.push({
           id: currentIdx,
           name,
           initials: initials.toUpperCase(),
           image: imageMap[name] || null,
           x, y,
           isBig: currentIdx < 8 // first 8 are marked Core/Big
        });
        currentIdx++;
      }
    }

    // Connect nodes to their closest neighbors to form synpatic edges
    const lines: any[] = [];
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
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
            viewport={{ once: true }}
            transition={{ delay: node.id * 0.02, type: "spring", stiffness: 200, damping: 15 }}
            className={`absolute rounded-full flex items-center justify-center cursor-pointer shadow-lg border border-[#52A9F0]/60 transition-colors ${node.isBig ? "w-20 h-20 md:w-24 md:h-24 text-sm bg-[#1886CA] text-white font-bold" : "w-12 h-12 md:w-16 md:h-16 text-[10px] md:text-sm bg-[#020617] text-[#52A9F0] hover:bg-[#1886CA] hover:text-white"}`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, boxShadow: node.isBig ? "0 0 25px rgba(24,134,202,0.6)" : "none", zIndex: node.isBig ? 10 : 1 }}
            whileHover={{ scale: 1.15, zIndex: 50, boxShadow: "0 0 40px rgba(82,169,240,1)" }}
          >
             {node.image ? (
                <img src={node.image} alt={node.name} className="w-full h-full object-cover rounded-full" />
             ) : (
                node.initials
             )}
          </motion.div>
        ))}
      </div>

      {/* Member Profile Modal */}
      <AnimatePresence>
         {activeNode && (
           <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#020617]/80 backdrop-blur-md"
              onClick={() => setActiveNode(null)}
            >
             <motion.div
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.95, opacity: 0 }}
               className="relative w-full max-w-4xl aspect-auto md:h-[400px] rounded-[2rem] overflow-hidden glass-card flex flex-col md:flex-row items-stretch shadow-[0_0_50px_rgba(24,134,202,0.15)]"
               style={{ borderColor: "rgba(24,134,202,0.3)", background: "#020617" }}
               onClick={(e) => e.stopPropagation()}
             >
               {/* Modal Image Half */}
               <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#020617] border-b md:border-b-0 md:border-r border-[#52A9F0]/20">
                 {activeNode.image ? (
                   <img 
                     src={activeNode.image} 
                     className="w-full h-full object-cover opacity-90"
                     alt={activeNode.name} 
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-6xl font-bold bg-[#1886CA] text-white">
                     {activeNode.initials}
                   </div>
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#020617] to-transparent opacity-60 pointer-events-none" />
               </div>

               {/* Modal Text Half */}
               <div className="relative z-10 w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-left">
                 <button onClick={() => setActiveNode(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white hover:rotate-90 transition-all duration-300">
                   <X size={24} />
                 </button>
                 
                 <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#52A9F0" }}>
                   {activeNode.isBig ? "Core Architect" : "DeepStation Operator"}
                 </p>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                   {activeNode.name}
                 </h2>
                 
                 <div className="w-12 h-1 mb-6" style={{ background: "linear-gradient(to right, #1886CA, transparent)" }} />
                 
                 <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                   {activeNode.isBig 
                     ? "Driving the neural network of our community forward. Specialized in computational architectures and accelerating DeepStation's core infrastructure."
                     : "Vital node within the DeepStation mesh. Focused on algorithmic exploration and integrating advanced systems into real-world applications."}
                 </p>

                 <a 
                   href="#" 
                   className="inline-flex w-fit items-center justify-center gap-2 bg-transparent border border-[#1886CA] hover:bg-[#1886CA] active:scale-95 text-white px-6 py-3 rounded-full font-bold transition-all text-sm hover:shadow-[0_0_20px_rgba(24,134,202,0.4)]"
                 >
                   Connect on LinkedIn <ExternalLink size={16} />
                 </a>
               </div>
             </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
    </section>
  );
}
