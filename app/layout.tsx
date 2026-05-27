import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Portfolio — Full Stack Developer',
  description: 'A passionate developer crafting exceptional digital experiences with modern technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'web developer'],
  openGraph: {
    title: 'Portfolio — Full Stack Developer',
    description: 'A passionate developer crafting exceptional digital experiences with modern technologies.',
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
        {/* 静态导出兜底：确保 JS 未加载时内容可见 */}
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
