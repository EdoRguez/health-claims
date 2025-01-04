'use client'

import { useState } from 'react'
import { Search } from '@/app/components/ui/icons'
import type { Influencer, Category, VerificationStatus, SortOption, Claim } from '@/app/types/influencer'

interface InfluencerProfileProps {
  influencer: Influencer
}

export function InfluencerProfile({ influencer }: InfluencerProfileProps) {
  const [activeTab, setActiveTab] = useState<'claims' | 'products' | 'monetization'>('claims')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>('All Categories')
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('All Statuses')
  const [sortBy, setSortBy] = useState<SortOption>('Date')

  const filteredClaims = influencer.claims.filter(claim => {
    if (searchQuery && !claim.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (selectedCategory !== 'All Categories' && claim.category !== selectedCategory) {
      return false
    }
    if (verificationStatus !== 'All Statuses' && claim.status !== verificationStatus) {
      return false
    }
    return true
  }).sort((a, b) => {
    if (sortBy === 'Date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return b.trustScore - a.trustScore
  })

  return (
    <div className="min-h-screen text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <img
            src={influencer.avatar}
            alt={influencer.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{influencer.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {influencer.expertise.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#111827] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400">{influencer.bio}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">Trust Score</p>
                <h2 className="text-2xl font-bold text-[#2D9B51]">{influencer.trustScore}%</h2>
              </div>
              <svg className="w-4 h-4 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-2">Based on {influencer.verifiedClaims} verified claims</p>
          </div>

          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">Yearly Revenue</p>
                <h2 className="text-2xl font-bold text-[#2D9B51]">{influencer.yearlyRevenue}</h2>
              </div>
              <svg className="w-4 h-4 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-2">Estimated earnings</p>
          </div>

          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">Products</p>
                <h2 className="text-2xl font-bold text-[#2D9B51]">{influencer.recommendedProducts.length}</h2>
              </div>
              <svg className="w-4 h-4 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-2">Recommended products</p>
          </div>

          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">Followers</p>
                <h2 className="text-2xl font-bold text-[#2D9B51]">{influencer.followers}</h2>
              </div>
              <svg className="w-4 h-4 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 mt-2">Total following</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#1F2937] mb-6">
          <div className="flex gap-4">
            {['claims', 'products', 'monetization'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`pb-4 text-sm ${
                  activeTab === tab
                    ? 'border-b-2 border-[#2D9B51] text-[#2D9B51]'
                    : 'text-gray-400'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Analysis
              </button>
            ))}
          </div>
        </div>

        {/* Claims Section */}
        {activeTab === 'claims' && (
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search claims..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111827] text-white rounded-md pl-10 pr-4 py-2 text-sm border border-[#1F2937] focus:outline-none focus:border-[#2D9B51]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {influencer.expertise.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#2D9B51] text-white'
                      : 'bg-[#111827] text-gray-400 hover:bg-[#1F2937]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {['All Statuses', 'Verified', 'Questionable', 'Debunked'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setVerificationStatus(status as VerificationStatus)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      verificationStatus === status
                        ? 'bg-[#2D9B51] text-white'
                        : 'bg-[#111827] text-gray-400 hover:bg-[#1F2937]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#111827] text-white border border-[#1F2937] rounded-md px-2 py-1 text-sm focus:outline-none focus:border-[#2D9B51]"
                >
                  <option value="Date">Date</option>
                  <option value="Trust Score">Trust Score</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredClaims.map((claim) => (
                <div key={claim.id} className="bg-[#111827] rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        claim.status === 'Verified'
                          ? 'bg-[#2D9B51]/10 text-[#2D9B51]'
                          : claim.status === 'Questionable'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {claim.status.toLowerCase()}
                      </span>
                      <span className="text-sm text-gray-400">{claim.date}</span>
                    </div>
                    <span className={`text-${
                      claim.trustScore >= 90 ? '[#2D9B51]' :
                      claim.trustScore >= 80 ? 'yellow-500' :
                      'red-500'
                    } font-medium`}>
                      {claim.trustScore}%
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">{claim.title}</h3>
                  <div className="bg-[#1A3B2F]/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-[#2D9B51] mb-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 8V4m0 4L8 4m4 0l4-4M6 12h12M6 16h12M6 20h12" />
                      </svg>
                      AI Analysis
                    </div>
                    <p className="text-sm text-gray-400">{claim.aiAnalysis}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={claim.sourceUrl}
                      className="text-sm text-[#2D9B51] hover:text-[#2D9B51]/90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source ↗
                    </a>
                    <a
                      href={claim.researchUrl}
                      className="text-sm text-[#2D9B51] hover:text-[#2D9B51]/90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Research ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}