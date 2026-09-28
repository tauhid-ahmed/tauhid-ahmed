import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message content is required." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || "General Inquiry").trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
    };

    const scriptUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;

    if (scriptUrl) {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Google Sheets Webhook error:", response.status, text);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to record message to Google Sheet. Please try again or email directly.",
          },
          { status: 502 }
        );
      }
    } else {
      console.warn(
        "GOOGLE_SHEETS_SCRIPT_URL is not set. Submission logged locally:",
        payload
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
