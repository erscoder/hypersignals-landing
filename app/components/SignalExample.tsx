'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function SignalExample() {
  return (
    <section className="py-24 px-6 bg-dark-800/50" aria-labelledby="signal-example-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="signal-example-heading" className="text-4xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-6 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          role="figure"
          aria-label="Example of a whale alert signal"
        >
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
            <div className="w-10 h-10 bg-hl-green/20 rounded-full flex items-center justify-center" aria-hidden="true">
              <Zap className="w-5 h-5 text-hl-green" />
            </div>
            <div>
              <p className="font-semibold">HyperSignals Bot</p>
              <p className="text-xs text-gray-500">just now</p>
            </div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <p className="text-hl-green" role="img" aria-label="Whale emoji">🐋 WHALE ALERT</p>
            <p className="text-gray-300">
              <span className="text-white font-semibold">$2.4M LONG</span> opened on{' '}
              <span className="text-hl-blue">BTC-PERP</span>
            </p>
            <p className="text-gray-400">
              Entry: $67,420 | Leverage: 10x
            </p>
            <p className="text-gray-400">
              Wallet: 0x1a2b...3c4d (Top 50 trader)
            </p>
            <div className="pt-3 mt-3 border-t border-white/10">
              <p className="text-xs text-gray-500">
                Confidence: <span className="text-hl-green font-medium">HIGH</span> • 3 similar positions in last hour
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
