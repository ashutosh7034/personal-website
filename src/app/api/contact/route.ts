import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, company, website_hp } = body;

    // Honeypot anti-spam check: if bot filled this hidden field, pretend success
    if (website_hp) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message content is required." },
        { status: 400 }
      );
    }

    // Sanitize strings
    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 150);
    const cleanSubject = subject.trim().slice(0, 200);
    const cleanCompany = (company || "").toString().trim().slice(0, 100);
    const cleanMessage = message.trim().slice(0, 5000);
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "ashutosh3276s16@gmail.com";
    const senderEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/mrbqybwg";

    if (apiKey) {
      // Dispatch via Resend API
      const resend = new Resend(apiKey);
      const emailResult = await resend.emails.send({
        from: `Portfolio Contact <${senderEmail}>`,
        to: [recipientEmail],
        replyTo: cleanEmail,
        subject: `[Portfolio Inquiry] ${cleanSubject} — from ${cleanName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0B0D; color: #F3F4F6; padding: 24px; border: 1px solid #1E2226;">
            <div style="border-bottom: 2px solid #F97316; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #F97316; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
              <span style="font-size: 12px; color: #9CA3AF;">Received: ${timestamp} (IST)</span>
            </div>

            <div style="margin-bottom: 16px;">
              <strong style="color: #9CA3AF; font-size: 12px; text-transform: uppercase;">From:</strong>
              <div style="font-size: 15px; color: #FFFFFF; font-weight: 600;">${cleanName}</div>
            </div>

            <div style="margin-bottom: 16px;">
              <strong style="color: #9CA3AF; font-size: 12px; text-transform: uppercase;">Email:</strong>
              <div style="font-size: 14px;"><a href="mailto:${cleanEmail}" style="color: #F97316; text-decoration: none;">${cleanEmail}</a></div>
            </div>

            ${
              cleanCompany
                ? `
            <div style="margin-bottom: 16px;">
              <strong style="color: #9CA3AF; font-size: 12px; text-transform: uppercase;">Company / Org:</strong>
              <div style="font-size: 14px; color: #E5E7EB;">${cleanCompany}</div>
            </div>`
                : ""
            }

            <div style="margin-bottom: 16px;">
              <strong style="color: #9CA3AF; font-size: 12px; text-transform: uppercase;">Subject:</strong>
              <div style="font-size: 14px; color: #E5E7EB;">${cleanSubject}</div>
            </div>

            <div style="margin-bottom: 24px; background: #121417; padding: 16px; border: 1px solid #24292F;">
              <strong style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 8px;">Message:</strong>
              <div style="font-size: 14px; color: #F3F4F6; white-space: pre-wrap; line-height: 1.6;">${cleanMessage}</div>
            </div>

            <div style="font-size: 11px; color: #6B7280; border-top: 1px solid #1E2226; padding-top: 12px;">
              Submitted from Ashutosh Pandey's Developer Portfolio
            </div>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Resend delivery error:", emailResult.error);
        return NextResponse.json(
          { success: false, error: "Failed to dispatch email via Resend." },
          { status: 500 }
        );
      }
    } else {
      // Secure server-side relay to verified email endpoint
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          company: cleanCompany || "Not specified",
          message: cleanMessage,
          submittedAt: timestamp,
          source: "Ashutosh Pandey Portfolio Next.js Server API",
        }),
      });

      if (!response.ok) {
        console.error("Form relay failed with status:", response.status);
        return NextResponse.json(
          { success: false, error: "Email relay service encountered an error." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. Thanks for reaching out — I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
