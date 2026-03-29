"use client"

import { useState } from "react"
import { products } from "@/data/products"
import ProductModal from "./ProductModal"
import useReveal from "@/components/useReveal"

export default function ProductsPreview() {
  const [selected, setSelected] = useState<any>(null)

  // ✅ FIXED (important)
  const { ref: revealRef } = useReveal()

  return (
    <section
      ref={revealRef}
      className="relative py-16 px-4 reveal"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px]
                      bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our <span className="text-[#d4af37]">Products</span>
        </h2>

        <p className="text-white/50 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
          Powerful SaaS solutions designed to scale your business operations seamlessly.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">

        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="group cursor-pointer"
          >

            <div
              className="relative rounded-xl h-[135px] px-3 py-2.5
              flex flex-col justify-between items-center text-center
              bg-[#0b0f19]/70 backdrop-blur-xl
              border border-white/10
              hover:border-[#d4af37]/50
              hover:bg-[#0b0f19]
              transition duration-300
              hover:scale-[1.04]
              hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
            >

              {/* LOGO */}
              <div className="h-10 flex items-center justify-center 
                              bg-white/10 px-3 py-1 rounded-md 
                              border border-white/20
                              shadow-inner shadow-white/5">

                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-7 object-contain
                             brightness-110 contrast-150
                             group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* NAME */}
              <h3 className="text-sm font-medium text-white">
                {p.name}
              </h3>

              {/* TAGLINE */}
              <p className="text-[11px] text-white/50 leading-tight px-1">
                {p.tagline}
              </p>

              {/* CTA */}
              <span className="text-[11px] text-[#d4af37] opacity-0 group-hover:opacity-100 transition">
                Preview →
              </span>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </section>
  )
}