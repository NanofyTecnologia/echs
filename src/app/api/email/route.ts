import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json()
  try {
    await sendEmail({ name, email, phone, subject, message })
    return NextResponse.json({
      sent: true,
      message: 'Contato enviado',
    })
  } catch (error) {
    return NextResponse.json({
      sent: false,
      message: 'Erro ao enviar o contato',
    })
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.USER_AUTH, pass: process.env.PASS_AUTH },
})

const sendEmail = async (data: any) => {
  const { name, email, phone, subject, message } = data
  const body = `
  <div>
  <b>Nome:</b> ${name}
  </div>
  <div>
    <b>Email:</b> ${email}
  </div>
  <div>
    <b>Telefone:</b> ${phone}
  </div>
  <div>
    <b>Assunto:</b> ${subject}
  </div>
  <div>
    <b>Mensagem:</b> ${message}
  </div>`
  const info = await transporter.sendMail({
    from: email,
    to: 'contato@echscontabilidade.com.br',
    subject,
    html: body,
  })

  console.log('Message sent: %s', info.messageId)
}
