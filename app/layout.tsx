import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Strato Nexus - Stability Meets Opportunity',
  description:
    'Diverse asset classes, one platform. From crypto to precious metals to tokenized securities—investing made simple for everyone.',
}

export const viewport: Viewport = {
  themeColor: '#f9f9f9',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-HZMGT8Q60M" />
        <Script
          src="https://tools.luckyorange.com/core/lo.js?site-id=74ce1a8e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

