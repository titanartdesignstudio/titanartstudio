import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = body.name || ""
    const email = body.email || ""
    const message = body.message || ""

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("titan")

    // 🔥 SAVE TO DB
    await db.collection("contacts").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    // 🔥 ADMIN EMAIL
    await resend.emails.send({
      from: "Titan Art Studio <info@titanartstudio.in>",
      to: ["info@titanartstudio.in"],
      replyTo: email, // ✅ FIXED
      subject: `🚀 New Lead from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:25px;background:#0b0b0b;color:#fff;border-radius:12px">
          
          <h2 style="color:#d4af37;">New Client Inquiry 🚀</h2>
          <p style="color:#aaa;">You received a new message.</p>

          <hr style="border-color:#222;margin:20px 0" />

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>

          <div style="margin-top:15px;background:#111;padding:15px;border-radius:8px;color:#ddd">
            ${message}
          </div>

          <p style="font-size:12px;color:#777;margin-top:20px;">
            Titan Art Studio • Chennai, India
          </p>
        </div>
      `,
    })

    // 🔥 AUTO REPLY
    await resend.emails.send({
      from: "Titan Art Studio <info@titanartstudio.in>",
      to: email,
      replyTo: "info@titanartstudio.in",
      subject: "✨ Thanks for contacting Titan Art Studio",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:25px;background:#0b0b0b;color:#fff;border-radius:12px">

          <h2 style="color:#d4af37;">Hey ${name} 👋</h2>

          <p style="color:#bbb;">
            Thanks for reaching out to <b>Titan Art Studio</b>.
          </p>

          <p style="color:#bbb;">
            We’ve received your message and will get back shortly.
          </p>

          <div style="margin:20px 0;padding:15px;background:#111;border-radius:8px">
            <p style="color:#aaa;">Your Message:</p>
            <p style="color:#ddd;">${message}</p>
          </div>

          <p style="font-size:12px;color:#777;">
            Chennai, Tamil Nadu, India 🇮🇳
          </p>

        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Lead saved & emails sent 🚀",
    })

  } catch (error) {
    console.error("CONTACT API ERROR:", error)

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}