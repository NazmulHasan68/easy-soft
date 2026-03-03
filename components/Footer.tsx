import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
  Services: [
    { label: 'IT Consulting', href: '/services' },
    { label: 'Software Development', href: '/services' },
    { label: 'Cloud & DevOps', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'AI & ML Solutions', href: '/services' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0c2501] text-gray-400 border-t border-[#81fA00]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <span className="text-xl font-bold text-white">
                easysoft<span className="text-[#81fa00]   text-3xl font-bold">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-xs">
              We build scalable, secure, and innovative tech solutions designed to accelerate your business growth and
              simplify complex challenges.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2.5 text-gray-500 hover:text-[#81fa00]  transition-colors">
                <Mail size={14} className="text-[#81fa00]  " />
                hello@easysoft.dev
              </div>
              <div className="flex items-center gap-2.5 text-gray-500 hover:text-[#81fa00]  transition-colors">
                <Phone size={14} className="text-[#81fa00]  " />
                +1 (555) 000-0000
              </div>
              <div className="flex items-center gap-2.5 text-gray-500">
                <MapPin size={14} className="text-[#81fa00]  " />
                San Francisco, CA, USA
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#81fa00]  transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#81fA00]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2024 EasySoft | All rights reserved by easysoft.</p>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Facebook, href: '#', label: 'Facebook' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-[#81fA00]/20 flex items-center justify-center text-gray-500 hover:text-[#81fa00]  hover:border-[#81fA00]/50 hover:bg-[#81fa00]/70 /10 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
