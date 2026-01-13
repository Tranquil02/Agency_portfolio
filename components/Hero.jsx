import { ArrowRight, Sparkles } from "lucide-react";
import CyberWorkspace from "./cyberWork";
import GrowthSignals from "./growthSignals";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center lg:mt-20 px-4 md:px-8  overflow-hidden">
      <div className="container mx-auto relative z-10 lg:grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="">

          <h1
            className="text-4xl sm:text-6xl md:text-[9vw] lg:text-[8vw] font-black uppercase italic tracking-tighter leading-none py-[0.15em] text-left overflow-visible"
          >
            WE TURN <br />
            <span className="text-transparent pr-9 bg-clip-text bg-linear-to-r from-orange-500 via-white to-orange-800">
              IDEAS INTO
            </span>
            <br />
            IMPACT.
          </h1>


          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end justify-between pt-2 md:pt-4">
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8 md:mb-10 text-left">
                Mauryan Studio is a premium creative agency crafting <span className="text-white font-medium">high-performance</span> digital experiences. We design websites that convert.
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-8">
                <button className="flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-6 bg-orange-600 rounded-full font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-orange-600/30">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3 md:gap-4 group cursor-pointer bg-white text-black p-4 rounded-3xl hover:bg-orange-500 text-2xl hover:text-white hover:scale-105">
                  <div className="rounded-full border border-white/20 flex items-center justify-center transition-all">
                    <ArrowRight size={16} />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase">Our Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* animated laptop,keyboard and phone */}
        <div className="hidden md:flex items-center">
          <div className="w-full  relative">
            <CyberWorkspace />
            {/* <GrowthSignals /> */}
          </div>
        </div>

        {/* </div> */}

      </div>

      {/* <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 text-gray-700">
        <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-orange-600 to-transparent"></div>
      </div> */}
    </section >
  );
}
