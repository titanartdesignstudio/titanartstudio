"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [msg, setMsg] = useState("")

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMsg("Message sent successfully 🚀")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setMsg(data.error || "Something went wrong")
      }
    } catch (err) {
      setStatus("error")
      setMsg("Server error")
    }

    setLoading(false)
  }

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Get in Touch
        </h2>

        <p className="text-white/60 mb-8">
          Have a project in mind? Let’s build something great.
        </p>

        {/* STATUS MESSAGE */}
        {status && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm ${
              status === "success"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#d4af37] outline-none"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#d4af37] outline-none"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#d4af37] outline-none resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-[#d4af37] text-black font-medium hover:bg-[#b8962e] transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : (
              "Send Message →"
            )}
          </button>

        </form>
      </div>
    </section>
  )
}