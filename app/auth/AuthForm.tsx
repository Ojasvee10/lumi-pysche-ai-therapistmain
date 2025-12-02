"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface AuthFormProps {
  isLogin: boolean
}

export default function AuthForm({ isLogin }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [name, setName] = useState("") // Added name field for signup
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (!isLogin && !name) {
      setError("Please enter your name")
      setIsLoading(false)
      return
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store user session
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: isLogin ? "User" : name,
          email,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
        }),
      )

      // Redirect to chat
      router.push("/chat")
    } catch (err) {
      setError("Authentication failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {!isLogin && (
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
            placeholder="Your full name"
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
          placeholder="At least 6 characters"
          required
        />
      </div>

      {!isLogin && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
            placeholder="Confirm your password"
            required
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white py-3 px-4 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer mt-6"
      >
        {isLoading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
      </button>
    </form>
  )
}
