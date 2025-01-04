import { InfluencerProfile } from "@/app/components/influencer/influencer-profile";
import { getInfluencer } from "@/app/services/api";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function InfluencerPage({
  params,
}: {
  params: { id: string };
}) {
  const influencer = await getInfluencer(params.id);

  if (!influencer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link
            href="/"
            className="text-accent hover:text-accent/90 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

        <InfluencerProfile influencer={influencer} />
      </div>
    </main>
  );
}
