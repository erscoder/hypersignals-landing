'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import EmailForm from './EmailForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" aria-labelledby="hero-heading">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hl-green/10 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hl-blue/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6"
        >
          <Image
            src="/logo.png"
            alt="HyperSignals logo"
            width={180}
            height={180}
            className="mx-auto"
            priority
          />
          <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase">
            Live signals for Hyperliquid
          </p>
        </motion.div>

        <motion.h1
          id="hero-heading"
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trade Smarter with{' '}
          <span className="gradient-text">Real-Time Signals</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whale movements. Funding extremes. Liquidation cascades. 
          Get the signals that matter, delivered instantly to Telegram.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <EmailForm variant="hero" />
        </motion.div>

        <motion.p
          className="text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join 500+ traders waiting for launch
        </motion.p>
      </div>
    </section>
  )
}
