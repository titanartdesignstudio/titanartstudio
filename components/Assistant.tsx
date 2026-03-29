"use client"

import { useState, useEffect } from "react"

type Message = {
  role: "bot" | "user"
  text: string
}

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  // ✅ FIXED TYPE
  const [messages, setMessages] = useState<Message[]>([])

  const [input, setInput] = useState("")

  const [form, setForm] = useState({
    name: "",
    message: "",
  })

  // 👋 Welcome
  useEffect(() => {
    setMessages([
      {
        role: "bot",
        text: "👋 Hey! Tell me what you need 🚀 (website, app, HRM...)",
      },
    ])
  }, [])

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg: Message = { role: "user", text: input }

    let botReply = ""
    let nextStep = step

    // STEP 1 → requirement
    if (step === 0) {
      setForm((prev) => ({ ...prev, message: input }))
      botReply = "Nice 👍 What's your name?"
      nextStep = 1
    }

    // STEP 2 → name → WhatsApp
    else if (step === 1) {
      const updatedForm = { ...form, name: input }
      setForm(updatedForm)

      const text = `🚀 New Project Inquiry

Name: ${updatedForm.name}

Requirement:
${updatedForm.message}`

      const phone = "919849778735"

      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
      )

      setMessages((prev) => [
        ...prev,
        userMsg,
        { role: "bot", text: "🚀 Opening WhatsApp..." },
      ])

      setInput("")
      setStep(2)
      return
    }

    const botMsg: Message = { role: "bot", text: botReply }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput("")
    setStep(nextStep)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">

      {open && (
        <div className="w-80 h-[420px] flex flex-col bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="p-3 border-b border-white/10 flex justify-between items-center">
            <p className="text-sm text-white font-medium">
              🤖 Smart Assistant
            </p>
            <button onClick={() => setOpen(false)} className="text-white/50">
              ✕
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-[#d4af37] text-black ml-auto"
                    : "bg-white/10 text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          {step < 2 && (
            <div className="p-2 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  step === 0
                    ? "Describe your requirement..."
                    : "Enter your name..."
                }
                className="flex-1 px-3 py-2 rounded bg-white/10 text-white text-sm outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-[#d4af37] text-black px-3 rounded"
              >
                ➤
              </button>
            </div>
          )}

          {/* DONE */}
          {step === 2 && (
            <div className="p-3 text-center text-xs text-green-400">
              ✅ Redirected to WhatsApp
            </div>
          )}

        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        💬
      </button>
    </div>
  )
}