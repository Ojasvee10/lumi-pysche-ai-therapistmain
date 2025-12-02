"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

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
            <Link href="/contact" className="text-rose-600 font-medium transition-colors">
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="">Select a subject</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Tell us what's on your mind"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you! We've received your message and will get back to you soon.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Email</p>
                  <p className="text-gray-900 font-semibold">support@lumipsyche.com</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Phone</p>
                  <p className="text-gray-900 font-semibold">+91 XXXXXXXXXX</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">Emergency Support</p>
                  <p className="text-red-600 font-bold text-lg">AASHRAY: 9820466726</p>
                  <p className="text-gray-600 text-sm mt-2">Available 24/7 in India</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-8 border-2 border-rose-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-700 leading-relaxed">
                We typically respond to all inquiries within 24-48 hours during business days. For urgent matters
                related to mental health crises, please contact our emergency support line above.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-rose-600 hover:text-rose-700 font-semibold">
                  Twitter
                </a>
                <a href="#" className="text-rose-600 hover:text-rose-700 font-semibold">
                  Instagram
                </a>
                <a href="#" className="text-rose-600 hover:text-rose-700 font-semibold">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-16 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
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
