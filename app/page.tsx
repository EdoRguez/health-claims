import { Leaderboard } from "./components/leaderboard/leaderboard"
import { getInfluencers, getLeaderboardStats } from "./services/api"

export default async function HomePage() {
  const [stats, influencers] = await Promise.all([
    getLeaderboardStats(),
    getInfluencers()
  ])

  return (
    <main className="min-h-screen bg-background">
      <Leaderboard
        initialStats={stats}
        initialInfluencers={influencers}
      />
    </main>
  )
}

