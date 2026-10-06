import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const SERVICE_OPTIONS = [
  "Child therapy",
  "Family therapy",
  "Parent consultation/support",
  "Testing/assessment",
] as const;

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  cellPhone?: unknown;
  email?: unknown;
  bestTime?: unknown;
  services?: unknown;
  otherInfo?: unknown;
  acknowledgedOutOfNetwork?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = asTrimmedString(body.firstName);
  const lastName = asTrimmedString(body.lastName);
  const cellPhone = asTrimmedString(body.cellPhone);
  const email = asTrimmedString(body.email);
  const bestTime = asTrimmedString(body.bestTime);
  const otherInfo = asTrimmedString(body.otherInfo);
  const acknowledgedOutOfNetwork = body.acknowledgedOutOfNetwork === true;

  const services = Array.isArray(body.services)
    ? body.services.filter(
        (s): s is string =>
          typeof s === "string" && (SERVICE_OPTIONS as readonly string[]).includes(s)
      )
    : [];

  if (!firstName || !lastName || !cellPhone || !email) {
    return NextResponse.json(
      { error: "Please fill in your first name, last name, cell phone, and email." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look quite right — mind checking it?" },
      { status: 400 }
    );
  }

  if (services.length === 0) {
    return NextResponse.json(
      { error: "Please select at least one service you're interested in." },
      { status: 400 }
    );
  }

  if (!acknowledgedOutOfNetwork) {
    return NextResponse.json(
      { error: "Please confirm you understand Dr. Kearney is an out-of-network provider." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact form email.");
    return NextResponse.json(
      { error: "Something went wrong on our end. Please call or email directly instead." },
      { status: 500 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "kaitkearneyphd@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Kait Kearney Website <onboarding@resend.dev>";

  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Cell phone: ${cellPhone}`,
    `Email: ${email}`,
    `Best time to call: ${bestTime || "Not specified"}`,
    `Interested in: ${services.join(", ")}`,
    `Other information: ${otherInfo || "None"}`,
    `Acknowledged out-of-network status: Yes`,
  ];

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission — ${firstName} ${lastName}`,
      text: lines.join("\n"),
      html: `<p>${lines.map((l) => l.replace(/&/g, "&amp;").replace(/</g, "&lt;")).join("</p><p>")}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to send contact form email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
