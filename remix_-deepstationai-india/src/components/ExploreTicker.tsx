import { motion } from "motion/react";
import { Brain, Eye, Bot, MessageSquare, FileText, Zap, Mic, Globe, ArrowRight } from "lucide-react";

const tickerItems = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Build and train deep learning architectures from scratch.",
    color: "text-blue-400",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Explore visual AI systems for real-world applications.",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "Robotics Lab",
    description: "Hands-on autonomous systems and embedded AI projects.",
    color: "text-purple-400",
  },
  {
    icon: MessageSquare,
    title: "NLP Research",
    description: "Language models, transformers, and semantic understanding.",
    color: "text-indigo-400",
  },
  {
    icon: FileText,
    title: "Research Papers",
    description: "Weekly deep dives into cutting-edge AI publications.",
    color: "text-brand-400",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "48-hour sprints to build AI solutions under pressure.",
    color: "text-yellow-400",
  },
  {
    icon: Mic,
    title: "Expert Talks",
    description: "Industry leaders and researchers share their knowledge.",
    color: "text-pink-400",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contribute to real-world AI projects with the community.",
    color: "text-green-400",
  },
];

export default function ExploreTicker() {
  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#52A9F0] text-xs font-bold tracking-[0.3em] uppercase block mb-4"
        >
          EXPLORE THE STATION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white"
        >
          What We <span className="text-[#52A9F0]">Do</span>
        </motion.h2>
      </div>

      <div 
        className="relative w-full overflow-hidden group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <div className="flex animate-ticker w-fit group-hover:[animation-play-state:paused] py-4">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[76.92vw] md:w-[calc(100vw/3)] px-4"
            >
              <div className="glass-card p-8 rounded-[2rem] border-[#1886CA]/30 hover:border-[#52A9F0] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(82,169,240,0.2)] transition-all duration-500 group/card h-full flex flex-col relative overflow-hidden bg-[#001830]/85">
                {/* Inner Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#52A9F0]/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 relative z-10 ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-white relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed relative z-10 line-clamp-2">
                  {item.description}
                </p>
                
                <button className="mt-auto flex items-center gap-2 text-[#52A9F0] font-bold group-hover/card:gap-3 transition-all relative z-10">
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
