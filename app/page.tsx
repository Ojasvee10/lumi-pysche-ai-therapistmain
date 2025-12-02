"use client"

import Link from "next/link"

export default function Home() {
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
            <Link href="/features" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/auth" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
              Sign In
            </Link>
            <Link
              href="/auth"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-20 sm:py-32 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-medium">
                आपके लिए मानसिक स्वास्थ्य समर्थन
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Mental Health Companion
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Chat with LUMI, an AI therapist trained in cognitive behavioral therapy. Available 24/7, completely
              confidential, and designed specifically for Indian users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/chat"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                Start Chatting Now
              </Link>
              <Link
                href="/auth"
                className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/indian-woman-on-phone-looking-peaceful-and-calm-me.jpg"
              alt="Mental health support"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-20 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose LUMIPSYCHE?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-chat-smile-3-line text-2xl text-rose-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Chat Anytime</h3>
              <p className="text-gray-600 leading-relaxed">
                Talk to LUMI whenever you need support. No appointments, no waiting—just instant, confidential therapy
                in your language.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Completely Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your conversations are encrypted and secure. We never share your data with anyone. Your privacy is our
                priority.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600 leading-relaxed">
                Built on cognitive behavioral therapy and neuropsychology. Designed to help you understand and manage
                your emotions effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Sign Up", desc: "Quick email signup, just 30 seconds" },
            { num: "2", title: "Start Chat", desc: "Talk to LUMI about anything on your mind" },
            { num: "3", title: "Get Support", desc: "Receive personalized therapeutic guidance" },
            { num: "4", title: "Track Progress", desc: "Monitor your mood and wellbeing over time" },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-20 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of Indians who are already benefiting from LUMIPSYCHE. Your first chat is completely free.
          </p>
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-pacifico text-2xl text-rose-400 mb-4">LUMIPSYCHE</h3>
              <p className="text-gray-400">AI mental health support for Indians.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/chat" className="hover:text-rose-400 transition-colors">
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-rose-400 transition-colors">
                    Mood Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-rose-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-red-900/50 rounded-lg p-4">
              <p className="text-sm font-bold mb-2">Crisis Support</p>
              <p className="text-lg font-bold text-red-300">AASHRAY: 9820466726</p>
              <p className="text-xs text-gray-400 mt-2">24/7 in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 LUMIPSYCHE. This is not a replacement for licensed professional therapy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
