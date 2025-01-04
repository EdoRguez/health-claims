'use client'

import { useState } from 'react'
import { Search } from '../ui/icons'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import type { Influencer, Category, VerificationStatus } from '../../types/influencer'

interface InfluencerProfileProps {
  influencer: Influencer
}

export function InfluencerProfile({ influencer }: InfluencerProfileProps) {
  const [activeTab, setActiveTab] = useState<'claims' | 'products' | 'monetization'>('claims')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('All')

  const categories: Category[] = [
    'All',
    'Sleep',
    'Performance',
    'Hormones',
    'Nutrition',
    'Mental Health'
  ]

  const statuses: VerificationStatus[] = [
    'All',
    'Verified',
    'Questionable',
    'Debunked'
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-8">
          <Avatar className="h-24 w-24">
            <AvatarImage src={influencer.avatar} alt={influencer.name} />
            <AvatarFallback>{influencer.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{influencer.name}</h1>
            <p className="text-muted-foreground mb-4">{influencer.bio}</p>
            <div className="flex flex-wrap gap-2">
              {influencer.expertise?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Trust Score</p>
                <h2 className="text-2xl font-bold text-green-500">{influencer.trustScore}%</h2>
              </div>
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Based on {influencer.verifiedClaims} verified claims</p>
          </Card>
          
          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Yearly Revenue</p>
                <h2 className="text-2xl font-bold text-green-500">{influencer.yearlyRevenue}</h2>
              </div>
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Estimated earnings</p>
          </Card>
          
          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Products</p>
                <h2 className="text-2xl font-bold text-green-500">{influencer.recommendedProducts}</h2>
              </div>
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Recommended products</p>
          </Card>
          
          <Card className="p-4 bg-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Followers</p>
                <h2 className="text-2xl font-bold text-green-500">{influencer.followers}</h2>
              </div>
              <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Total following</p>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-6">
          <div className="flex gap-4">
            {['claims', 'products', 'monetization'].map((tab) => (
              <Button
                key={tab}
                variant="default"
                className={`pb-4 rounded-none ${
                  activeTab === tab
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setActiveTab(tab as typeof activeTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Analysis
              </Button>
            ))}
          </div>
        </div>

        {/* Claims Section */}
        {activeTab === 'claims' && (
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search claims..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {statuses.map((status) => (
                    <Button
                      key={status}
                      variant={verificationStatus === status ? 'default' : 'outline'}
                      onClick={() => setVerificationStatus(status)}
                      size="sm"
                    >
                      {status}
                    </Button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort By</span>
                  <select className="bg-background border rounded-md px-2 py-1 text-sm">
                    <option>Date</option>
                    <option>Trust Score</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Claims List */}
            <div className="space-y-4">
              {influencer.claims?.map((claim) => (
                <Card key={claim.id} className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">
                        verified
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {claim.date}
                      </span>
                    </div>
                    <span className="text-green-500 font-medium">
                      {claim.trustScore}%
                    </span>
                  </div>
                  <h3 className="font-medium mb-2">{claim.title}</h3>
                  {claim.aiAnalysis && (
                    <div className="bg-accent/10 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-accent mb-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 8V4m0 4L8 4m4 0l4-4M6 12h12M6 16h12M6 20h12" />
                        </svg>
                        AI Analysis
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {claim.aiAnalysis}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-4 mt-4">
                    {claim.sourceUrl && (
                      <a
                        href={claim.sourceUrl}
                        className="text-sm text-accent hover:text-accent/90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source ↗
                      </a>
                    )}
                    {claim.researchUrl && (
                      <a
                        href={claim.researchUrl}
                        className="text-sm text-accent hover:text-accent/90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Research ↗
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

