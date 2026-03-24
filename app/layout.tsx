import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
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
  const enableLuckyOrange =
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_ENABLE_LUCKY_ORANGE === 'true'

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-729761438"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-729761438');
          `}
        </Script>
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
