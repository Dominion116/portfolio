import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (!formLink || !fieldIdName || !fieldIdEmail || !fieldIdMessage || !fieldIdSocial) {
    console.log("❌ Missing env vars:", { formLink, fieldIdName, fieldIdEmail, fieldIdMessage, fieldIdSocial });
    return new NextResponse("Please configure the env variables", { status: 500 });
  }

  try {
    const { name, message, social, email } = await req.json();

    const params = new URLSearchParams({
      [fieldIdName]: name,
      [fieldIdEmail]: email,
      [fieldIdMessage]: message,
      [fieldIdSocial]: social ?? "",
      submit: "Submit",
    });

    const url = `${formLink}/formResponse?${params.toString()}`;
    console.log("📤 Submitting to:", url);

    const res = await fetch(url, { method: "GET", redirect: "follow" });

    console.log("📥 Google response status:", res.status);

    return NextResponse.json("Success!");
  } catch (error) {
    console.log("❌ Contact form error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
