import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c2501] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-9xl font-black text-[#81fa00]  /20">404</h1>
        <h2 className="text-2xl md:text-3xl  font-black text-white mt-4 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#81fa00]/70  hover:bg-[#81fa00]  text-black font-bold rounded-full transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
