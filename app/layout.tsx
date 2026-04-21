import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Providers } from '@/components/providers'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://strato.nexus'),
  title: {
    default: 'STRATO - DeFi Powered by Precious Metals',
    template: '%s | STRATO',
  },
  description:
    'Diverse asset classes, one platform. From crypto to precious metals to tokenized securities—investing made simple for everyone.',
  openGraph: {
    type: 'website',
    siteName: 'STRATO',
    images: [{ url: '/strato-logo.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@strato_net',
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'bsSj0bVLBITxA5ts0NsJlm2RlIfhD3KRUE1C4KDJnU8',
  },
}

export const viewport: Viewport = {
  themeColor: '#f9f9f9',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const enableLuckyOrange =
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_ENABLE_LUCKY_ORANGE === 'true'

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {enableLuckyOrange ? (
          <Script
            src="https://tools.luckyorange.com/core/lo.js?site-id=74ce1a8e"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
