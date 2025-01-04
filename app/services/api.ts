import { Category, Influencer, LeaderboardStats } from "../types/influencer";
import { ResearchConfig } from "../types/research";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function getLeaderboardStats(): Promise<LeaderboardStats> {
//   const response = await fetch(`${API_BASE_URL}/stats`);
//   if (!response.ok) throw new Error('Failed to fetch leaderboard stats');
//   return response.json();
// }

// export async function getInfluencers(category?: Category): Promise<Influencer[]> {
//   const url = new URL(`${API_BASE_URL}/influencers`);
//   if (category && category !== 'All') url.searchParams.set('category', category);

//   const response = await fetch(url);
//   if (!response.ok) throw new Error('Failed to fetch influencers');
//   return response.json();
// }

// export async function getInfluencer(id: string): Promise<Influencer> {
//   const response = await fetch(`${API_BASE_URL}/influencers/${id}`);
//   if (!response.ok) throw new Error('Failed to fetch influencer');
//   return response.json();
// }

// export async function submitResearchConfig(config: ResearchConfig): Promise<ResearchResponse> {
//   const response = await fetch(`${API_BASE_URL}/research`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(config),
//   })

//   if (!response.ok) {
//     throw new Error('Failed to submit research configuration')
//   }

//   return response.json()
// }

// Dummy data for leaderboard stats
const dummyStats: LeaderboardStats = {
  activeInfluencers: 1234,
  claimsVerified: 25431,
  averageTrustScore: 85.7,
};

// Dummy data for influencers
const dummyInfluencers: Influencer[] = [
  {
    id: '1',
    rank: 1,
    name: 'Dr. Peter Attia',
    avatar: '/avatars/peter-attia.jpg',
    category: 'Medicine',
    trustScore: 94,
    trend: 'up',
    followers: '1.2M+',
    verifiedClaims: 203,
  },
  {
    id: '2',
    rank: 2,
    name: 'Dr. Rhonda Patrick',
    avatar: '/avatars/rhonda-patrick.jpg',
    category: 'Nutrition',
    trustScore: 91,
    trend: 'up',
    followers: '980K+',
    verifiedClaims: 156,
  },
  {
    id: '3',
    rank: 3,
    name: 'Dr. Chris Palmer',
    avatar: '/avatars/chris-palmer.jpg',
    category: 'Mental Health',
    trustScore: 90,
    trend: 'up',
    followers: '180K+',
    verifiedClaims: 76,
  },
  {
    id: '4',
    rank: 4,
    name: 'Andrew Huberman',
    avatar: '/avatars/andrew-huberman.jpg',
    category: 'Neuroscience',
    trustScore: 89,
    trend: 'up',
    followers: '4.2M+',
    verifiedClaims: 127,
  },
  {
    id: '5',
    rank: 5,
    name: 'Dr. Dominic D\'Agostino',
    avatar: '/avatars/dominic-dagostino.jpg',
    category: 'Nutrition',
    trustScore: 89,
    trend: 'down',
    followers: '250K+',
    verifiedClaims: 112,
  },
];

export async function getLeaderboardStats(): Promise<LeaderboardStats> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return dummyStats;
}

export async function getInfluencers(category?: Category): Promise<Influencer[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (category && category !== 'All') {
    return dummyInfluencers.filter(influencer => influencer.category === category);
  }
  return dummyInfluencers;
}

export async function getInfluencer(id: string): Promise<Influencer | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return dummyInfluencers.find(influencer => influencer.id === id);
}

export async function submitResearchConfig(config: ResearchConfig) {
  throw new Error('Not implemented');
}