export interface ResearchConfig {
  researchType: 'specific' | 'discover'
  timeRange: string
  influencerName?: string
  productsPerInfluencer: number
  claimsPerInfluencer: number
  includeRevenueAnalysis: boolean
  verifyWithScientificJournals: boolean
  selectedJournals: string[]
  customJournals: string[]
  notes?: string
}

export interface ResearchResponse {
  id: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed'
  createdAt: string
  config: ResearchConfig
}

