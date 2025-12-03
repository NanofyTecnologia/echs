'use client'

import Link from 'next/link'

import { SiWhatsapp } from 'react-icons/si'

export function WhatsappButton() {
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      href="https://api.whatsapp.com/send?phone=551633719014&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Echs%20Contabilidade"
    >
      <div className="fixed bottom-5 right-5 animate-bounce rounded-full bg-green-600 p-2">
        <SiWhatsapp className="h-8 w-8 object-cover text-white" />
      </div>
    </Link>
  )
}
