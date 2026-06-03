import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Supports both the book-pickup page form AND the home-page quick form
    const {
      name, phone, email, city,
      // Book-pickup specific
      address, pincode, vehicle, date, timeSlot, weight, categories,
      // Home form specific
      items, message,
    } = body;

    if (!name || !phone || !city) {
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

    // ── Determine form type ──
    const isDetailedForm = !!(vehicle || date || categories);

    const row = (label: string, value: string, highlight = false) =>
      value
        ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0fdf4;width:38%;vertical-align:top;">
              <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;font-weight:700;">${label}</span>
            </td>
            <td style="padding:10px 0;border-bottom:1px solid #f0fdf4;vertical-align:top;">
              <span style="font-size:14px;color:${highlight ? "#1a7c4f" : "#111827"};font-weight:${highlight ? "700" : "500"};">
                ${value}
              </span>
            </td>
          </tr>`
        : "";

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f8fffe;border-radius:16px;overflow:hidden;">

        <!-- Header -->
        <div style="background:linear-gradient(135deg,#111827 0%,#1a7c4f 100%);padding:32px;text-align:center;">
          <div style="font-size:36px;margin-bottom:8px;">📦</div>
          <h1 style="color:white;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;">
            New Pickup Request
          </h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">
            ZeroWaste india – Booking Portal
          </p>
        </div>

        <!-- Body -->
        <div style="background:white;padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row("👤 Name", name)}
            ${row("📞 Phone", phone)}
            ${row("📧 Email", email || "Not provided")}
            ${row("📍 City", city)}
            ${address ? row("🏠 Address", `${address}${pincode ? ` – ${pincode}` : ""}`) : ""}
            ${vehicle ? row("🚛 Vehicle", vehicle, true) : ""}
            ${date ? row("📅 Date", date) : ""}
            ${timeSlot ? row("🕐 Time Slot", timeSlot, true) : ""}
            ${weight ? row("⚖️ Weight", weight) : ""}
            ${categories ? row("🗂️ Categories", categories, true) : ""}
            ${items ? row("📦 Items", items, true) : ""}
            ${message ? `
              <tr>
                <td colspan="2" style="padding:14px 0 0;">
                  <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;font-weight:700;display:block;margin-bottom:6px;">💬 Additional Details</span>
                  <p style="font-size:14px;color:#374151;margin:0;line-height:1.7;background:#f9fafb;padding:12px;border-radius:8px;">${message}</p>
                </td>
              </tr>` : ""}
          </table>
        </div>

        <!-- Summary badge -->
        ${isDetailedForm ? `
        <div style="background:#f0fdf4;padding:16px 32px;border-top:1px solid #e5e7eb;">
          <p style="font-size:12px;color:#1a7c4f;font-weight:700;margin:0;">
            ✅ Detailed Pickup Form · ${date || "Date TBD"} · ${timeSlot || "Slot TBD"}
          </p>
        </div>` : ""}

        <!-- Footer -->
        <div style="background:#f9fafb;padding:18px 32px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="font-size:12px;color:#9ca3af;margin:0;">
            ZeroWaste india · New Delhi, India · hello@zerowasteindia.com · +91 88000 00000
          </p>
        </div>
      </div>
    `;

    const subject = isDetailedForm
      ? `📦 Pickup Scheduled – ${name} · ${date || "TBD"} · ${city}`
      : `📦 New Pickup Request – ${name} (${city})`;

    await transporter.sendMail({
      from: `"ZeroWaste india Bookings" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL || "hello@zerowasteindia.com",
      subject,
      html: emailHtml,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
