export type Category =
  | 'All'
  | 'Nutrition'
  | 'Fitness'
  | 'Medicine'
  | 'Mental Health'
  | 'Neuroscience'
  | 'Longevity'
  | 'Sleep'
  | 'Performance'
  | 'Hormones'
  | 'Stress Management'
  | 'Exercise Science'
  | 'Light Exposure'
  | 'Circadian Biology';

export type VerificationStatus = 'All' | 'Verified' | 'Questionable' | 'Debunked';

export type Trend = 'up' | 'down' | 'stable';

export interface Claim {
  id: string;
  title: string;
  date: string;
  status: VerificationStatus;
  trustScore: number;
  category: Category;
  aiAnalysis?: string;
  sourceUrl?: string;
  researchUrl?: string;
}

export interface Influencer {
  id: string;
  rank?: number;
  name: string;
  avatar: string;
  category: Category;
  bio?: string;
  expertise?: string[];
  trustScore: number;
  trend: Trend;
  followers: string;
  verifiedClaims: number;
  yearlyRevenue?: string;
  recommendedProducts?: number;
  claims?: Claim[];
}

export interface LeaderboardStats {
  activeInfluencers: number;
  claimsVerified: number;
  averageTrustScore: number;
}