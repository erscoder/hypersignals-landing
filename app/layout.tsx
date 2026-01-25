import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HyperSignals | Trading Signals for Hyperliquid',
  description: 'Real-time whale tracking, funding alerts, and liquidation signals for Hyperliquid perps. Get the edge you need.',
  keywords: 'hyperliquid, trading signals, whale tracking, crypto, perps, DeFi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
