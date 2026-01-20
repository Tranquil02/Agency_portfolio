import { useEffect, useState } from "react";

const PreLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay after 100% for smoothness
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Random jumps for realistic feel
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 text-center">
        {/* Branding Reveal */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-white text-2xl md:text-4xl font-black uppercase italic tracking-[0.3em] animate-pulse">
            MAURYAN <span className="text-orange-600">STUDIO</span>
          </h1>
        </div>

        {/* Progress Container */}
        <div className="w-64 md:w-80 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-orange-500 font-mono text-sm font-bold tracking-widest">
            {progress}%
          </span>
          <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
            INITIALIZING ASSETS
          </span>
        </div>
      </div>

      {/* Aesthetic Footer for Loader */}
      <div className="absolute bottom-12 text-gray-600 text-[8px] font-black tracking-[0.5em] uppercase">
        © 2026 MAURYAN STUDIO ONLINE
      </div>
    </div>
  );
};

export default PreLoader;