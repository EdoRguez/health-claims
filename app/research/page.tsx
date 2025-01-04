import Link from 'next/link'
import { ArrowRight } from '../components/ui/icons'
import { ResearchConfig } from '../components/research/research-config'

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link 
            href="/"
            className="text-accent hover:text-accent/90 flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">Research Tasks</h1>
        <ResearchConfig />
      </div>
    </main>
  )
}

