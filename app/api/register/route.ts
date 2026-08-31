import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo (replace with DB in production)
const registrations: Array<Record<string, string>> = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, course, message } = body;

    if (!name || !email || !phone || !course) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const registration = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      course,
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    registrations.push(registration);
    console.log("New NESA registration:", registration);

    return NextResponse.json({ success: true, message: "Registration successful! We will contact you soon." });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ registrations });
}
