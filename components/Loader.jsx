"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PreLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }

        const increment = Math.floor(Math.random() * 10) + 5; // 5–15%
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center gap-6 text-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
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

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-mono text-sm font-bold">
            {progress}%
          </span>
          <span className="text-gray-500 text-[10px] font-black tracking-[0.25em] uppercase">
            Initializing Assets
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 text-gray-600 text-[8px] font-black tracking-[0.4em] uppercase">
        © 2026 Mauryan Studio Online
      </div>
    </div>
  );
};

export default PreLoader;
