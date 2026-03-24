"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 reveal overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] sm:top-[-200px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-[#d4af37]/10 blur-[120px] sm:blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] sm:bottom-[-200px] right-1/2 translate-x-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-emerald-900/20 blur-[120px] sm:blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 sm:px-5 py-1.5 text-xs sm:text-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          Global Digital & Media Technology Company
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] sm:leading-[1.1] tracking-tight">
          Building global digital systems
          <br />
          <span className="text-[#d4af37]">
            for brands that lead
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          TitanArtStudio delivers enterprise-grade web platforms, mobile apps,
          and broadcast systems trusted by global brands.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">

          <button
            className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 rounded-full 
            bg-[#d4af37] text-black font-medium
            hover:bg-[#b8962e] 
            transition duration-200
            shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          "
          >
            Get Started →
          </button>

          <button
            className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 rounded-full 
            border border-white/10 bg-white/5 
            hover:bg-white/10 
            backdrop-blur-md
            transition duration-200
          "
          >
            View Work
          </button>

        </div>

      </div>
    </section>
  )
}