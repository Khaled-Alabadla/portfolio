import { Resend } from "resend";

const resend = new Resend("re_Yi1FZfFo_7aGZcro6ocLk1kmLWjaEoJVz");

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: "your-verified-email@example.com", // Replace with your verified sender email
    to: "your-personal-email@example.com", // Where you want to receive messages
    subject: `New contact form message: ${data.subject}`,
    html: `
      <h1>New contact form submission</h1>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Subject:</b> ${data.subject}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
    `,
  });
}
