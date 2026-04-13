"use client";

import { motion } from "framer-motion";
import { X, Link, Mail, Globe, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Hackathons", href: "#" },
        { name: "Events",     href: "#events" },
        { name: "Workshops",  href: "#" },
        { name: "Community",  href: "#" },
      ],
    },
    {
      title: "Chapter",
      links: [
        { name: "About Us",  href: "#about" },
        { name: "Our Team",  href: "#team" },
        { name: "Partners",  href: "#" },
        { name: "Contact",   href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog",           href: "#" },
        { name: "FAQ",            href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "DeepStation.ai", href: "https://deepstation.ai" },
      ],
    },
  ];

  const socialLinks = [
    { icon: X,    href: "#",                            label: "X (Twitter)" },
    { icon: Link, href: "#",                            label: "GitHub"      },
    { icon: Mail, href: "mailto:msrit@deepstation.ai", label: "Email"       },
    { icon: Globe, href: "https://deepstation.ai",      label: "Website"     },
  ];

  return (
    <footer className="relative border-t overflow-hidden bg-transparent" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="w-full px-4 lg:px-12 mx-auto pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
              style={{ background: "#0e8ce4", boxShadow: "0 4px 16px rgba(14,140,228,0.3)" }}
            >
              <span className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>D</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              DeepStation <span style={{ color: "#38a9f8" }}>× MSRIT</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-xs">
            The official autonomous college chapter of the global DeepStation AI community at Ramaiah Institute of Technology, Bangalore.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {section.title}
            </h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm font-medium transition-colors hover:text-white"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#38a9f8" }} />
              <span>MSRIT, Bangalore, India</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "#38a9f8" }} />
              <span>msrit@deepstation.ai</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Globe className="w-5 h-5 flex-shrink-0" style={{ color: "#38a9f8" }} />
              <span>deepstation.ai</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full mx-auto px-4 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 pb-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-slate-500 text-sm font-medium">
          © {currentYear} DeepStation x MSRIT. All rights reserved.
        </p>
        <div className="flex items-center gap-8 text-slate-500 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "rgba(14,140,228,0.08)", filter: "blur(150px)" }}
      />
    </footer>
  );
}
