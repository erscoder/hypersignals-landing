import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hl-green': '#00ff88',
        'hl-blue': '#00d4ff',
        'hl-purple': '#a855f7',
        'dark': {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a24',
        }
      },
    },
  },
  plugins: [],
}

export default config
