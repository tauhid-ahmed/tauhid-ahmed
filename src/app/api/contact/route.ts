import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBMISSIONS_FILE = path.join(process.cwd(), "src/data/submissions.json");
const SUBMISSIONS_CSV = path.join(process.cwd(), "src/data/submissions.csv");

// Helper to save submissions locally so no message is ever lost
async function saveSubmissionLocally(entry: {
  timestamp: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    let list: Array<typeof entry> = [];
    try {
      const data = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
      list = JSON.parse(data);
    } catch {
      list = [];
    }

    list.unshift(entry);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(list, null, 2), "utf-8");

    // Also update CSV format
    try {
      const csvHeader = "Timestamp,Name,Email,Subject,Message\n";
      const csvRow = `"${entry.timestamp}","${entry.name.replace(/"/g, '""')}","${entry.email.replace(/"/g, '""')}","${entry.subject.replace(/"/g, '""')}","${entry.message.replace(/"/g, '""')}"\n`;

      let existingCsv = "";
      try {
        existingCsv = await fs.readFile(SUBMISSIONS_CSV, "utf-8");
      } catch {
        existingCsv = "";
      }

      if (!existingCsv) {
        await fs.writeFile(SUBMISSIONS_CSV, csvHeader + csvRow, "utf-8");
      } else {
        await fs.appendFile(SUBMISSIONS_CSV, csvRow, "utf-8");
      }
    } catch (csvErr) {
      console.warn("Could not append to CSV:", csvErr);
    }
  } catch (err) {
    console.error("Failed to save submission locally:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 },
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || "General Inquiry").trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    // 1. Always save the submission locally to avoid data loss
    await saveSubmissionLocally(payload);

    // 2. Forward to Google Sheets if a valid Webhook/Apps Script URL is provided
    const scriptUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL;

    if (
      scriptUrl &&
      scriptUrl.startsWith("http") &&
      !scriptUrl.includes("docs.google.com/spreadsheets")
    ) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          redirect: "follow",
        });

        if (!response.ok) {
          console.warn(
            "External sheet endpoint returned status:",
            response.status,
          );
        }
      } catch (webhookErr) {
        console.warn("Failed to reach external sheet webhook:", webhookErr);
      }
    } else {
      console.log(
        "Message recorded locally in src/data/submissions.json:",
        payload,
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message received and recorded successfully.",
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}

// GET route to inspect or download recorded submissions
export async function GET() {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([]);
  }
}
