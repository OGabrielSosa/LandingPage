'use client'

import { useState } from 'react'

interface ConfigItem {
  name: string
  status: 'success' | 'pending' | 'error' | 'info'
  description: string
}

export default function SimpleConfigMonitor() {
  const configItems: ConfigItem[] = [
    {
      name: 'Vercel Project Linked',
      status: 'success',
      description: 'Project ID: landing-kbah34ym7'
    },
    {
      name: 'Organization Setup', 
      status: 'success',
      description: 'Org ID: folkodegroups-projects'
    },
    {
      name: 'Simple CI Configuration',
      status: 'pending',
      description: 'Replace complex CI with simple version'
    },
    {
      name: 'Vercel Auto-Deploy',
      status: 'success', 
      description: 'All branches will auto-deploy'
    }
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      success: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
      error: 'bg-red-100 text-red-800 border-red-200',
      info: 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getStatusIcon = (status: string) => {
    const icons = {
      success: '✅',
      pending: '⏳',
      error: '❌',
      info: 'ℹ️'
    }
    return icons[status as keyof typeof icons] || '❓'
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Configuration Status</h1>
        <p className="text-gray-600">
          Current setup for your landing project
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {configItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getStatusIcon(item.status)}</span>
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          ⚙️ Next Steps
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">1.</span>
            <span>Update vercel.json with new configuration</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">2.</span>
            <span>Replace complex CI with simple version</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">3.</span>
            <span>Test deployment with a small change</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">4.</span>
            <span>Monitor GitHub Actions and Vercel logs</span>
          </div>
        </div>
      </div>
    </div>
  )
}