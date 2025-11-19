import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Lato } from 'next/font/google'
import Script from 'next/script'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { WhatsappButton } from '@/components/ui/whatsapp-button'
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
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFD6X9SB');`}
      </Script>
      <Providers>
        <html lang="pt-br">
          <body
            className={`bg-gradient-to-b from-white to-white text-black ${lato.className} ${lato.variable}`}
          >
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFD6X9SB"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
            <ToastContainer autoClose={3000} position="bottom-right" />
            <Navbar />
            {children}
            <WhatsappButton />
            <Footer />
          </body>
        </html>
      </Providers>
    </>
  )
}
