import './global.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
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
  keywords: [
    'programming', 'software development', 'web development', 'notes', 
    'blog', 'software engineering', 'javascript', 'typescript', 
    'react', 'nextjs', 'tailwindcss', 'css', 'html', 'tech', 
    'coding', 'code', 'golang', 'python'
  ],
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
    <html lang="en" className={cx(inter.className)}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-8632014601674595" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col flex-grow max-w-xl mx-auto px-4 lg:px-0">
            <Navbar />
            <main className="flex-grow min-w-0 mt-20  flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
