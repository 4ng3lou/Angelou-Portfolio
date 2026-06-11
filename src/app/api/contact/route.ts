import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || "angeloocampo61@gmail.com";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const isPlaceholder = !apiKey || apiKey === "re_your_actual_key_here";
        if (isPlaceholder) {
            console.warn("RESEND_API_KEY not set or still placeholder; email not sent. Add your key from resend.com to .env.local");
            return NextResponse.json(
                { success: true, message: "Message received!" },
                { status: 200 }
            );
        }

        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [TO_EMAIL],
            replyTo: email,
            subject: `Portfolio: Message from ${name}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Message:</strong></p>
                <pre style="white-space: pre-wrap; font-family: inherit;">${message}</pre>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Message received!" },
            { status: 200 }
        );
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
