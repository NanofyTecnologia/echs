import { NextRequest, NextResponse } from 'next/server'

import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

import { template } from '@/components/template/email'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      secure: true,
      port: 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const emailHtml = await render(
      template({
        name,
        email,
        phone,
        subject,
        message,
      }),
    )

    const info = transporter.sendMail({
      from: process.env.NOREPLY_USER,
      to: process.env.SENDER_USER,
      subject: `Novo contato via site: ${subject}`,
      replyTo: email,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, info })
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
