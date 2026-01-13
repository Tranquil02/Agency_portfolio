const team = [
  {
    name: "KESHAV KUMAR",
    role: "FOUNDER & CEO",
    tag: "Visionary",
    image: "/team/keshav.jpg",
  },
  {
    name: "PRASHANT KUMAR RAJAK",
    role: "CO-FOUNDER & LEAD DEV",
    tag: "Architect",
    image: "/team/prashant.jpg",
  },
  {
    name: "ABHISHEK BHARADWAJ",
    role: "HEAD OF GROWTH",
    tag: "Strategy",
    image: "/team/abhishek.jpg",
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
              className="
        group p-8 md:p-12
        bg-white/[0.03] border border-white/5
        rounded-[2.5rem]
        transition-all duration-500 ease-out
        hover:bg-orange-600 hover:-translate-y-2
      "
            >
              {/* Top row */}
              <div className="flex justify-between items-center mb-10 md:mb-14">
                {/* Profile Image */}
                <div
                  className="
            w-16 h-16 md:w-20 md:h-20
            rounded-2xl overflow-hidden
            bg-white/5
            transition-all duration-500
            group-hover:scale-105
          "
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale
                       transition-all duration-500
                       group-hover:grayscale-0"
                  />
                </div>

                {/* Tag */}
                <span
                  className="
            text-[8px] md:text-[10px]
            font-black tracking-[0.2em] uppercase
            text-gray-500
            transition-colors duration-300
            group-hover:text-black
          "
                >
                  {leader.tag}
                </span>
              </div>

              {/* Name */}
              <h5
                className="
          text-xl md:text-2xl
          font-black uppercase italic tracking-tight
          mb-2 leading-none
          transition-colors duration-300
          group-hover:text-black
        "
              >
                {leader.name}
              </h5>

              {/* Role */}
              <p
                className="
          text-orange-500 text-[9px] md:text-[10px]
          font-black tracking-[0.2em] uppercase
          transition-colors duration-300
          group-hover:text-black
        "
              >
                {leader.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
