"use client"

import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
  })

  const [loading, setLoading] = useState(false)

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
          message: "General Inquiry from Navbar",
        }),
      })

      if (res.ok) {
        toast.success("Request sent 🚀")
        setShowForm(false)
      } else {
        toast.error("Something went wrong")
      }
    } catch {
      toast.error("Server error")
    }

    setLoading(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-6">

          <div className="mt-4 sm:mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">

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
                  className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={() => setShowForm(true)}
              className="hidden md:block rounded-full bg-[#d4af37] px-6 py-2.5 text-black text-sm font-medium transition hover:scale-[1.03] hover:bg-[#b8962e]"
            >
              Get Started →
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="mt-3 mx-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-5 flex flex-col gap-4 text-gray-300">

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
                onClick={() => {
                  setShowForm(true)
                  setIsOpen(false)
                }}
                className="mt-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-black text-sm font-medium transition hover:bg-[#b8962e]"
              >
                Get Started →
              </button>

            </div>
          )}

        </div>
      </header>

      {/* 🔥 POPUP FORM */}
      {showForm && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >

          <div
            className="bg-[#0b0f19] w-full max-w-md rounded-2xl p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-white/60"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">
              Get Started 🚀
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-[#d4af37] text-black font-medium"
              >
                {loading ? "Sending..." : "Submit 🚀"}
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  )
}