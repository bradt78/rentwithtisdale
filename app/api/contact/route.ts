import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  const { error } = await resend.emails.send({
    from: 'Tisdale Properties <no-reply@rentwithtisdale.com>',
    to: ['info@rentwithtisdale.com'],
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1E2A3A; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #F5A623; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          <p style="color: white; margin: 4px 0 0; font-size: 14px;">rentwithtisdale.com</p>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-size: 14px; color: #6b7280; width: 100px;">Name</td><td style="padding: 8px 0; font-size: 14px; color: #111827; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-size: 14px; color: #6b7280;">Email</td><td style="padding: 8px 0; font-size: 14px; color: #111827;"><a href="mailto:${email}" style="color: #F5A623;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-size: 14px; color: #6b7280;">Phone</td><td style="padding: 8px 0; font-size: 14px; color: #111827;">${phone}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="font-size: 14px; color: #6b7280; margin-bottom: 8px;">Message</p>
          <p style="font-size: 15px; color: #111827; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
