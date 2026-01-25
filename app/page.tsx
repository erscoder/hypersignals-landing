import { Hero, Features, SignalExample, Pricing, FinalCTA, Footer } from './components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <SignalExample />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
