"use client"

export default function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-12 text-center overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[250px] bg-[#d4af37]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-900/20 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* 💎 BRAND */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          <span className="text-[#d4af37]">Titan</span>ArtStudio
        </h2>

        {/* ✨ TAGLINE */}
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10 px-2">
          Building scalable digital systems, products, and platforms for brands that lead the future.
        </p>

        {/* ⚡ MINI NAV */}
        <div className="flex flex-wrap justify-center gap-5 text-sm text-white/60 mb-10">
          {["Home", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative hover:text-white transition
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0
              after:bg-[#d4af37]
              after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* 🔻 DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* 📌 COPYRIGHT + LOCATION */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 TitanArtStudio — Crafted with precision.</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>

      </div>
    </footer>
  )
}