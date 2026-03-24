"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      
      <div className="w-full max-w-6xl px-4 sm:px-6">
        
        <div
          className="
          mt-4 sm:mt-6 flex items-center justify-between
          rounded-full
          border border-white/10
          bg-black/50
          backdrop-blur-xl
          px-4 sm:px-6 py-2.5 sm:py-3
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        "
        >

          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <Image
              src="/icon.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full transition group-hover:scale-105 sm:w-[50px] sm:h-[50px]"
            />

            <span className="font-semibold tracking-wide text-white text-sm sm:text-lg">
              <span className="text-[#d4af37]">Titan</span>
              <span className="group-hover:text-[#d4af37] transition">
                ArtStudio
              </span>
            </span>
          </div>

          {/* DESKTOP NAV */}
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

          {/* CTA (DESKTOP) */}
          <button
            className="
            hidden md:block
            relative overflow-hidden
            rounded-full
            bg-[#d4af37]
            px-6 py-2.5
            text-black text-sm font-medium
            transition
            hover:scale-[1.03]
            hover:bg-[#b8962e]
          "
          >
            Get Started →
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            mt-3 mx-2 rounded-2xl
            border border-white/10
            bg-black/80 backdrop-blur-xl
            p-5 flex flex-col gap-4
            text-gray-300
          "
          >
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}

            <button
              className="
              mt-2 rounded-full
              bg-[#d4af37]
              px-5 py-2.5
              text-black text-sm font-medium
              transition hover:bg-[#b8962e]
            "
            >
              Get Started →
            </button>
          </div>
        )}
      </div>
    </header>
  )
}