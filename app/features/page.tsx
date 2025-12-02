"use client"

import Link from "next/link"

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-orange-100 px-6 py-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-pacifico text-2xl text-rose-600">
            LUMIPSYCHE
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/about" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/features" className="text-rose-600 font-medium transition-colors">
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Powerful Features for Your Wellness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to understand, manage, and improve your mental health in one place.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {[
            {
              title: "24/7 AI Chat Support",
              desc: "Talk to LUMI anytime, anywhere. Our AI therapist is trained in cognitive behavioral therapy and responds with empathy and insight.",
              icon: "💬",
            },
            {
              title: "Emotion Detection",
              desc: "LUMI understands your emotional state through advanced sentiment analysis and provides targeted support based on your feelings.",
              icon: "❤️",
            },
            {
              title: "Mood Tracking",
              desc: "Track your emotional patterns over time with beautiful visualizations. Understand what triggers your moods and celebrate progress.",
              icon: "📊",
            },
            {
              title: "Guided Exercises",
              desc: "Access breathing exercises, meditation techniques, and stress-relief activities designed by mental health professionals.",
              icon: "🧘",
            },
            {
              title: "Journal Your Journey",
              desc: "Express your thoughts privately. Journaling helps process emotions and provides insights into your mental patterns.",
              icon: "📝",
            },
            {
              title: "Session History",
              desc: "Review past conversations with LUMI to track progress and identify patterns in your mental health journey.",
              icon: "📖",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="px-6 py-16 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Privacy & Security</h2>
            <p className="text-lg text-gray-600">Your trust is everything to us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Encryption",
                desc: "All your conversations are encrypted and stored securely.",
              },
              {
                title: "No Data Sharing",
                desc: "We never sell, share, or use your data for marketing purposes.",
              },
              {
                title: "HIPAA Compliant",
                desc: "We follow healthcare privacy standards to protect your information.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing or CTA */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-2xl p-12 text-center border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Free Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            No credit card required. Chat with LUMI for free and experience the difference.
          </p>
          <Link
            href="/chat"
            className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Start Chatting
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
