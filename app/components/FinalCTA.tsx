'use client'

import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'
import EmailForm from './EmailForm'

export default function FinalCTA() {
  return (
    <section className="py-24 px-6" aria-labelledby="cta-heading">
      <motion.div
        className="max-w-3xl mx-auto text-center glass rounded-3xl p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Bell className="w-16 h-16 text-hl-green mx-auto mb-6" aria-hidden="true" />
        <h2 id="cta-heading" className="text-4xl font-bold mb-4">
          Don't Miss the <span className="gradient-text">Launch</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Be the first to know when HyperSignals goes live. Early access = better prices.
        </p>
        
        <EmailForm variant="cta" />
      </motion.div>
    </section>
  )
}
