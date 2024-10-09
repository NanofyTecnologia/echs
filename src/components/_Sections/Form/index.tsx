import { styled } from '@mui/material'
import MuiTextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { inputComponentMaskPhone } from '@/lib/mask/InputPhoneMask'
import Container from '@/components/Container'

type FieldValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post('api/email', data)
      if (response.status !== 200) {
        throw new Error('Erro ao enviar e-mail')
      }
      reset()
      toast.success('Enviado com sucesso')
    } catch (error) {
      toast.error('Erro ao enviar')
    }
  }
  return (
    <>
      <section
        className="my-6 flex items-center justify-center md:my-12"
        id="formulario"
      >
        <Container>
          <div className="h-full w-[380px] border-t-2 border-primary p-5 shadow-md md:w-[448px]">
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
                  error={!!errors.name}
                  className=""
                />
                <TextField
                  {...register('email', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="E-mail"
                  autoComplete="off"
                  error={!!errors.email}
                />
                <TextField
                  {...register('phone', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="Telefone"
                  autoComplete="off"
                  InputProps={inputComponentMaskPhone}
                  error={!!errors.phone}
                />
                <TextField
                  {...register('subject', { required: true })}
                  fullWidth
                  variant="outlined"
                  label="Assunto"
                  autoComplete="off"
                  error={!!errors.subject}
                />
                <TextField
                  {...register('message')}
                  fullWidth
                  variant="outlined"
                  label="Mensagem"
                  multiline
                  rows={4}
                  error={!!errors.message}
                />
                <div className="text-end">
                  <Button
                    className="bg-primary duration-300 hover:bg-primary/80"
                    variant="contained"
                    type="submit"
                    size="large"
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
