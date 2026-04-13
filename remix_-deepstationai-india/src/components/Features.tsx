import { motion } from "motion/react";
import { Cpu, Globe, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const features = [
  {
    title: "Hackathons",
    description: "Compete in high-stakes AI challenges and build real-world solutions with top developers across India.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-400",
    id: "hackathons",
  },
  {
    title: "Events",
    description: "Learn from industry experts and AI researchers through interactive live sessions and deep dives.",
    icon: Globe,
    color: "from-purple-500 to-indigo-400",
    id: "events",
  },
  {
    title: "Workshops",
    description: "Hands-on technical training sessions focusing on the latest AI frameworks, tools, and best practices.",
    icon: Calendar,
    color: "from-brand-500 to-blue-400",
    id: "workshops",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Features() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.4,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: "power3.out",
          duration: 0.6,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Core <span className="text-brand-400">Offerings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            DeepStationAI India provides a comprehensive ecosystem for AI
            enthusiasts to grow, compete, and collaborate.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 perspective-1000"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              id={feature.id}
              variants={itemVariants}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative p-8 rounded-[2rem] glass-card hover:bg-white/10 transition-colors duration-500 overflow-hidden transform-style-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg relative z-10 transform translate-z-12",
                  feature.color
                )}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white relative z-10 transform translate-z-8">
                {feature.title}
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed relative z-10 transform translate-z-4">
                {feature.description}
              </p>
              <button className="flex items-center gap-2 text-brand-400 font-bold group-hover:gap-3 transition-all relative z-10 transform translate-z-8">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
