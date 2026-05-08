import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", { status: 500 });
  }

  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  try {
    const { name, message, social, email } = await req.json();

    const params = new URLSearchParams();
    if (fieldIdName) params.append(fieldIdName, name);
    if (fieldIdEmail) params.append(fieldIdEmail, email);
    if (fieldIdMessage) params.append(fieldIdMessage, message);
    if (fieldIdSocial) params.append(fieldIdSocial, social ?? "");

    const res = await fetch(`${formLink}/formResponse?${params.toString()}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!res.ok && res.status !== 0) {
      console.log("Form submission failed:", res.status);
    }

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
