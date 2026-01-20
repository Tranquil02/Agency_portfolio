import { Target } from "lucide-react";

const team = [
  {
    name: "KESHAV KUMAR",
    role: "FOUNDER & CEO",
    tag: "Visionary",
    image: "/images/keshav.jpeg",
  },
  {
    name: "PRASHANT KUMAR RAJAK",
    role: "CO-FOUNDER & LEAD DEV",
    tag: "Architect",
    image: "/images/prashant.jpg",
  },
  {
    name: "ABHISHEK BHARADWAJ",
    role: "HEAD OF GROWTH & CFO",
    tag: "Strategy",
    image: "/images/abhishek.jpeg",
  },
];


export default function Studio() {

  return (
    <section id="studio" className="py-10 md:py-15 bg-[#0A0A0A] relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-12 relative z-10 text-left">
        <div className="max-w-4xl mb-10 md:mb-20">
          <h2 className="text-orange-500 text-[9px] md:text-[11px] font-black tracking-[0.6em] uppercase mb-6 md:mb-8 italic lg:ml-10 ">Team</h2>
          <h3 className="text-4xl md:text-[8vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] italic uppercase">THE MINDS BEHIND <br className="hidden md:block" /> <span className="text-transparent pr-9 bg-clip-text bg-linear-to-r from-orange-500 via-white to-orange-800 not-italic">THE STUDIO</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((leader, i) => (
            <div
              key={i}
              className="group relative h-[450px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-900 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(234,88,12,0.3)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Bottom Gradient Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-600/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

              {/* Top Row - Badge */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full transition-colors duration-300 group-hover:bg-orange-600 group-hover:border-orange-400">
                  <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-white">
                    {leader.tag}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                {/* Role with subtle line */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[1px] w-8 bg-orange-600 group-hover:bg-black transition-colors duration-300" />
                  <p className="text-orange-500 text-[10px] md:text-[12px] font-black tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-black">
                    {leader.role}
                  </p>
                </div>

                {/* Name */}
                <h5 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none transition-colors duration-300 group-hover:text-black">
                  {leader.name}
                </h5>

                {/* Subtle description visible on hover or just adding depth */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500 ease-in-out">
                  <p className="text-black text-xs font-bold mt-4 uppercase tracking-wider opacity-0 group-hover:opacity-70 transition-opacity duration-700 delay-100">
                    Driving innovation and excellence at every stage.
                  </p>
                </div>
              </div>

              {/* Decorative Corner (Optional UI Flair) */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Target className="text-black w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
