export default function CTA() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden reveal">

      {/* 🔥 background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-[#d4af37]/10 blur-[140px]" />
        <div className="absolute right-1/2 bottom-0 translate-x-1/2 w-[700px] h-[300px] bg-emerald-900/20 blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
          Let’s Build Something{" "}
          <span className="text-[#d4af37] relative">
            Great Together
            {/* underline glow */}
            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-[#d4af37]/20 blur-md"></span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Partner with TitanArtStudio to create scalable, high-performance
          digital products that drive real business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* PRIMARY */}
          <button className="
            relative px-8 py-3 rounded-full 
            bg-[#d4af37] text-black font-medium
            transition duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
            active:scale-95
          ">
            Get Started →
          </button>

          {/* SECONDARY */}
          <button className="
            px-8 py-3 rounded-full 
            border border-white/10 
            bg-white/5 
            backdrop-blur-md
            transition duration-300
            hover:bg-white/10
            hover:scale-105
          ">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  )
}