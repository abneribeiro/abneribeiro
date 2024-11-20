import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://abneribeiro.vercel.app"),
  title: {
    default: 'Abner Ribeiro',
    template: '%s | Abner Ribeiro',
  },
  description: 'Here you can find more about me and my work as a software engineer.',
  keywords: [
    'programming', 'software development', 'web development', 'notes',
    'blog', 'software engineering', 'javascript', 'typescript',
    'react', 'nextjs', 'tailwindcss', 'css', 'html', 'tech',
    'coding', 'code', 'golang', 'python'
  ],
  openGraph: {
    title: 'Abner Ribeiro',
    description: 'Here you can find more about me and my work as a software engineer.',
    url: "https://abneribeiro.vercel.app",
    siteName: 'abneribeiro',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
          <div className="flex flex-col min-h-screen prevent-shift">
            <Navbar />
            <main className="flex-grow container max-w-4xl w-full">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  )
}
