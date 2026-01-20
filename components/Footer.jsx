import { Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/5 px-4">
      <div className="container mx-auto py-16 md:py-24 flex flex-col items-center text-center gap-10">

        {/* Logo + Brand */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Mauryan Studio Logo"
              width={32}
              height={32}
              priority
            />
          </div>
          <div className="text-sm font-bold tracking-widest">
            MAURYAN <span className="text-orange-500">STUDIO</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black tracking-[0.35em] uppercase text-gray-600">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
            aria-label="Instagram"
            target="_blank" rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/mauryan-s-studio/"
            className="flex items-center gap-2 hover:text-white transition-colors"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
            aria-label="Twitter"
            target="_blank" rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            Twitter
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[8px] md:text-[10px] font-black tracking-[0.35em] text-gray-800 uppercase text-center md:text-left">
            © 2026 Mauryan Studio • Handcrafted in India
          </p>

          <div className="flex items-center gap-3">
            <Globe size={14} className="text-orange-600" />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-gray-600">
              Available Globally
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
