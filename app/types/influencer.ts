export type Category =
  | 'All'
  | 'All Categories'
  | 'Neuroscience'
  | 'Sleep'
  | 'Performance'
  | 'Hormones'
  | 'Stress Management'
  | 'Exercise Science'
  | 'Light Exposure'
  | 'Circadian Biology'
  | 'Nutrition'
  | 'Exercise'
  | 'Stress'
  | 'Cognition'
  | 'Motivation'
  | 'Recovery'
  | 'Mental Health';

export type VerificationStatus = 'All Statuses' | 'Verified' | 'Questionable' | 'Debunked';

export type SortOption = 'Date' | 'Trust Score';

export interface Claim {
  id: string;
  title: string;
  date: string;
  status: VerificationStatus;
  trustScore: number;
  category: any;
  aiAnalysis: string;
  sourceUrl: string;
  researchUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  url: string;
  type: string;
  price?: string;
}

export interface Influencer {
  id: string;
  name: string;
  rank: number;
  avatar: string;
  bio: string;
  expertise: any[];
  category: any;
  trustScore: number;
  trend: string;
  verifiedClaims: number;
  yearlyRevenue: string;
  recommendedProducts: Product[];
  followers: string;
  claims: Claim[];
}


export interface LeaderboardStats {
  activeInfluencers: number;
  claimsVerified: number;
  averageTrustScore: number;
}