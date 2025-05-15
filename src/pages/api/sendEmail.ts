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
      from: "khaledalabadla6666@gmail.com",
      to: "kh.es.abadla@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
