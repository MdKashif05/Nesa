import { NextRequest, NextResponse } from "next/server";

const enquiries: Array<Record<string, string>> = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const enquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      subject: subject || "General Enquiry",
      message,
      createdAt: new Date().toISOString(),
    };

    enquiries.push(enquiry);
    console.log("New NESA enquiry:", enquiry);

    return NextResponse.json({ success: true, message: "Message sent! We will get back to you soon." });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ enquiries });
}
