'use client'

import { useState } from 'react'
import { ArrowRight, Send, CheckCircle, Loader2 } from 'lucide-react'

interface EmailFormProps {
  variant?: 'hero' | 'cta'
  className?: string
}

export default function EmailForm({ variant = 'hero', className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    try {
      // TODO: Connect to email service (e.g., Resend, ConvertKit, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated delay
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center gap-3 text-hl-green ${className}`}>
        <CheckCircle className="w-6 h-6" aria-hidden="true" />
        <span className="text-lg">
          {variant === 'hero' 
            ? "You're on the list! We'll notify you at launch."
            : "You're in! Check your inbox soon."}
        </span>
      </div>
    )
  }

  const Icon = variant === 'hero' ? ArrowRight : Send
  const buttonText = variant === 'hero' ? 'Get Early Access' : 'Notify Me'
  const inputId = `email-${variant}`

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto ${className}`}
      noValidate
    >
      <div className="flex-1 relative">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          placeholder={variant === 'hero' ? 'Enter your email' : 'your@email.com'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          required
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
          className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hl-green/50 focus:border-hl-green/50 transition-all"
        />
        {status === 'error' && (
          <p id={`${inputId}-error`} className="absolute -bottom-6 left-0 text-red-400 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        aria-label={buttonText}
        className="px-8 py-4 bg-gradient-to-r from-hl-green to-hl-blue text-dark-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-hl-green/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-hl-green focus:ring-offset-2 focus:ring-offset-dark-900"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            {buttonText}
            <Icon className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
