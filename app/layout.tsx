import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abner Ribeiro',
    template: '%s | Abner Ribeiro',
  },
  description: 'Here you can find more about me and my work as a software engineer.',
  keywords: ['programming', 'software development', 'web development', 'notes', 'blog','software engineering', 'javascript', 'typescript', 'react', 'nextjs', 'tailwindcss', 'css', 'html','tech', 'coding', 'code','golang','python'],
  openGraph: {
    title: 'Abner Ribeiro',
    description: 'Here you can find more about me and my work as a software engineer.',
    url: baseUrl,
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        inter.className
      )}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-8632014601674595"></meta>
      </head>
      <body className="antialiased min-h-screen flex flex-col max-w-xl px-4 lg:mx-auto">
        <Navbar />
        <main className="flex-auto flex-grow min-w-0 mt-20 pb-4 flex flex-col md:px-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
