'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import type { Category, Influencer, LeaderboardStats } from '@/app/types/influencer'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface LeaderboardProps {
  initialStats: LeaderboardStats
  initialInfluencers: Influencer[]
}

export function Leaderboard({ initialStats, initialInfluencers }: LeaderboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [stats] = useState(initialStats)
  const [influencers] = useState(initialInfluencers)

  const categories: Category[] = [
    'All',
    'Nutrition',
    'Fitness',
    'Medicine',
    'Mental Health'
  ]

  const getTrustScoreColor = (score: number) => {
    if (score >= 90) return 'text-[#2D9B51]'
    if (score >= 80) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="min-h-screen bg-[#0F1117] text-white p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Influencer Trust Leaderboard</h1>
            <p className="text-gray-400 text-sm md:text-base">
              Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.
            </p>
          </div>
          <Link href="/research">
            <Button className="bg-[#2D9B51] hover:bg-[#2D9B51]/90">
              Start Research
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div>
                <div className="text-2xl font-bold">{stats.activeInfluencers.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Active Influencers</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <div className="text-2xl font-bold">{stats.claimsVerified.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Claims Verified</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111827] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#2D9B51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8v8M12 4v16M8 12v4" />
              </svg>
              <div>
                <div className="text-2xl font-bold">{stats.averageTrustScore}%</div>
                <div className="text-sm text-gray-400">Average Trust Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#2D9B51] text-white'
                    : 'bg-[#111827] text-gray-400 hover:bg-[#1F2937]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 11l5-5 5 5M7 17l5-5 5 5" />
            </svg>
            Highest First
          </button>
        </div>

        <div className="bg-[#111827] rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 text-sm text-gray-400 border-b border-[#1F2937]">
            <div className="col-span-1">RANK</div>
            <div className="col-span-3">INFLUENCER</div>
            <div className="col-span-2">CATEGORY</div>
            <div className="col-span-2">TRUST SCORE</div>
            <div className="col-span-1">TREND</div>
            <div className="col-span-2">FOLLOWERS</div>
            <div className="col-span-1">VERIFIED CLAIMS</div>
          </div>

          <div className="divide-y divide-[#1F2937]">
            {influencers.map((influencer) => (
              <Link 
                key={influencer.id}
                href={`/influencer/${influencer.id}`}
                className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-[#1F2937]/50 transition-colors"
              >
                <div className="col-span-1 font-medium">#{influencer.rank}</div>
                <div className="col-span-3 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={influencer.avatar} alt={influencer.name} />
                    <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{influencer.name}</span>
                </div>
                <div className="col-span-2 text-gray-400">{influencer.category}</div>
                <div className="col-span-2">
                  <span className={getTrustScoreColor(influencer.trustScore)}>
                    {influencer.trustScore}%
                  </span>
                </div>
                <div className="col-span-1">
                  {influencer.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 text-[#2D9B51]" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <div className="col-span-2 text-gray-400">{influencer.followers}</div>
                <div className="col-span-1 text-gray-400">{influencer.verifiedClaims}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

