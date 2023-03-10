import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { Chivo_Mono } from '@next/font/google'
import MainLayout from '../layout/main-layout'
import MobileNavContextProvider from '../context/mobile-nav-context'

// config font
const ChivoMono = Chivo_Mono({
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={ChivoMono.className}>
      <MobileNavContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MobileNavContextProvider>
      <Analytics />
    </div>
  )
}

export default MyApp
