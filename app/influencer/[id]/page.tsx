import { InfluencerProfile } from '@/app/components/influencer/influencer-profile'
import { getInfluencer } from '@/app/services/api'
import { notFound } from 'next/navigation'

export default async function InfluencerPage({
  params
}: {
  params: { id: string }
}) {
  const influencer = await getInfluencer(params.id)
  
  if (!influencer) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <InfluencerProfile influencer={influencer} />
    </main>
  )
}

