import { PenTool, Rocket, Search, Terminal } from "lucide-react";

const procedure = [
  {
    id: "01",
    title: "Discovery & Strategy",
    icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
    desc: "We analyze your brand DNA and market competitors to architect a roadmap for absolute digital dominance."
  },
  {
    id: "02",
    title: "Design Artistry",
    icon: <PenTool className="w-6 h-6 md:w-8 md:h-8" />,
    desc: "Creating high-fidelity visual languages. We don't just design; we create emotional connections."
  },
  {
    id: "03",
    title: "Core Engineering",
    icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" />,
    desc: "Pixel-perfect development using bleeding-edge stacks. Performance is our non-negotiable standard."
  },
  {
    id: "04",
    title: "Impact Launch",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    desc: "The reveal. We deploy, optimize, and scale your presence to ensure immediate market impact."
  }
];

export default function Procedure() {

  return (
    <section id="procedure" className="py-10 md:py-15 relative z-10 bg-[#080808] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20 items-start text-left">
          <div>
            <h3 className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-2 md:mb-4 italic">Workflow</h3>
            <h4 className="text-4xl md:text-[7vw] font-black tracking-tighter uppercase italic leading-[0.9] mb-6 md:mb-8">THE <br className="hidden md:block" /> <span className="text-transparent pr-9 bg-clip-text bg-linear-to-r from-orange-500 via-white to-orange-800 not-italic">PROCESS</span></h4>
          </div>
          <div className="space-y-4 md:space-y-8">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed lg:mt-15">
              A systematic approach to excellence. We bridge the gap between complex ideas and seamless execution through a rigorous methodology.
            </p>
            <div className="flex gap-4">
              <div className="h-[1px] w-16 md:w-24 bg-orange-600 mt-2 md:mt-3"></div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-orange-600">Strict Quality Control</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden">
          {procedure.map((step, i) => (
            <div
              key={i}
              className="
        group relative bg-[#1d1c1cd2]
        p-8 md:p-12
        flex flex-col justify-between text-left
        transition-all duration-500 ease-out
        hover:bg-[#2c2c2c]
        hover:-translate-y-[2px]
      "
            >
              {/* Step Number */}
              <span
                className="
          absolute top-5 md:top-7 right-5 md:right-7
          text-[3rem] md:text-[4.5rem]
          font-black italic leading-none
          text-white/[0.5]
          transition-all duration-500
          group-hover:text-orange-500/[0.5]
          pointer-events-none
        "
              >
                {step.id}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
            w-12 h-12 md:w-16 md:h-16
            rounded-xl md:rounded-2xl
            bg-white/5 border border-white/5
            flex items-center justify-center
            text-orange-500
            mb-6 md:mb-8
            transition-all duration-300
            group-hover:bg-orange-600
            group-hover:text-white
            group-hover:border-orange-600
          "
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h5
                  className="
            text-xl md:text-2xl
            font-black uppercase italic tracking-tight
            mb-3 md:mb-4
            leading-none
            transition-colors duration-300
            group-hover:text-orange-500
          "
                >
                  {step.title}
                </h5>

                {/* Description */}
                <p
                  className="
            text-gray-500 text-sm md:text-base
            leading-relaxed max-w-xs
            transition-colors duration-300
            group-hover:text-gray-300
          "
                >
                  {step.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <span
                className="
          absolute bottom-0 left-0 h-[2px] w-0
          bg-gradient-to-r from-orange-500 to-orange-700
          transition-all duration-500
          group-hover:w-full
        "
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
