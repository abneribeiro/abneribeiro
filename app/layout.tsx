import './global.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Condensed, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import StructuredData from './components/structured-data'


const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-ibm-plex-sans-condensed',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-lora',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://abneribeiro.vercel.app"),
  title: {
    default: 'Abner Ribeiro',
    template: '%s | Abner Ribeiro',
  },
  description: 'I build modern web applications with clean code and great user experiences.',
  keywords: [
    'programming', 'software development', 'web development', 'notes',
    'blog', 'software engineering', 'javascript', 'typescript',
    'react', 'nextjs', 'tailwindcss', 'css', 'html', 'tech',
    'coding', 'code', 'golang', 'python'
  ],
  openGraph: {
    title: 'Abner Ribeiro',
    description: 'I build modern web applications with clean code and great user experiences.',
    url: "https://abneribeiro.vercel.app",
    siteName: 'abneribeiro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abner Ribeiro',
    description: 'I build modern web applications with clean code and great user experiences.',
    creator: '@abneribeiroo',
    site: '@abneribeiroo',
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
    <html lang="en" className={`${ibmPlexSansCondensed.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="color-scheme" content="light dark" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(theme) {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (theme === 'system' && prefersDark) || (!theme && prefersDark);
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                }
                
                // Listen for system theme changes
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                mediaQuery.addEventListener('change', function(e) {
                  const stored = localStorage.getItem('theme');
                  if (!stored || stored === 'system') {
                    setTheme('system');
                  }
                });
                
                const stored = localStorage.getItem('theme') || 'system';
                setTheme(stored);
              })();
            `,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="max-w-4xl mx-auto px-6 py-12">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
