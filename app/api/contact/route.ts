import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const smtpEmail = process.env.SMTP_EMAIL
    const smtpPass = process.env.SMTP_PASSWORD
    const receiverEmail = process.env.RECEIVER_EMAIL

    // Debug: log masked credentials to verify env is loaded
    console.log("SMTP_EMAIL:", smtpEmail ? `${smtpEmail.substring(0, 3)}***@${smtpEmail.split("@")[1]}` : "NOT SET")
    console.log("SMTP_PASSWORD:", smtpPass ? `${smtpPass.substring(0, 4)}**** (length: ${smtpPass.length})` : "NOT SET")
    console.log("RECEIVER_EMAIL:", receiverEmail || "NOT SET")

    const body = await request.json()
    const { fullName, phone, email, state } = body

    // Validate required fields
    if (!fullName || !phone || !email || !state) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD?.replace(/\s/g, ""),
      },
    })

    // Email to the business owner (notification)
    const mailOptions = {
      from: `"FreelanceHub" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Application: ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #000000; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
              FreelanceHub
            </h1>
            <p style="color: rgba(255,255,255,0.5); margin: 8px 0 0; font-size: 13px; letter-spacing: 0.5px;">
              NEW APPLICATION RECEIVED
            </p>
          </div>
          
          <div style="padding: 32px;">
            <h2 style="color: #000000; font-size: 20px; font-weight: 600; margin: 0 0 24px;">
              Applicant Details
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: rgba(0,0,0,0.45); font-size: 13px; font-weight: 500; width: 140px;">
                  Full Name
                </td>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: #000000; font-size: 14px; font-weight: 600;">
                  ${fullName}
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: rgba(0,0,0,0.45); font-size: 13px; font-weight: 500;">
                  Phone
                </td>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: #000000; font-size: 14px; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #000000; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: rgba(0,0,0,0.45); font-size: 13px; font-weight: 500;">
                  Email
                </td>
                <td style="padding: 14px 16px; border-bottom: 1px solid #f0f0f0; color: #000000; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #000000; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 16px; color: rgba(0,0,0,0.45); font-size: 13px; font-weight: 500;">
                  State
                </td>
                <td style="padding: 14px 16px; color: #000000; font-size: 14px; font-weight: 600;">
                  ${state}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 24px 32px; background: #fafafa; border-top: 1px solid #f0f0f0; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #000000; color: #ffffff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">
              Reply to Applicant
            </a>
          </div>
          
          <div style="padding: 20px 32px; text-align: center;">
            <p style="color: rgba(0,0,0,0.3); font-size: 12px; margin: 0;">
              This email was sent from the FreelanceHub application form.
            </p>
          </div>
        </div>
      `,
    }

    // Send confirmation email to the applicant
    const confirmationMail = {
      from: `"FreelanceHub" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "We received your application — FreelanceHub",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #000000; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
              FreelanceHub
            </h1>
          </div>
          
          <div style="padding: 32px;">
            <h2 style="color: #000000; font-size: 20px; font-weight: 600; margin: 0 0 12px;">
              Hi ${fullName},
            </h2>
            <p style="color: rgba(0,0,0,0.6); font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              Thank you for applying! We've received your application and our team will review it shortly. 
              You can expect to hear from us within <strong style="color: #000;">24 hours</strong>.
            </p>
            <p style="color: rgba(0,0,0,0.6); font-size: 15px; line-height: 1.7; margin: 0;">
              In the meantime, feel free to reply to this email if you have any questions.
            </p>
          </div>
          
          <div style="padding: 20px 32px; background: #fafafa; border-top: 1px solid #f0f0f0; text-align: center;">
            <p style="color: rgba(0,0,0,0.3); font-size: 12px; margin: 0;">
              © FreelanceHub — Your Hiring Experts
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMail)

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
