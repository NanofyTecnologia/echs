import { Tailwind } from '@react-email/components'

interface TemplateProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const template = ({ name, email, phone, subject, message }: TemplateProps) => {
  return (
    <Tailwind>
      <div className="mx-auto max-w-2xl bg-white px-6 py-8">
        <div>
          <h1 className="uppercase">contato via site</h1>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-700">Olá Fernando,</p>

          <p className="mt-2 leading-loose text-gray-600">
            Você recebeu um contato de{' '}
            <span className="font-semibold">{name} </span>
            através do formulário do site.
          </p>

          <div className="space-y-2 text-gray-800">
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>

            <p>
              <span className="font-semibold">Número:</span> {phone}
            </p>

            <p>
              <span className="font-semibold">Assunto:</span> {subject}
            </p>

            <p>
              <span className="font-semibold">Mensagem:</span> {message}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p>
            <span className="font-semibold">Recebido em: </span>

            {new Date().toLocaleDateString('pt-BR', { dateStyle: 'full' })}
          </p>
        </div>
      </div>
    </Tailwind>
  )
}

export { template }
