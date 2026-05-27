import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { site } from '@/lib/data'

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <noscript>{`
          <style>
            [style*="opacity: 0"],
            [style*="opacity:0"],
            [style*="transform:translateY"],
            [style*="transform:translateX"],
            [style*="transform:scale"] {
              opacity: 1 !important;
              transform: none !important;
            }
          </style>
        `}</noscript>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
