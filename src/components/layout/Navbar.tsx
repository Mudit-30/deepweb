"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Globe, Calendar, Users } from "lucide-react";

const links = [
  { label: "Hackathons", href: "#hackathons", icon: Cpu   },
  { label: "Events",     href: "#events",     icon: Globe  },
  { label: "Workshops",  href: "#workshops",  icon: Calendar },
  { label: "Team",       href: "#team",       icon: Users  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: scrolled ? "rgba(2,6,23,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          paddingTop: scrolled ? "0.75rem" : "1rem",
          paddingBottom: scrolled ? "0.75rem" : "1rem",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
              style={{ background: "#0e8ce4", boxShadow: "0 4px 16px rgba(14,140,228,0.3)" }}
            >
              <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>D</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block" style={{ fontFamily: "var(--font-display)" }}>
              DeepStation <span style={{ color: "#38a9f8" }}>× MSRIT</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="nav-link flex items-center gap-2"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#join"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="btn-primary py-2 px-5 text-sm"
            >
              Join Community
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass p-6 flex flex-col gap-4 md:hidden"
              style={{ borderTop: "none" }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="w-5 h-5" style={{ color: "#38a9f8" }} />
                  {link.label}
                </a>
              ))}
              <a href="#join" className="btn-primary w-full text-center py-3 mt-2" onClick={() => setMobileOpen(false)}>
                Join Community
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
