import { type PropsWithChildren } from 'react'

import { HeroUIProvider } from './hero-ui'
import { ReactQueryProvider } from './react-query'

export function Providers({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </HeroUIProvider>
  )
}
