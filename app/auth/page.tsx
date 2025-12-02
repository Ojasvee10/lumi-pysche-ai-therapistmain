"use client"

import { useState } from "react"
import Link from "next/link"
import AuthForm from "./AuthForm"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="font-pacifico text-3xl text-rose-600 inline-block mb-4">
            LUMIPSYCHE
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">{isLogin ? "Welcome Back" : "Start Your Journey"}</h1>
          <p className="text-gray-600 mt-2">
            {isLogin ? "Continue with your therapy sessions" : "Join LUMIPSYCHE for free mental health support"}
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AuthForm isLogin={isLogin} />

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-rose-600 hover:text-rose-700 font-medium transition-colors cursor-pointer"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              href="/chat"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors block text-center"
            >
              Continue as Guest
            </Link>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500 space-y-2">
            <p>By continuing, you agree to our Terms & Privacy Policy</p>
            <p className="font-semibold text-amber-700 bg-amber-50 p-2 rounded">
              ⚠️ Not a replacement for licensed professional therapy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
