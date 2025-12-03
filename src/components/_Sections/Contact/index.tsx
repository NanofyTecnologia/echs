import Link from 'next/link'

import { Mail, MapPinned, NotebookPen } from 'lucide-react'

import { FaWhatsapp } from 'react-icons/fa'

import Container from '@/components/Container'

export default function Contact() {
  return (
    <section className="bg-secondary w-full py-6 md:py-12" id="contato">
      <Container>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="text-xl font-bold text-white">
            Informações e Contato
          </div>
          <div className="bg-primary mt-2 h-0.5 w-8" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-0">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="inline-flex text-sm text-white/80">
              <FaWhatsapp className="h-auto w-6" />
              <Link
                href="https://wa.me//5516993127209"
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="whatsapp"
              >
                <div className="ml-2">(16) 99312-7209</div>
              </Link>
              <span className="mx-2">|</span>
              <Link
                href="https://wa.me//551633719014"
                className="hover:underline"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="whatsapp"
              >
                (16) 3371-9014
              </Link>
            </div>
            <div className="inline-flex text-sm text-white/80">
              <Mail className="h-auto w-6" />
              <div className="ml-2">contato@echs.com.br</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="inline-flex text-sm text-white/80">
              <MapPinned className="h-auto w-6" />
              <div className="ml-2">R. Rui Barbosa, 838 - São Carlos - SP</div>
            </div>
            <div className="inline-flex text-sm text-white/80">
              <NotebookPen className="h-auto w-6" />
              <div className="ml-2">Agendar horário,ﾠ</div>
              <Link
                href="https://wa.me//551633719014?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta"
                className="hover:text-primary text-white/60 duration-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="whatsapp"
              >
                clique aqui!
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
