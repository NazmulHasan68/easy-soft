'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader } from 'lucide-react'

interface FormData {
  firstName: string
  email: string
  companyName: string
  projectBudget: string
  projectBrief: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    companyName: '',
    projectBudget: '',
    projectBrief: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#81fa00]/10 border border-[#81fa00]/30 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-[#81fa00]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-gray-400 max-w-xs">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ firstName: '', email: '', companyName: '', projectBudget: '', projectBrief: '' })
          }}
          className="mt-8 px-6 py-2.5 rounded-full border border-[#81fa00]/30 text-[#81fa00] text-sm hover:bg-[#81fa00]/10 transition-all"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fa00]/50 focus:ring-2 focus:ring-[#81fa00]/20 focus:outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fa00]/50 focus:ring-2 focus:ring-[#81fa00]/20 focus:outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fa00]/50 focus:ring-2 focus:ring-[#81fa00]/20 focus:outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Budget</label>
          <select
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0F2318] border border-white/10 text-gray-300 focus:border-[#81fa00]/50 focus:ring-2 focus:ring-[#81fa00]/20 focus:outline-none transition-all text-sm"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Brief *</label>
        <textarea
          name="projectBrief"
          value={formData.projectBrief}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, goals, and any specific requirements..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-[#81fa00]/50 focus:ring-2 focus:ring-[#81fa00]/20 focus:outline-none transition-all text-sm resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          ⚠️ {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#81fa00] hover:bg-[#9dff1a] disabled:opacity-50 text-black font-semibold text-sm rounded-full transition-all duration-200 shadow-lg shadow-[#81fa00]/25"
      >
        {loading ? (
          <><Loader size={16} className="animate-spin" /> Sending...</>
        ) : (
          <>Send Message <Send size={16} /></>
        )}
      </button>
    </form>
  )
}