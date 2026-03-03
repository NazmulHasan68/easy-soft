'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  index?: number
  featured?: boolean
}

export default function ServiceCard({ service, index = 0, featured = false }: ServiceCardProps) {
    const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-2xl p-6 border transition-all duration-300 ${
        featured
          ? 'bg-[#0c2701] border-[#81fa00]/40 hover:border-[#81fa00]/70 hover:shadow-xl hover:shadow-[#81fa00]/20'
          : 'bg-[#f2f2f2] dark:bg-[#0c2701]/50 border-gray-200 dark:border-[#81fa00]/15 hover:border-[#81fa00]/40 hover:shadow-xl hover:shadow-[#81fa00]/10'
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#81fa00]/15 border border-[#81fa00]/25 flex items-center justify-center text-2xl mb-5 group-hover:bg-[#81fa00]/25 transition-colors">
         <Icon size={24} className="text-[#81fa00]" />  
      </div>

      {/* Price tag */}
      <div className="absolute top-6 right-6">
        <span className="text-xs font-semibold text-[#81fa00]/50 dark:text-[#81fa00] bg-[#81fa00]/10 px-2.5 py-1 rounded-full border border-[#81fa00]/20">
          {service.price}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#131313] dark:text-white mb-3 pr-20 group-hover:text-[#81fa00]/80 dark:group-hover:text-[#81fa00] transition-colors">
        {service.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
            <Check size={14} className="text-[#81fa00] mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#81fa00] dark:text-[#81fa00]/80 hover:text-[#81fa00]/80 transition-colors group/link"
      >
        Get Started
        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}