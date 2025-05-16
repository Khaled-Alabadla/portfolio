import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend("re_Yi1FZfFo_7aGZcro6ocLk1kmLWjaEoJVz");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Your Name <you@yourdomain.com>",
      to: "your@email.com",
      subject: `New Contact: ${subject}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p>${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
