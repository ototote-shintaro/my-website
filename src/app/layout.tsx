import type { Metadata } from 'next'
import { Noto_Serif_JP, Roboto } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import Header from './Header'
import HeaderMenu from './components/HeaderMenu'

const robot = Roboto({
  subsets: ['latin'],
  weight: '300',
  preload: false,
})

const notoSerif = Noto_Serif_JP({
  weight: '200',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Shintaro Tanaka',
  description: 'Shintaro Tanaka Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={notoSerif.className}>
        <div className='flex flex-col min-h-screen max-w-full'>
          <Header />
          <main className='flex-grow'>
            {children}
          </main>
          <HeaderMenu />
          <Footer />
        </div>
      </body>
    </html>
  )
}
