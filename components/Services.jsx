import { Palette, Code, Layout, Zap } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Custom Design",
    icon: <Palette className="w-8 h-8 text-orange-500" />,
    desc: "Unique designs from scratch based on your requirements. No templates, only original visions.",
    tags: ["Branding", "Visuals"],
    image: "/images/custom.jpg"
  },
  {
    title: "Development",
    icon: <Code className="w-8 h-8 text-orange-500" />,
    desc: "Fast, secure, and responsive sites built with modern technologies that work smoothly.",
    tags: ["React", "Performance"],
    image: "/images/development.jpg"
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-8 h-8 text-orange-500" />,
    desc: "Focusing on clean layouts and intuitive navigation for the best user experience.",
    tags: ["User Flow", "Figma"],
    image: "/images/ui.avif"
  },
  {
    title: "Animated Sites",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    desc: "Smooth animations and transitions to make your website engaging and premium.",
    tags: ["GSAP", "Interactivity"],
    image: "/images/animate.avif"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-8 md:py-26 relative z-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end  md:mb-24 gap-8 md:gap-12 text-left">
          <div className="max-w-2xl">
            <h3 className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase mb-4 md:mb-6">Expertise</h3>
            <h4 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] md:leading-[0.85]">ELEVATING <br className="hidden md:block" /> THE <span className="text-transparent pr-9 bg-clip-text bg-linear-to-r from-orange-500 via-white to-orange-800 not-italic">STANDARD</span></h4>
          </div>
          <p className="text-gray-400 text-base md:text-lg items-center mb-20 italic ">&quot;  We provide clean, modern, and aesthetic layouts focused on simplicity, clarity, and performance. &quot;</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative min-h-[250px] md:min-h-[350px]
                 overflow-hidden rounded-[2rem] md:rounded-[2.5rem]
                 border border-white/5 bg-[#0A0A0A]"
            >
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover grayscale opacity-30
                     transition-transform duration-1000
                     group-hover:grayscale-0 group-hover:opacity-50
                     group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0aae] via-[#0A0A0A]/20 to-transparent" />
              </div>

              {/* Content wrapper (BOTTOM aligned) */}
              <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end text-left">
                <div className="transition-transform duration-500 group-hover:-translate-y-10">

                  {/* Title (visible by default at bottom) */}
                  <h5
                    className="text-xl md:text-2xl font-black uppercase tracking-tight
                       transition-colors duration-300
                       group-hover:text-orange-500"
                  >
                    {service.title}
                  </h5>

                  {/* Description (hidden initially) */}
                  <p
                    className="mt-3 text-sm text-gray-300 leading-relaxed
                       opacity-0 translate-y-4
                       transition-all duration-500 delay-100
                       group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {service.desc}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
