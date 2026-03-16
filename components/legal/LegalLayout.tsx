'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Section {
  title: string
  content: string | string[]
}

interface LegalLayoutProps {
  badge: string
  title: string
  subtitle: string
  effectiveDate: string
  sections: Section[]
}

export default function LegalLayout({ badge, title, subtitle, effectiveDate, sections }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0c2501] relative overflow-hidden">

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-[140px] opacity-[0.05]"
          style={{ background: '#81fa00' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[120px] opacity-[0.04]"
          style={{ background: '#81fa00' }} />
      </div>

      {/* Dot grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-8 py-16">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-[#81fa00] transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.28em] text-[#81fa00]/70 mb-4">
            {badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            {title}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{subtitle}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F2318] border border-[#81fa00]/10">
            <div className="w-1 h-1 rounded-full bg-[#81fa00]/60" />
            <span className="text-[11px] text-gray-600">Effective Date: {effectiveDate}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#81fa00]/20 via-[#81fa00]/5 to-transparent mb-12" />

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[10px] font-black text-[#81fa00]/30 mt-1 tabular-nums w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-white font-black text-base leading-snug">{section.title}</h2>
              </div>
              <div className="pl-9">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-gray-500 text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#81fa00]/40 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm leading-relaxed">{section.content}</p>
                )}
              </div>
              {i < sections.length - 1 && (
                <div className="mt-10 h-px bg-[#81fa00]/6" />
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-5 rounded-2xl bg-[#0F2318] border border-[#81fa00]/10">
          <p className="text-xs text-gray-600 leading-relaxed">
            If you have any questions about this policy, contact us at{' '}
            <a href="mailto:hello@easysoft.dev" className="text-[#81fa00]/70 hover:text-[#81fa00] transition-colors duration-200">
              hello@easysoft.dev
            </a>
            {' '}or write to us at Easysoft LLC, 7901 4th St N, Ste 300, St. Petersburg, FL 33702, USA.
          </p>
        </div>

      </div>
    </main>
  )
}