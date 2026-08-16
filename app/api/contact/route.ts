import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  age?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const age = typeof body.age === "string" ? body.age.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please add your name and email so I can reply." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look quite right — mind checking it?" },
      { status: 400 }
    );
  }

  // TODO(kait): wire up an email provider (e.g. Resend) to deliver this
  // submission to kaitkearneyphd@gmail.com. For now the submission is only
  // validated and acknowledged — nothing is sent or persisted.
  console.log("Contact form submission:", { name, email, age, message });

  return NextResponse.json({ ok: true });
}
