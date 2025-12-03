import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

import { env } from '@/lib/env/index.mjs'

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json()

  try {
    await sendEmail({ name, email, phone, subject, message })

    return NextResponse.json({
      sent: true,
      message: 'Contato enviado com sucesso!',
    })
  } catch (error) {
    if (error)
      return NextResponse.json({
        sent: false,
        message: 'Erro ao enviar contato!',
      })
  }
}

interface SendEmailParams {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
})

async function sendEmail({
  name,
  email,
  phone,
  subject,
  message,
}: SendEmailParams) {
  const html = `
    <body>
      <div style="max-width: 600px; border: 0.5px solid; margin: 16px auto; border-radius: 8px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <div style="background-color: #e75c4f; margin-bottom: 16px; padding: 16px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
          <h1 style="text-align: center; font-size: 24px; font-weight: 600; color: #ffffff; margin: 0;">
            Contato via site
          </h1>
        </div>
        
        <div style="padding: 16px;">
          <span style="font-size: 16px; font-weight: 600;">📢 Nanofy informa:</span>
          <p style="margin-top: 24px; margin-bottom: 8px; color: #374151;">
            Você recebeu um novo contato através do formulário do seu site!
          </p>
          
          <p style="margin-bottom: 8px; color: #374151;">
            <strong>👤 Nome:</strong> ${name}
          </p>
          <p style="margin-bottom: 8px; color: #374151;">
            <strong>📧 E-mail:</strong> <a href="mailto:${email}" style="color: #374151; text-decoration: none;">${email}</a>
          </p>
          <p style="margin-bottom: 8px; color: #374151;">
            <strong>📱 Contato:</strong> ${phone}
          </p>
          
          <p style="margin-top: 16px; margin-bottom: 8px; color: #374151;">
            <strong>📝 Assunto:</strong> ${subject}
          </p>
          <p style="color: #374151;">
            <strong>💬 Mensagem:</strong> ${message}
          </p>
        </div>
        
        <div style="margin-top: 16px; padding: 16px; font-size: 14px; color: #4b5563;">
          <div style="margin-bottom: 16px;">
            <p style="margin-top: 0; margin-bottom: 8px;">
              Por enquanto é isso! Responda ao seu contato utilizando os dados fornecidos.
            </p>
            <p style="margin-top: 0; margin-bottom: 0;">Até mais! 👋</p>
          </div>
          
          <div style="display: flex; font-size: 12px; margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 8px;">
            <p style="margin: 0;">
              quarta-feira, 3 de dezembro de 2025.&nbsp;
            </p>
            <p style="margin: 0;">Nanofy Tecnologia Ltda</p>
          </div>
        </div>
      </div>
    </body>
  `

  return transporter.sendMail({
    from: `"Contato via Site" <${env.NOREPLY_USER}>`,
    to: env.SENDER_USER,
    subject: `Novo contato via site: ${subject}`,
    html,
  })
}
