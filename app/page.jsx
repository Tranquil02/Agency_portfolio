"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Procedure from "@/components/Procedure";
import Work from "@/components/Work";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import ToastTest from "@/components/Marquee";
import PreLoader from "@/components/Loader";


export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {loading ? (
        <PreLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
          {/* Background Decoration */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[80%] md:w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]"></div>
          </div>
          <Navbar />

          <Hero />
          {/* <ToastTest /> */}
          <Services />
          <Procedure />
          <Work />
          <Studio />
          <Contact />
          <Footer />

        </div>
      )}
    </>
  );
}
