import type { Metadata } from 'next'
import { Noto_Serif_JP, Roboto } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import Header from './Header'

const robot = Roboto({
  subsets: ['latin'],
  weight: '300',
  preload: false,
})

const notoSerif = Noto_Serif_JP({
  weight: '300',
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
  const language = 'ja';
  return (
    <html lang="ja">
      <body className={language === 'ja' ? notoSerif.className : robot.className}>
        <div className='flex flex-col min-h-screen max-w-full'>
          <Header />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
