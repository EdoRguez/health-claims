import Link from "next/link";
import { ResearchConfig } from "../components/research/research-config";
import { ArrowLeft } from "lucide-react";

export default function ResearchPage() {
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

        <h1 className="text-2xl font-bold mb-6">Research Tasks</h1>
        <ResearchConfig />
      </div>
    </main>
  );
}
