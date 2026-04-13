import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "AI Researcher",
    initials: "AS",
    quote: "DeepStationAI has been a game-changer for my research. The community is incredibly supportive and the hackathons are world-class.",
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
    quote: "Being part of 'The Crew' means access to the best AI minds in India. The collaborative spirit is what makes this place special.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            From <span className="text-[#52A9F0]">The Crew</span>
          </motion.h2>
        </div>

        <div 
          className="relative min-h-[400px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-60px] z-20 p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-60px] z-20 p-3 rounded-full glass hover:bg-white/10 text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="glass-card p-10 md:p-16 rounded-[3rem] border-[#1886CA]/30 relative overflow-hidden text-center bg-[#001830]/40 shadow-[0_0_50px_rgba(24,134,202,0.1)]">
                <Quote className="w-16 h-16 text-[#1886CA] opacity-20 absolute top-8 left-8" />
                
                <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-12 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1886CA] to-[#52A9F0] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#52A9F0] font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-[#52A9F0]" : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
