'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

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

export default function Pricing() {
  return (
    <section className="py-24 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="pricing-heading" className="text-4xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6" role="list" aria-label="Pricing plans">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`glass rounded-2xl p-8 relative ${plan.popular ? 'border-hl-green/50 glow-green' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              role="listitem"
              aria-labelledby={`plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-hl-green text-dark-900 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 id={`plan-${plan.name.toLowerCase()}`} className="text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hl-green flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-hl-green focus:ring-offset-2 focus:ring-offset-dark-900 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-hl-green to-hl-blue text-dark-900 hover:shadow-lg hover:shadow-hl-green/25'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                aria-label={`${plan.cta} - ${plan.name} plan at ${plan.price}${plan.period}`}
              >
                {plan.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
