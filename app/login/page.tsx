'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ArrowRight, Loader } from 'lucide-react'

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log('Login attempt:', form)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-[#0c2501] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#81fa00]/70 /5 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md mt-12"
      >
        {/* Card */}
        <div className="bg-[#0F2318] rounded-2xl border border-[#81fA00]/15 p-8 shadow-2xl shadow-[#81fa00]/70 /10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xl font-black text-white">
              easysoft<span className="text-[#81fa00]   text-2xl md:text-3xl  font-bold">.</span>
            </span>
          </div>

          <h1 className="text-2xl font-black text-white text-center mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-sm text-center mb-8">Sign in to your EasySoft dashboard</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                required
                placeholder="admin@easysoft.dev"
                className="w-full px-4 py-3 rounded-xl bg-[#f2f2f2]/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fA00]/50 focus:ring-2 focus:ring-[#81fa00]/70 /20 focus:outline-none text-sm transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <Link href="#" className="text-xs text-[#81fa00]   hover:text-[#81fa00]  transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-11 rounded-xl bg-[#f2f2f2]/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fA00]/50 focus:ring-2 focus:ring-[#81fa00]/70 /20 focus:outline-none text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#81fa00]/70  hover:bg-[#81fa00]  disabled:bg-[#81fa00]/70 /50 text-black font-bold text-sm rounded-full transition-all shadow-lg shadow-[#81fa00]/70 /25"
            >
              {loading ? (
                <><Loader size={16} className="animate-spin" /> Signing in...</>
              ) : (
                <>Sign In <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/contact" className="text-[#81fa00]   hover:text-[#81fa00]  font-semibold transition-colors">
              Contact us
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
