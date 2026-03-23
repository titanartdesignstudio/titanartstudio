"use client"

export default function Hero() {
  return (
   <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 reveal" >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-sm backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          Global Digital & Media Technology Company
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight">
          Building global digital systems
          <br />
          <span className="text-[#d4af37]">
            for brands that lead
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          TitanArtStudio delivers enterprise-grade web platforms, mobile apps,
          and broadcast systems trusted by global brands.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="
            px-8 py-3 rounded-full 
            bg-[#d4af37] text-black font-medium
            hover:bg-[#b8962e] 
            transition duration-200
            shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          ">
            Get Started →
          </button>

          <button className="
            px-8 py-3 rounded-full 
            border border-white/10 bg-white/5 
            hover:bg-white/10 
            backdrop-blur-md
            transition duration-200
          ">
            View Work
          </button>

        </div>

      </div>
    </section>
  )
}