"use client"

import { useState } from "react"

export default function Assistant() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50">

      {/* PANEL */}
      {open && (
        <div
          className="
          mb-3 w-[90vw] max-w-xs sm:w-72 
          rounded-xl 
          bg-white/5 backdrop-blur-xl 
          border border-white/10 
          p-4 
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          animate-fadeIn
        "
        >

          <p className="text-xs sm:text-sm text-white/50 mb-3">
            Need help building your product?
          </p>

          <div className="flex flex-col gap-1">

            {[
              { label: "Build Website", icon: "🚀" },
              { label: "Mobile App", icon: "📱" },
              { label: "UI/UX Design", icon: "🎨" },
              { label: "Talk to Team", icon: "📞" },
            ].map((item, i) => (
              <button
                key={i}
                className="
                  flex items-center gap-2 
                  px-3 py-2 rounded-md 
                  text-sm text-white/70
                  hover:text-white 
                  hover:bg-white/10 
                  transition
                "
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}

          </div>

        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-11 h-11 sm:w-12 sm:h-12 rounded-full 
          bg-[#d4af37] text-black 
          flex items-center justify-center 
          text-lg
          shadow-[0_10px_25px_rgba(212,175,55,0.4)]
          hover:scale-105 
          active:scale-95
          transition
        "
      >
        💬
      </button>

    </div>
  )
}