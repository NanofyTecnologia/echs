import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Lato } from 'next/font/google'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
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
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
