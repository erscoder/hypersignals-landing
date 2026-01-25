import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hypersignals.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HyperSignals | Trading Signals for Hyperliquid',
    template: '%s | HyperSignals',
  },
  description: 'Real-time whale tracking, funding alerts, and liquidation signals for Hyperliquid perps. Get the edge you need.',
  keywords: ['hyperliquid', 'trading signals', 'whale tracking', 'crypto', 'perps', 'DeFi', 'liquidation alerts', 'funding rates'],
  authors: [{ name: 'erscoder', url: 'https://erscoder.com' }],
  creator: 'erscoder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'HyperSignals',
    title: 'HyperSignals | Trading Signals for Hyperliquid',
    description: 'Real-time whale tracking, funding alerts, and liquidation signals for Hyperliquid perps. Get the edge you need.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HyperSignals - Trading Signals for Hyperliquid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperSignals | Trading Signals for Hyperliquid',
    description: 'Real-time whale tracking, funding alerts, and liquidation signals for Hyperliquid perps.',
    images: ['/og-image.png'],
    creator: '@hypersignals',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
