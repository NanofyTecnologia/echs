import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Lato } from 'next/font/google'
import Link from 'next/link'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { ToastContainer } from 'react-toastify'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Providers } from '@/providers'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'ECHS Contabilidade',
  description: 'Desenvolvido por Nanofy Tecnologia Ltda',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="pt-br">
        <body
          className={`bg-gradient-to-b from-white to-white text-black ${lato.className} ${lato.variable}`}
        >
          <ToastContainer autoClose={3000} position="bottom-right" />
          <Navbar />
          {children}
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href="https://api.whatsapp.com/send?phone=551633719014&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Echs%20Contabilidade"
          >
            <div className="fixed bottom-5 right-5 animate-bounce rounded-full bg-green-600 p-2">
              <SiWhatsapp className="h-8 w-8 object-cover text-white" />
            </div>
          </Link>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
