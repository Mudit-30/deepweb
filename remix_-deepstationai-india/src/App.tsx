/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownTimer from "./components/CountdownTimer";
import ExploreTicker from "./components/ExploreTicker";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import MissionArchive from "./components/MissionArchive";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import PlanetScene from "./components/PlanetScene";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="relative min-h-screen bg-[#020617] text-slate-200 selection:bg-brand-500/30 overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-500 origin-left z-[60]"
          style={{ scaleX }}
        />

        {/* Galaxy Background Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]" />
          
          {/* Nebula Clouds */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse opacity-40" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-brand-500/5 blur-[120px] rounded-full animate-pulse opacity-30" style={{ animationDelay: '4s' }} />
        </div>

        {/* Global 3D Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <PlanetScene scrollYProgress={scrollYProgress} />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <CountdownTimer />
          <ExploreTicker />
          
          <div className="relative">
            <Features />
            <Testimonials />
            <MissionArchive />
            
            {/* CTA Section */}
            <section className="py-24 px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      stiffness: 100,
                      damping: 20,
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="max-w-5xl mx-auto rounded-[3rem] glass p-12 md:p-20 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight"
                  >
                    Ready to Shape the <br />
                    <span className="text-gradient">Future of AI?</span>
                  </motion.h2>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
                  >
                    Join India's most vibrant AI community today and get access to
                    exclusive hackathons, expert-led events, and hands-on workshops.
                  </motion.p>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-500/25 hover:scale-105 active:scale-95">
                      Join Now
                    </button>
                    <button className="w-full sm:w-auto glass hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95">
                      Contact Us
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </section>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}

