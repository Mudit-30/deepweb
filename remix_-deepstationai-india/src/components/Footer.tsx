import { motion } from "motion/react";
import { Twitter, Github, Linkedin, Mail, Globe, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Hackathons", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Workshops", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
              <span className="text-white font-display font-bold text-xl">D</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">
              DeepStation <span className="text-brand-400">AI Club</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-xs">
            The ultimate open community platform for AI enthusiasts in India.
            Connecting developers, researchers, and industry experts.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-brand-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-white font-display font-bold text-lg">
              {section.title}
            </h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-400 transition-colors text-sm font-medium"
                  >
                    {link.name === "Webinars" ? "Events" : link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-6">
          <h4 className="text-white font-display font-bold text-lg">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <MapPin className="w-5 h-5 text-brand-400" />
              <span>Bangalore, India</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone className="w-5 h-5 text-brand-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail className="w-5 h-5 text-brand-400" />
              <span>hello@deepstationai.in</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Globe className="w-5 h-5 text-brand-400" />
              <span>www.deepstationai.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-slate-500 text-sm font-medium">
          © {currentYear} DeepStationAI India. All rights reserved.
        </p>
        <div className="flex items-center gap-8 text-slate-500 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />
    </footer>
  );
}
