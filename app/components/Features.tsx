'use client'

import { motion } from 'framer-motion'
import { Wallet, TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Whale Tracking',
    description: 'Get alerted when big players open or close massive positions. Follow the smart money.',
    color: 'text-hl-green',
  },
  {
    icon: TrendingUp,
    title: 'Funding Rate Alerts',
    description: 'Extreme funding rates signal opportunities. Know when the market is overleveraged.',
    color: 'text-hl-blue',
  },
  {
    icon: AlertTriangle,
    title: 'Liquidation Alerts',
    description: 'Large liquidations create volatility. Be ready to capitalize on the chaos.',
    color: 'text-yellow-400',
  },
  {
    icon: BarChart3,
    title: 'Volume Spikes',
    description: 'Unusual volume precedes big moves. Catch breakouts before they happen.',
    color: 'text-hl-purple',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="features-heading" className="text-4xl font-bold mb-4">
            Signals That <span className="gradient-text">Actually Matter</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No noise. No spam. Just actionable intelligence delivered in real-time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6" role="list">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="glass rounded-2xl p-8 signal-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              role="listitem"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
