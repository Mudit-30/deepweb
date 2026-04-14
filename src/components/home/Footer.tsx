"use client";

import { MapPin, Mail, Globe } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialNetworks = [
    { name: "WhatsApp",  icon: WhatsappIcon,  href: "https://chat.whatsapp.com/Dcx4t7hvCcdIDCOc9FeQAq", color: "#25D366" },
    { name: "Twitter",   icon: TwitterIcon,   href: "https://x.com/DeepStationAI",                          color: "#1DA1F2" },
    { name: "LinkedIn",  icon: LinkedInIcon,  href: "https://www.linkedin.com/company/deepstation-bangalore/", color: "#0077b5" },
    { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/deepstationrit?igsh=MXNtZGYzZjVudGZjOQ==", color: "#E1306C" },
    { name: "YouTube",   icon: YouTubeIcon,   href: "https://www.youtube.com/@DeepStationAI",               color: "#FF0000" },
  ];

  return (
    <footer className="relative border-t overflow-hidden bg-transparent" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="w-full px-4 lg:px-12 mx-auto pt-24 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-6 lg:col-span-4">
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
          <p className="text-slate-400 leading-relaxed max-w-sm">
            The official autonomous college chapter of the global DeepStation AI community at Ramaiah Institute of Technology, Bangalore.
          </p>
        </div>

        {/* Social Buttons */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6">
          <h4 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>
            Connect With The Network
          </h4>
          <div className="flex flex-wrap gap-5 justify-start">
            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-8 py-5 rounded-2xl glass hover:bg-white/10 transition-all shadow-xl hover:-translate-y-1.5 border border-white/5 hover:border-white/20"
                style={{ "--hover-color": social.color } as React.CSSProperties}
              >
                <social.icon className="w-7 h-7 transition-all duration-300 group-hover:text-[var(--hover-color)] group-hover:scale-110 text-slate-300" />
                <span className="text-white font-bold text-lg tracking-wide">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6 lg:col-span-3">
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
