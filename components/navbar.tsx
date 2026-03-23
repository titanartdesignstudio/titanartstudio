"use client"

import Image from "next/image"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      
      <div className="w-full max-w-6xl px-6">
        
        <div className="
          mt-6 flex items-center justify-between
          rounded-full
          border border-white/10
          bg-black/50
          backdrop-blur-xl
          px-6 py-3
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        ">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="/icon.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full transition group-hover:scale-105"
            />

            <span className="font-semibold tracking-wide text-white text-lg">
              <span className="text-[#d4af37]">Titan</span>
              <span className="group-hover:text-[#d4af37] transition">
                ArtStudio
              </span>
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  relative 
                  hover:text-white 
                  transition
                  after:content-[''] 
                  after:absolute 
                  after:left-0 
                  after:-bottom-1 
                  after:h-[2px] 
                  after:w-0 
                  after:bg-[#d4af37] 
                  after:transition-all 
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}

          </nav>

          {/* CTA */}
          <button className="
            relative overflow-hidden
            rounded-full
            bg-[#d4af37]
            px-6 py-2.5
            text-black text-sm font-medium
            transition
            hover:scale-[1.03]
            hover:bg-[#b8962e]
          ">
            Get Started →
          </button>

        </div>

      </div>

    </header>
  )
}