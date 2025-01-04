import { Category, Influencer, LeaderboardStats } from "@/app/types/influencer";
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
// Dummy data for influencers
const dummyInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Andrew Huberman',
    rank: 1,
    avatar: '/avatars/andrew-huberman.jpg',
    category: 'Neuroscience',
    bio: 'Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Host of the Huberman Lab Podcast, translating neuroscience into practical tools for everyday life. Known for evidence-based approaches to performance, sleep, stress management, and brain optimization.',
    expertise: [
      'Neuroscience',
      'Sleep',
      'Performance',
      'Hormones',
      'Stress Management',
      'Exercise Science',
      'Light Exposure',
      'Circadian Biology'
    ],
    trustScore: 89,
    verifiedClaims: 127,
    trend: 'up',
    yearlyRevenue: '$5.0M',
    recommendedProducts: [
      {
        id: 'p1',
        name: 'AG1 Athletic Greens',
        description: 'Comprehensive nutritional supplement',
        url: 'https://athleticgreens.com',
        type: 'Supplement',
        price: '$99/month'
      }
    ],
    followers: '4.2M+',
    claims: [
      {
        id: 'c1',
        title: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release',
        date: '14/01/2024',
        status: 'Verified',
        trustScore: 92,
        category: 'Light Exposure',
        aiAnalysis: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
        sourceUrl: 'https://example.com/source',
        researchUrl: 'https://example.com/research'
      },
      {
        id: 'c2',
        title: 'Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery',
        date: '09/12/2023',
        status: 'Verified',
        trustScore: 88,
        category: 'Sleep',
        aiAnalysis: 'Research supports the use of NSDR techniques for enhanced learning consolidation and recovery.',
        sourceUrl: 'https://example.com/source2',
        researchUrl: 'https://example.com/research2'
      }
    ]
  },
  {
    id: '2',
    name: 'Andrew Huberman',
    rank: 1,
    avatar: '/avatars/andrew-huberman.jpg',
    category: 'Neuroscience',
    bio: 'Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Host of the Huberman Lab Podcast, translating neuroscience into practical tools for everyday life. Known for evidence-based approaches to performance, sleep, stress management, and brain optimization.',
    expertise: [
      'Neuroscience',
      'Sleep',
      'Performance',
      'Hormones',
      'Stress Management',
      'Exercise Science',
      'Light Exposure',
      'Circadian Biology'
    ],
    trustScore: 89,
    verifiedClaims: 127,
    trend: 'up',
    yearlyRevenue: '$5.0M',
    recommendedProducts: [
      {
        id: 'p1',
        name: 'AG1 Athletic Greens',
        description: 'Comprehensive nutritional supplement',
        url: 'https://athleticgreens.com',
        type: 'Supplement',
        price: '$99/month'
      }
    ],
    followers: '4.2M+',
    claims: [
      {
        id: 'c1',
        title: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release',
        date: '14/01/2024',
        status: 'Verified',
        trustScore: 92,
        category: 'Light Exposure',
        aiAnalysis: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
        sourceUrl: 'https://example.com/source',
        researchUrl: 'https://example.com/research'
      },
      {
        id: 'c2',
        title: 'Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery',
        date: '09/12/2023',
        status: 'Verified',
        trustScore: 88,
        category: 'Sleep',
        aiAnalysis: 'Research supports the use of NSDR techniques for enhanced learning consolidation and recovery.',
        sourceUrl: 'https://example.com/source2',
        researchUrl: 'https://example.com/research2'
      }
    ]
  },
    {
    id: '3',
    name: 'Andrew Huberman',
    rank: 1,
    avatar: '/avatars/andrew-huberman.jpg',
    category: 'Neuroscience',
    bio: 'Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Host of the Huberman Lab Podcast, translating neuroscience into practical tools for everyday life. Known for evidence-based approaches to performance, sleep, stress management, and brain optimization.',
    expertise: [
      'Neuroscience',
      'Sleep',
      'Performance',
      'Hormones',
      'Stress Management',
      'Exercise Science',
      'Light Exposure',
      'Circadian Biology'
    ],
    trustScore: 89,
    verifiedClaims: 127,
    trend: 'up',
    yearlyRevenue: '$5.0M',
    recommendedProducts: [
      {
        id: 'p1',
        name: 'AG1 Athletic Greens',
        description: 'Comprehensive nutritional supplement',
        url: 'https://athleticgreens.com',
        type: 'Supplement',
        price: '$99/month'
      }
    ],
    followers: '4.2M+',
    claims: [
      {
        id: 'c1',
        title: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release',
        date: '14/01/2024',
        status: 'Verified',
        trustScore: 92,
        category: 'Light Exposure',
        aiAnalysis: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
        sourceUrl: 'https://example.com/source',
        researchUrl: 'https://example.com/research'
      },
      {
        id: 'c2',
        title: 'Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery',
        date: '09/12/2023',
        status: 'Verified',
        trustScore: 88,
        category: 'Sleep',
        aiAnalysis: 'Research supports the use of NSDR techniques for enhanced learning consolidation and recovery.',
        sourceUrl: 'https://example.com/source2',
        researchUrl: 'https://example.com/research2'
      }
    ]
  },
    {
    id: '4',
    name: 'Andrew Huberman',
    rank: 1,
    avatar: '/avatars/andrew-huberman.jpg',
    category: 'Neuroscience',
    bio: 'Stanford Professor of Neurobiology and Ophthalmology, focusing on neural development, brain plasticity, and neural regeneration. Host of the Huberman Lab Podcast, translating neuroscience into practical tools for everyday life. Known for evidence-based approaches to performance, sleep, stress management, and brain optimization.',
    expertise: [
      'Neuroscience',
      'Sleep',
      'Performance',
      'Hormones',
      'Stress Management',
      'Exercise Science',
      'Light Exposure',
      'Circadian Biology'
    ],
    trustScore: 89,
    verifiedClaims: 127,
    trend: 'up',
    yearlyRevenue: '$5.0M',
    recommendedProducts: [
      {
        id: 'p1',
        name: 'AG1 Athletic Greens',
        description: 'Comprehensive nutritional supplement',
        url: 'https://athleticgreens.com',
        type: 'Supplement',
        price: '$99/month'
      }
    ],
    followers: '4.2M+',
    claims: [
      {
        id: 'c1',
        title: 'Viewing sunlight within 30-60 minutes of waking enhances cortisol release',
        date: '14/01/2024',
        status: 'Verified',
        trustScore: 92,
        category: 'Light Exposure',
        aiAnalysis: 'Multiple studies confirm morning light exposure affects cortisol rhythms. Timing window supported by research.',
        sourceUrl: 'https://example.com/source',
        researchUrl: 'https://example.com/research'
      },
      {
        id: 'c2',
        title: 'Non-sleep deep rest (NSDR) protocols can accelerate learning and recovery',
        date: '09/12/2023',
        status: 'Verified',
        trustScore: 88,
        category: 'Sleep',
        aiAnalysis: 'Research supports the use of NSDR techniques for enhanced learning consolidation and recovery.',
        sourceUrl: 'https://example.com/source2',
        researchUrl: 'https://example.com/research2'
      }
    ]
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