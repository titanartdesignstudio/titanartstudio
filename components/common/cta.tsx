export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 text-center overflow-hidden reveal">

      {/* 🔥 background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] sm:w-[700px] h-[200px] sm:h-[300px] bg-[#d4af37]/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-1/2 bottom-0 translate-x-1/2 w-[400px] sm:w-[700px] h-[200px] sm:h-[300px] bg-emerald-900/20 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-[1.3] sm:leading-tight tracking-tight px-2 sm:px-0">
          Let’s Build Something{" "}
          <span className="text-[#d4af37] relative">
            Great Together
            {/* underline glow */}
            <span className="absolute left-0 bottom-0 w-full h-[4px] sm:h-[6px] bg-[#d4af37]/20 blur-md"></span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto px-2 sm:px-0">
          Partner with TitanArtStudio to create scalable, high-performance
          digital products that drive real business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">

          {/* PRIMARY */}
          <button
            className="
            w-full sm:w-auto
            relative px-6 sm:px-8 py-3 rounded-full 
            bg-[#d4af37] text-black font-medium
            transition duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
            active:scale-95
          "
          >
            Get Started →
          </button>

          {/* SECONDARY */}
          <button
            className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 rounded-full 
            border border-white/10 
            bg-white/5 
            backdrop-blur-md
            transition duration-300
            hover:bg-white/10
            hover:scale-105
          "
          >
            Contact Us
          </button>

        </div>

      </div>
    </section>
  )
}