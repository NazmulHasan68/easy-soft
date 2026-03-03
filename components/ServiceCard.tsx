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
          ? 'bg-[#0F2318] border-[#81fA00]/40 hover:border-[#81fA00]/70 hover:shadow-xl hover:shadow-green-500/15'
          : 'bg-[#f2f2f2] dark:bg-[#0F2318]/50 border-gray-200 dark:border-[#81fA00]/15 hover:border-[#81fA00]/40 hover:shadow-xl hover:shadow-green-500/10'
      }`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-[#81fA00]/25 flex items-center justify-center text-2xl mb-5 group-hover:bg-green-500/25 transition-colors">
         <Icon size={24} className="text-green-400 " />  
      </div>

      {/* Price tag */}
      <div className="absolute top-6 right-6">
        <span className="text-xs font-semibold text-green-400  dark:text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-[#81fA00]/20">
          {service.price}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#131313] dark:text-white mb-3 pr-20 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
        {service.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{service.description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
            <Check size={14} className="text-green-400  mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-400  transition-colors group/link"
      >
        Get Started
        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}
