import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_btd998zv_GG6F8sWzWV7Jc5fCyNbbdXZP");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { name, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kh.es.abadla@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
