'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, AlertTriangle, BarChart3, Wallet, Bell, CheckCircle, ArrowRight, Send } from 'lucide-react'
import { useState } from 'react'
// Using regular img for static export compatibility

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

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    features: ['5 alerts/day', 'Basic funding alerts', 'Community access'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    features: ['Unlimited alerts', 'Whale tracking', 'Custom alert rules', 'Priority delivery', 'API access'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Whale',
    price: '$149',
    period: '/month',
    features: ['Everything in Pro', 'Private Discord', 'Copy-trade signals', '1-on-1 support', 'Custom integrations'],
    cta: 'Join Whales',
    popular: false,
  },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to email service
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hl-green/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hl-blue/10 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-hl-green rounded-full animate-pulse" />
              <span className="text-gray-400">Live signals for Hyperliquid</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-8"
          >
            <img
              src="/logo.png"
              alt="HyperSignals"
              width={120}
              height={120}
              className="mx-auto"
            />
          </motion.div>

          <motion.h1
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
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-hl-green/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-hl-green to-hl-blue text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-hl-green/25 transition-all flex items-center justify-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-hl-green">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">You're on the list! We'll notify you at launch.</span>
              </div>
            )}
          </motion.div>

          <motion.p
            className="text-gray-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join 500+ traders waiting for launch
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Signals That <span className="gradient-text">Actually Matter</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No noise. No spam. Just actionable intelligence delivered in real-time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-2xl p-8 signal-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Example */}
      <section className="py-24 px-6 bg-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              See It In <span className="gradient-text">Action</span>
            </h2>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-6 max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              <div className="w-10 h-10 bg-hl-green/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-hl-green" />
              </div>
              <div>
                <p className="font-semibold">HyperSignals Bot</p>
                <p className="text-xs text-gray-500">just now</p>
              </div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-hl-green">🐋 WHALE ALERT</p>
              <p className="text-gray-300">
                <span className="text-white">$2.4M LONG</span> opened on <span className="text-hl-blue">BTC-PERP</span>
              </p>
              <p className="text-gray-400">
                Entry: $67,420 | Leverage: 10x
              </p>
              <p className="text-gray-400">
                Wallet: 0x1a2b...3c4d (Top 50 trader)
              </p>
              <div className="pt-3 mt-3 border-t border-white/10">
                <p className="text-xs text-gray-500">
                  Confidence: <span className="text-hl-green">HIGH</span> • 3 similar positions in last hour
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Start free. Upgrade when you're ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`glass rounded-2xl p-8 relative ${plan.popular ? 'border-hl-green/50 glow-green' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-hl-green text-dark-900 text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-hl-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-hl-green to-hl-blue text-dark-900 hover:shadow-lg hover:shadow-hl-green/25'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Bell className="w-16 h-16 text-hl-green mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">
            Don't Miss the <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Be the first to know when HyperSignals goes live. Early access = better prices.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:border-hl-green/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-hl-green to-hl-blue text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-hl-green/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Notify Me
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-hl-green">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">You're in! Check your inbox soon.</span>
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 HyperSignals. Built by <a href="https://erscoder.com" className="text-hl-green hover:underline">erscoder</a>
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
