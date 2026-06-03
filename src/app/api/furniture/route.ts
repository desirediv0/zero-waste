import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, city, type, quantity, action, message } = body;

    if (!name || !company || !phone || !email || !city || !action) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const actionColor = action.includes("Sell") ? "#1a7c4f" : action.includes("Buy") ? "#0d9488" : "#7c3aed";
    const actionIcon = action.includes("Sell") ? "♻️" : action.includes("Buy") ? "🛋️" : "🔄";

    const emailHtml = `
      <div style="font-family:'DM Sans',Arial,sans-serif;max-width:620px;margin:0 auto;background:#f8fffe;padding:0;border-radius:16px;overflow:hidden;">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#0f1f0f 0%,${actionColor} 100%);padding:32px;text-align:center;">
          <div style="font-size:40px;margin-bottom:8px;">${actionIcon}</div>
          <h1 style="color:white;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;">
            New Furniture Request
          </h1>
          <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
            ZeroWaste india — Office Furniture Division
          </p>
        </div>

        <!-- Action Badge -->
        <div style="background:white;padding:20px 32px 0;">
          <div style="display:inline-block;background:${actionColor}15;border:1px solid ${actionColor}30;color:${actionColor};font-size:12px;font-weight:700;padding:6px 14px;border-radius:100px;">
            ${actionIcon} ${action}
          </div>
        </div>

        <!-- Details table -->
        <div style="background:white;padding:24px 32px 32px;">
          <table style="width:100%;border-collapse:collapse;">
            ${[
        ["👤 Name", name],
        ["🏢 Company", company],
        ["📞 Phone", phone],
        ["📧 Email", email],
        ["📍 City", city],
        ["🪑 Furniture Type", type || "Not specified"],
        ["📦 Quantity", quantity || "Not specified"],
      ].map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0fdf4;vertical-align:top;width:40%;">
                  <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;font-weight:700;">${label}</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #f0fdf4;vertical-align:top;">
                  <span style="font-size:14px;color:#111827;font-weight:600;">${value}</span>
                </td>
              </tr>
            `).join("")}
            ${message ? `
              <tr>
                <td colspan="2" style="padding:14px 0 0;">
                  <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;font-weight:700;display:block;margin-bottom:6px;">💬 Additional Details</span>
                  <p style="font-size:14px;color:#374151;margin:0;line-height:1.7;background:#f9fafb;padding:12px;border-radius:8px;">${message}</p>
                </td>
              </tr>
            ` : ""}
          </table>
        </div>

        <!-- Footer -->
        <div style="background:#f9fafb;padding:18px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="font-size:12px;color:#9ca3af;margin:0;">
            ZeroWaste india · Furniture Division · New Delhi, India<br/>
            zerowaste1302@gmail.com · +91 92660 57770
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"ZeroWaste india Furniture" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || "zerowaste1302@gmail.com",
      subject: `🛋️ Furniture Request — ${action} · ${company} (${city})`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Furniture mail error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
