
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Daplink",
    cat: "SaaS Platform",
    year: "2026",
    img: "/images/daplink.png",
    description: "A link-in-bio and digital profile platform that lets users create and share a single page with all their important links and personal information.",
    link: "https://daplink.vercel.app"
  },
  {
    title: "Skyrixe",
    cat: "Service Platform",
    year: "2025",
    img: "/images/skyrie.png",
    description: "An event decoration and celebration services platform that provides customized setups for parties, birthdays, and special occasions.",
    link: "https://skyrixe.com"
  },
  {
    title: "Admin Panel",
    cat: "E-commerce",
    year: "2025",
    img: "/images/admin.png",
    description: "Admin Panel for managing e-commerce operations with real-time analytics."
  },
  {
    title: "InterviewGenie",
    cat: "SaaS Platform",
    year: "2024",
    img: "/images/interview.png",
    description: "AI-powered interview preparation platform with mock interviews and feedback.",
    link: "https://interview-genie-roan.vercel.app/"
  }
];


export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <section id="work" className="py-10 md:py-15 relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-26 gap-8 text-left">
          <div>
            <h3 className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-4 md:mb-6 italic">Showcase</h3>
            <h4 className="text-4xl md:text-[9vw] font-black tracking-tighter uppercase italic leading-[0.9] md:leading-[0.8]">CURATED <br className="hidden md:block" /> <span className="text-transparent pr-9 bg-clip-text bg-linear-to-r from-orange-500 via-white to-orange-800 not-italic lg:ml-6">WORKS</span></h4>
          </div>
          <div className="flex gap-2 md:gap-4 pb-4 overflow-x-auto w-full md:w-auto no-scrollbar">
            {['All', 'SaaS Platform', 'E-commerce', 'Service Platform'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-10 py-2.5 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/20' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 md:gap-y-28">
          {projects
            .filter(p => activeCategory === "All" || p.cat === activeCategory)
            .map((project, i) => (
              <div
                key={i}
                className={`group relative text-left ${i % 2 !== 0 ? "md:mt-24" : ""
                  }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-[14/10] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] bg-neutral-900 mb-6 md:mb-10 border border-white/5 transition-all duration-500 hover:border-orange-600/30">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80
                       transition-all duration-700 ease-out
                       group-hover:grayscale-0 group-hover:opacity-100
                       group-hover:scale-[1.03]"
                  />

                  {/* Hover CTA */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-400
                          flex items-center justify-center">
                    {project.link && (
                      <Link className="px-5 md:px-8 py-2.5 md:py-4 bg-white text-black rounded-full
                            flex items-center gap-3
                            scale-90 group-hover:scale-100
                            transition-transform duration-400
                            font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl"
                        href={project.link} target="_blank" rel="noopener noreferrer">
                        Explore Project <ArrowUpRight size={13} strokeWidth={2.5} />
                      </Link>
                    )}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-5 md:top-8 right-5 md:right-8
                          px-3.5 md:px-5 py-1.5 md:py-2
                          bg-black/60 backdrop-blur-xl
                          rounded-full border border-white/10
                          text-[8px] md:text-[9px] font-black tracking-widest uppercase">
                    {project.year}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col px-3 md:px-5">
                  <div className="flex items-center gap-3 mb-3 md:mb-5">
                    <span className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.35em] uppercase">
                      {project.cat}
                    </span>
                    <div className="h-px w-6 md:w-10 bg-orange-600/30" />
                  </div>

                  <h5 className="text-2xl md:text-5xl font-black tracking-tighter uppercase italic
                         leading-none mb-3 md:mb-5
                         transition-colors group-hover:text-orange-500">
                    {project.title}
                  </h5>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm
                        mb-5 md:mb-8
                        transition-colors group-hover:text-gray-300">
                    {project.description}
                  </p>

                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
