import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { name, email, phone, message, budget } = body;
    const data = await resend.emails.send({
      from: "Webmonkey <onboarding@resend.dev>",
      to: ["miroslav.dimanov86@gmail.com"],
      text: "Email content in plain text format",
      subject: "Hello, Miro",
      react: EmailTemplate({
        name,
        email,
        phone,
        message,
        budget,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
