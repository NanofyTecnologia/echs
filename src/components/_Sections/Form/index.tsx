import { zodResolver } from '@hookform/resolvers/zod'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import MuiTextField from '@mui/material/TextField'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Container from '@/components/Container'
import { inputComponentMaskPhone } from '@/lib/mask/InputPhoneMask'

import { useSendEmail } from './_hooks/use-send-email'
import { emailData, emailSchema } from './_schema'

export default function Content() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<emailData>({
    resolver: zodResolver(emailSchema),
  })

  const { mutate: handleSendEmail } = useSendEmail()

  const onSubmit: SubmitHandler<emailData> = (data) => {
    handleSendEmail(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('E-mail enviado com sucesso!')
          reset()
        },
        onError: () => {
          toast.error('Houve um problema ao enviar seu e-mail!')
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
          <div className="h-full w-full border-t-2 border-primary p-5 shadow-md md:w-[448px]">
            <div className="w-full text-center text-sm font-bold md:text-lg">
              Formulário de Contato
            </div>
            <div className="mb-4 mt-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <TextField
                  {...register('name', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="Nome"
                  autoComplete="off"
                  error={!!errors.name?.message}
                  className=""
                  disabled={isSubmitting}
                />
                <TextField
                  {...register('email', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="E-mail"
                  autoComplete="off"
                  error={!!errors.email?.message}
                  disabled={isSubmitting}
                />
                <TextField
                  {...register('phone', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="Telefone"
                  autoComplete="off"
                  InputProps={inputComponentMaskPhone}
                  error={!!errors.phone?.message}
                  disabled={isSubmitting}
                />
                <TextField
                  {...register('subject', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="Assunto"
                  autoComplete="off"
                  error={!!errors.subject?.message}
                  disabled={isSubmitting}
                />
                <TextField
                  {...register('message')}
                  fullWidth
                  variant="outlined"
                  label="Mensagem"
                  multiline
                  rows={4}
                  error={!!errors.message?.message}
                  disabled={isSubmitting}
                />
                <div className="text-end">
                  <Button
                    className="bg-primary duration-300 hover:bg-primary/80"
                    variant="contained"
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: '#e75c4f',
                      fontSize: 12,
                      '&:hover': {
                        backgroundColor: 'rgb(231 92 79 / 0.7)',
                        transitionDuration: 0.3,
                      },
                    }}
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

const TextField = styled(MuiTextField)(() => ({
  color: '#f1f5f9',

  '& input, textarea': {
    color: '#585858',
    fontSize: '14px',
  },

  '& .MuiFormLabel-root': {
    color: '#b1b1b1',
  },

  '& label.Mui-focused': {
    color: '#94a3b8',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '0.0rem',
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#b3b3b3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e75c4f69',
    },
  },

  '& .Mui-error': {
    '&:hover fieldset': {
      borderColor: '#a82a2a',
    },
  },
}))
