import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import { site } from '../site.config'
import '../styles/globals.css'

const archivo = Archivo({ subsets: ['latin', 'latin-ext'], axes: ['wdth'], display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-archivo: ${archivo.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111729" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" href={site.icon} />
        <link rel="apple-touch-icon" href={site.icon} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
