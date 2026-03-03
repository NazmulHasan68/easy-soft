'use client'

import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import {
  TrendingUp,
  TrendingDown,
  FolderOpen,
  Users,
  DollarSign,
  Clock,
  Bell,
  Search,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Loader,
} from 'lucide-react'

const statCards = [
  { label: 'Total Revenue', value: '$248,500', change: '+12.5%', up: true, icon: DollarSign, color: 'text-green-400 ' },
  { label: 'Active Projects', value: '14', change: '+3', up: true, icon: FolderOpen, color: 'text-blue-400' },
  { label: 'Total Clients', value: '89', change: '+7', up: true, icon: Users, color: 'text-purple-400' },
  { label: 'Avg. Delivery Time', value: '5.2 wks', change: '-0.8 wks', up: false, icon: Clock, color: 'text-orange-400' },
]

const recentProjects = [
  { name: 'Fint Finance Dashboard', client: 'Fint Inc.', status: 'Completed', budget: '$45,000', deadline: 'Feb 2024' },
  { name: 'ShopEase E-Commerce', client: 'ShopEase Ltd.', status: 'In Progress', budget: '$72,000', deadline: 'Apr 2024' },
  { name: 'MediTrack Healthcare', client: 'MediCorp', status: 'In Progress', budget: '$58,000', deadline: 'May 2024' },
  { name: 'EduLearn LMS', client: 'EduLearn Co.', status: 'Review', budget: '$38,000', deadline: 'Mar 2024' },
  { name: 'LogiFlow Analytics', client: 'LogiFlow Sys.', status: 'Completed', budget: '$95,000', deadline: 'Jan 2024' },
]

const statusConfig = {
  Completed: { icon: CheckCircle, class: 'text-green-400 bg-green-500/10 border-[#81fA00]/20' },
  'In Progress': { icon: Loader, class: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  Review: { icon: AlertCircle, class: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
}

const recentActivity = [
  { action: 'Project "ShopEase" milestone completed', time: '2h ago', type: 'success' },
  { action: 'New message from Fint Inc.', time: '4h ago', type: 'info' },
  { action: 'Invoice #1042 paid — $22,500', time: '6h ago', type: 'success' },
  { action: 'MediTrack review meeting scheduled', time: '1d ago', type: 'info' },
  { action: 'New client enquiry from PropVault', time: '2d ago', type: 'info' },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0c2501] pt-0">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="h-16 border-b border-[#81fA00]/10 flex items-center justify-between px-6 flex-shrink-0 bg-[#0c2501]">
          <div className="flex items-center gap-3 flex-1 max-w-sm">
            <Search size={15} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search projects, clients..."
              className="bg-transparent text-sm text-gray-400 placeholder-gray-600 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-8 h-8 rounded-full bg-[#0F2318] border border-[#81fA00]/15 flex items-center justify-center text-gray-400 hover:text-green-400 transition-colors">
              <Bell size={15} />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-green-500" />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-[#81fA00]/30 flex items-center justify-center text-black text-xs font-bold">
              A
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-2xl font-black text-white">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm">Welcome back, Admin. Here's what's happening.</p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {statCards.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#0F2318] rounded-2xl p-5 border border-[#81fA00]/10 hover:border-[#81fA00]/25 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-9 h-9 rounded-xl bg-[#f2f2f2]/5 border border-white/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={17} />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-semibold ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Projects table + activity */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Projects */}
            <div className="xl:col-span-2 bg-[#0F2318] rounded-2xl border border-[#81fA00]/10">
              <div className="flex items-center justify-between p-5 border-b border-[#81fA00]/10">
                <h2 className="font-bold text-white text-sm">Recent Projects</h2>
                <button className="text-gray-500 hover:text-gray-300 transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="px-5 py-3 text-xs text-gray-600 font-semibold uppercase tracking-wider">Project</th>
                      <th className="px-5 py-3 text-xs text-gray-600 font-semibold uppercase tracking-wider">Status</th>
                      <th className="px-5 py-3 text-xs text-gray-600 font-semibold uppercase tracking-wider">Budget</th>
                      <th className="px-5 py-3 text-xs text-gray-600 font-semibold uppercase tracking-wider">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map((project, i) => {
                      const s = statusConfig[project.status as keyof typeof statusConfig]
                      return (
                        <tr key={i} className="border-t border-[#81fA00]/5 hover:bg-[#f2f2f2]/2 transition-colors">
                          <td className="px-5 py-3.5">
                            <p className="text-sm font-medium text-white">{project.name}</p>
                            <p className="text-xs text-gray-500">{project.client}</p>
                          </td>
                          <td className="px-5 py-3.5">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${s.class}`}>
                              <s.icon size={10} /> {project.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-sm text-gray-300">{project.budget}</td>
                          <td className="px-5 py-3.5 text-sm text-gray-400">{project.deadline}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-[#0F2318] rounded-2xl border border-[#81fA00]/10">
              <div className="p-5 border-b border-[#81fA00]/10">
                <h2 className="font-bold text-white text-sm">Recent Activity</h2>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        item.type === 'success' ? 'bg-green-500' : 'bg-blue-400'
                      }`}
                    />
                    <div>
                      <p className="text-sm text-gray-300 leading-snug">{item.action}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
