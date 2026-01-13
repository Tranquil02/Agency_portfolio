import { Star } from "lucide-react";

export default function Marquee() {
  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-black/40 backdrop-blur-md overflow-hidden relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {['IMPACT', 'ARTISTRY', 'PRECISION', 'VISION', 'GROWTH', 'IMPACT', 'ARTISTRY', 'PRECISION', 'VISION', 'GROWTH'].map((word, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-12 mx-6 md:mx-12">
            <span className="text-2xl md:text-4xl font-black text-white/5 uppercase tracking-tight italic">{word}</span>
            <Star className="w-4 h-4 md:w-6 md:h-6 text-orange-600/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
