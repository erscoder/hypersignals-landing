import { Twitter, Send, MessageCircle } from 'lucide-react'

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/hypersignals', icon: Twitter },
  { name: 'Telegram', href: 'https://t.me/hypersignals', icon: Send },
  { name: 'Discord', href: 'https://discord.gg/hypersignals', icon: MessageCircle },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 border-t border-white/5" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {currentYear} HyperSignals. Built by{' '}
          <a 
            href="https://erscoder.com" 
            className="text-hl-green hover:underline focus:outline-none focus:ring-2 focus:ring-hl-green focus:ring-offset-2 focus:ring-offset-dark-900 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            erscoder
          </a>
        </p>
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-6 text-sm text-gray-500">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-hl-green focus:ring-offset-2 focus:ring-offset-dark-900 rounded flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
