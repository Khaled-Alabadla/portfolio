import { Resend } from "resend";

const resend = new Resend("re_btd998zv_GG6F8sWzWV7Jc5fCyNbbdXZP");

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kh.es.abadla@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
