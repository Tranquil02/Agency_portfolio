import { Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-black relative z-10 px-4">
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        {/* //logo and title */}
        <div className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic mb-8 md:mb-12">
          <Image
            src="/images/logo.png"
            alt="Mauryan Studio Logo"
            width={70}
            height={70}
            className="inline-block mb-2 object-contain"
            priority
          />
          MAURYAN <span className="text-orange-500">STUDIO</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 mb-12 md:mb-20">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram className="w-4 h-4 md:w-5 md:h-5" /> Instagram</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4 md:w-5 md:h-5" /> LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter className="w-4 h-4 md:w-5 md:h-5" /> Twitter</a>
        </div>
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <p className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-gray-800 uppercase">© 2026 Mauryan Studio • Handcrafted in India</p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <Globe size={14} className="text-orange-600" />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase text-gray-600">Available Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
