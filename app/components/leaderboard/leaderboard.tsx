'use client'

import { useState } from 'react'
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Category, Influencer, LeaderboardStats } from '@/app/types/influencer'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface LeaderboardProps {
  initialStats: LeaderboardStats
  initialInfluencers: Influencer[]
}

export function Leaderboard({ initialStats, initialInfluencers }: LeaderboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [stats, setStats] = useState(initialStats)
  const [influencers, setInfluencers] = useState(initialInfluencers)

  const categories: Category[] = [
    'All',
    'Nutrition',
    'Fitness',
    'Medicine',
    'Mental Health'
  ]

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="text-green-500" />
      case 'down':
        return <ArrowDownRight className="text-red-500" />
      default:
        return <ArrowRight className="text-gray-500" />
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Influencer Trust Leaderboard</h1>
        <Link href="/research">
          <Button>
            Start Research
          </Button>
        </Link>
      </div>
      <p className="text-muted-foreground mb-6">
        Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-card">
          <div className="text-2xl font-bold">{stats.activeInfluencers.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Active Influencers</div>
        </div>
        <div className="p-4 rounded-lg bg-card">
          <div className="text-2xl font-bold">{stats.claimsVerified.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Claims Verified</div>
        </div>
        <div className="p-4 rounded-lg bg-card">
          <div className="text-2xl font-bold">{stats.averageTrustScore}%</div>
          <div className="text-sm text-muted-foreground">Average Trust Score</div>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="rounded-lg border bg-card">
        <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
          <div className="col-span-1">RANK</div>
          <div className="col-span-3">INFLUENCER</div>
          <div className="col-span-2">CATEGORY</div>
          <div className="col-span-2">TRUST SCORE</div>
          <div className="col-span-1">TREND</div>
          <div className="col-span-2">FOLLOWERS</div>
          <div className="col-span-1">CLAIMS</div>
        </div>

        {influencers.map((influencer) => (
          <Link 
            key={influencer.id} 
            href={`/influencer/${influencer.id}`}
            className="block hover:bg-accent/10 transition-colors"
          >
            <div className="grid grid-cols-12 gap-4 p-4 items-center">
              <div className="col-span-1 font-medium">#{influencer.rank}</div>
              <div className="col-span-3 flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={influencer.avatar} alt={influencer.name} />
                  <AvatarFallback>{influencer.name[0]}</AvatarFallback>
                </Avatar>
                <span>{influencer.name}</span>
              </div>
              <div className="col-span-2">{influencer.category}</div>
              <div className="col-span-2">
                <span className={`font-medium ${
                  influencer.trustScore >= 90 ? 'text-green-500' :
                  influencer.trustScore >= 80 ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {influencer.trustScore}%
                </span>
              </div>
              <div className="col-span-1">{getTrendIcon(influencer.trend)}</div>
              <div className="col-span-2">{influencer.followers}</div>
              <div className="col-span-1">{influencer.verifiedClaims}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

