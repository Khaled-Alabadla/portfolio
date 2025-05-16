// server.ts
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Resend } from "resend";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend("re_Yi1FZfFo_7aGZcro6ocLk1kmLWjaEoJVz"); // Replace with your real key

app.post("/api/sendEmail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com", // Replace with your real email
      subject: `New message from ${name}: ${subject}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
