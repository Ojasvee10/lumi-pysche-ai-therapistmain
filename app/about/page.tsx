"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-orange-100 px-6 py-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-pacifico text-2xl text-rose-600">
            LUMIPSYCHE
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/about" className="text-rose-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              Contact
            </Link>
          </div>
          <Link
            href="/auth"
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About LUMIPSYCHE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make mental health support accessible to every Indian, regardless of background or
            location.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              LUMIPSYCHE was born from a simple observation: mental health support in India is fragmented, expensive,
              and often inaccessible to those who need it most. We saw friends and family struggling with anxiety,
              depression, and stress—often in silence—because professional therapy felt out of reach.
            </p>
            <p>
              In 2024, we decided to change that. By combining cutting-edge AI with evidence-based therapeutic
              techniques, we created LUMI—a compassionate, intelligent companion that's available 24/7, affordable, and
              completely confidential.
            </p>
            <p>
              Today, thousands of Indians are using LUMIPSYCHE to understand their emotions better, manage stress, and
              build resilience. Our goal is simple: to ensure that every person has access to quality mental health
              support when they need it.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="px-6 py-16 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                desc: "Mental health support should be available to everyone, everywhere, at any time.",
              },
              {
                title: "Privacy First",
                desc: "Your conversations are sacred. We never share, sell, or exploit your data.",
              },
              {
                title: "Evidence-Based",
                desc: "Every response is grounded in cognitive behavioral therapy and neuroscience.",
              },
              {
                title: "Cultural Respect",
                desc: "We understand the unique challenges faced by Indians and adapt our support accordingly.",
              },
              {
                title: "Empathy",
                desc: "We listen without judgment and respond with genuine care and understanding.",
              },
              {
                title: "Transparency",
                desc: "We're honest about what AI can and can't do. LUMI is a supplement, not a replacement.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-rose-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Team</h2>
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            LUMIPSYCHE is built by therapists, psychologists, and AI engineers who believe in the power of technology to
            improve mental health. We work with clinical advisors to ensure every feature is safe and effective.
          </p>
          <Link
            href="/contact"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-16 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start?</h2>
          <Link
            href="/chat"
            className="bg-white text-rose-600 hover:bg-gray-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Chat Now for Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 LUMIPSYCHE. This is not a replacement for licensed professional therapy.</p>
        </div>
      </footer>
    </div>
  )
}
