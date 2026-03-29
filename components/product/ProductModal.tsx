"use client"

import { useState, useEffect } from "react"
import toast from "react-hot-toast"

export default function ProductModal({ product, onClose }: any) {
  const [tab, setTab] = useState("overview")
  const [imgIndex, setImgIndex] = useState(0)

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  })

  const [loading, setLoading] = useState(false)

  // 🔥 ESC CLOSE
  useEffect(() => {
    const handleKey = (e: any) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  if (!product) return null

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          message: `Demo request for ${product.name}`,
        }),
      })

      if (res.ok) {
        toast.success("Demo request sent 🚀")
        onClose()
      } else {
        toast.error("Something went wrong")
      }
    } catch {
      toast.error("Server error")
    }

    setLoading(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >

      {/* MODAL */}
      <div
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden
                   bg-[#0b0f19]/95 border border-white/10 shadow-2xl
                   animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/60 hover:text-white text-lg"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-4 p-6 border-b border-white/10">

          <div className="bg-white/10 px-4 py-2 rounded-md border border-white/20">
            <img src={product.logo} className="h-6 object-contain" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-white/50 text-sm">{product.tagline}</p>
          </div>

        </div>

        {/* TABS */}
        <div className="flex gap-6 px-6 pt-4 border-b border-white/10 text-sm">
          {["overview", "features", "screenshots", "demo"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 capitalize transition ${
                tab === t
                  ? "text-[#d4af37] border-b-2 border-[#d4af37]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="p-6 grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
              <img
                src={product.screenshots[imgIndex]}
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {product.screenshots.length > 1 && (
              <div className="flex gap-2 mt-3 justify-center">
                {product.screenshots.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-2 h-2 rounded-full ${
                      imgIndex === i
                        ? "bg-[#d4af37]"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h3 className="text-lg font-semibold mb-3">About Product</h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <button
                  onClick={() => setTab("demo")}
                  className="px-6 py-3 rounded-full bg-[#d4af37] text-black text-sm font-medium hover:scale-105 transition"
                >
                  Book Demo →
                </button>
              </div>
            )}

            {/* FEATURES */}
            {tab === "features" && (
              <ul className="space-y-3">
                {product.features.map((f: string, i: number) => (
                  <li key={i} className="flex gap-2 text-sm text-white/70">
                    <span className="text-[#d4af37]">✔</span> {f}
                  </li>
                ))}
              </ul>
            )}

            {/* SCREENSHOTS */}
            {tab === "screenshots" && (
              <div className="grid grid-cols-2 gap-3">
                {product.screenshots.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setImgIndex(i)}
                    className={`rounded-lg border cursor-pointer ${
                      imgIndex === i
                        ? "border-[#d4af37]"
                        : "border-white/10"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* DEMO FORM */}
            {tab === "demo" && (
              <form onSubmit={handleSubmit} className="space-y-4">

                <h3 className="text-lg font-semibold">
                  Book Demo for {product.name}
                </h3>

                <input
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10"
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                <input
                  placeholder="Company (optional)"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10"
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[#d4af37] text-black font-medium hover:scale-[1.02] transition"
                >
                  {loading ? "Sending..." : "Request Demo 🚀"}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  )
}