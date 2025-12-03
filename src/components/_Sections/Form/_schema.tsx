import { z } from 'zod'

export const emailSchema = z.object({
  name: z.string().min(1, 'Insira seu nome'),
  email: z.string().email('E-mail inválido').min(1, 'Insira seu e-mail'),
  phone: z.string().min(1, 'Insira seu telefone'),
  subject: z.string().min(1, 'Informe o assunto do e-mail'),
  message: z.string().min(1, 'Coloque uma mensagem no e-mail'),
})

export type EmailData = z.infer<typeof emailSchema>
