import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db() // ⚠️ IMPORTANT (no name)

    await db.command({ ping: 1 })

    return NextResponse.json({
      success: true,
      message: "Mongo Connected 🚀",
    })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}