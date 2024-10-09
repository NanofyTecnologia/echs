import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import { ToastContainer } from 'react-toastify'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html lang="pt-br">
      <body
        className={`bg-gradient-to-b from-white to-white text-black ${lato.className} ${lato.variable}`}
      >
        <ToastContainer autoClose={5000} position="bottom-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
