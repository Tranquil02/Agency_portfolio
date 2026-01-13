"use client";
import { Menu, X } from "lucide-react";
import useScroll from "@/hooks/useScroll";
import { useState } from "react";

export default function Navbar() {
  const scrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Procedure', href: '#procedure' },
    { name: 'Work', href: '#work' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 md:px-12 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-6 md:py-8'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-600 rounded-xl flex items-center justify-center transition-all group-hover:rotate-12">
              <span className="text-white font-black text-lg md:text-xl italic">M</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase leading-none">Mauryan</span>
              <span className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-[0.4em] leading-none mt-1">Studio</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-block text-[10px] font-black tracking-[0.2em] uppercase px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-all">
              Inquire
            </a>
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black tracking-tighter uppercase italic hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-12 py-4 bg-orange-600 text-white rounded-full font-black uppercase tracking-widest text-sm"
          >
            Start Project
          </a>
        </div>
      </div>
    </>
  );
}
