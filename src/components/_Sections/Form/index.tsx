'use client'

import { addToast, Button } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Container from '@/components/Container'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { useSendEmail } from './_hooks/use-send-email'
import { EmailData, emailSchema } from './_schema'

export default function Content() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const { mutate: handleSendEmail } = useSendEmail()

  const onSubmit: SubmitHandler<EmailData> = (data) => {
    setIsLoading(true)
    handleSendEmail(
      { ...data },
      {
        onSuccess: () => {
          addToast({
            title: 'Sucesso',
            description: 'Seu e-mail foi enviado com sucesso!',
            color: 'success',
          })
          reset()
          setIsLoading(false)
        },
        onError: () => {
          addToast({
            title: 'Erro',
            description: 'Ocorreu um erro ao enviar o e-mail',
            color: 'danger',
          })
          setIsLoading(false)
        },
      },
    )
  }

  return (
    <>
      <section
        className="my-6 flex items-center justify-center md:my-12"
        id="formulario"
      >
        <Container>
          <div className="border-primary h-full w-full border-t-2 p-5 shadow-md md:w-md">
            <div className="w-full text-center text-sm font-bold md:text-lg">
              Formulário de Contato
            </div>
            <div className="mt-8 mb-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  {...register('name')}
                  placeholder="Nome"
                  error={errors.name?.message}
                  disabled={isLoading}
                />
                <Input
                  placeholder="E-mail"
                  autoComplete="off"
                  error={errors.email?.message}
                  disabled={isLoading}
                  {...register('email')}
                />
                <Input
                  placeholder="Celular"
                  autoComplete="off"
                  error={errors.phone?.message}
                  disabled={isLoading}
                  {...register('phone')}
                />
                <Input
                  placeholder="Assunto"
                  autoComplete="off"
                  error={errors.subject?.message}
                  disabled={isLoading}
                  {...register('subject')}
                />
                <Textarea
                  placeholder="Mensagem"
                  autoComplete="off"
                  error={errors.message?.message}
                  disabled={isLoading}
                  {...register('message')}
                />

                <div className="text-end">
                  <Button
                    type="submit"
                    size="md"
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    className="bg-primary hover:bg-primary/80 rounded-sm text-white duration-300"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
