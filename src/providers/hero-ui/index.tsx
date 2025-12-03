'use client'

import { HeroUIProvider as Provider, ToastProvider } from '@heroui/react'
import { PropsWithChildren } from 'react'

export function HeroUIProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      {children}
      <ToastProvider />
    </Provider>
  )
}
