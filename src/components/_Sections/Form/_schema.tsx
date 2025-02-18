import { z } from 'zod'

export const emailSchema = z.object({
  name: z.string({ message: 'Insira seu nome' }).min(1, 'Insira seu nome'),
  email: z.string({ message: 'Insira seu email' }).min(1, 'Insira seu e-mail'),
  phone: z
    .string({ message: 'Insira seu telefone' })
    .min(1, 'Insira seu telefone'),
  subject: z
    .string({ message: 'Informe o assunto do e-mail' })
    .min(1, 'Informe o assunto do e-mail'),
  message: z
    .string({ message: 'Coloque uma mensagem no e-mail' })
    .min(1, 'Coloque uma mensagem no e-mail'),
})

export type emailData = z.infer<typeof emailSchema>
