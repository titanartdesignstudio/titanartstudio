"use client"

export default function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-12 text-center overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[300px] bg-[#d4af37]/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[300px] bg-emerald-900/20 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* 💎 BRAND */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3 sm:mb-4">
          <span className="text-[#d4af37]">Titan</span>ArtStudio
        </h2>

        {/* ✨ TAGLINE */}
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
          Building scalable digital systems, products, and platforms for brands that lead the future.
        </p>

        {/* 🚀 CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-14">

          <button
            className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 rounded-full 
            bg-[#d4af37] text-black font-medium
            hover:bg-[#b8962e]
            transition
            shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          "
          >
            Start a Project →
          </button>

          <button
            className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3 rounded-full 
            border border-white/10 
            bg-white/5 
            hover:bg-white/10
            transition
          "
          >
            Contact Us
          </button>

        </div>

        {/* ⚡ MINI NAV */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60 mb-8 sm:mb-10">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Portfolio</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* 🔻 DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5 sm:mb-6" />

        {/* 📌 COPYRIGHT */}
        <p className="text-[10px] sm:text-xs text-gray-500">
          © 2026 TitanArtStudio — Crafted with precision.
        </p>

      </div>
    </footer>
  )
}