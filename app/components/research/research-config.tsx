'use client'

import { useCallback, useState } from 'react'
import { Check, Plus, Search, X } from 'lucide-react'
import { Switch } from '../ui/switch'
import { useToast } from '../ui/use-toast'
import type { ResearchConfig } from '@/app/types/research'
import { submitResearchConfig } from '@/app/services/api'


export function ResearchConfig() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<ResearchConfig>({
    researchType: 'specific',
    timeRange: 'last-month',
    productsPerInfluencer: 10,
    claimsPerInfluencer: 50,
    includeRevenueAnalysis: false,
    verifyWithScientificJournals: false,
    selectedJournals: [],
    customJournals: [],
  })

  const [defaultJournals] = useState([
    'PubMed Central',
    'Nature',
    'Science',
    'Cell',
    'The Lancet',
    'New England Journal of Medicine',
    'JAMA Network'
  ])

  const [showAddJournal, setShowAddJournal] = useState(false)
  const [newJournalName, setNewJournalName] = useState('')
  const [journalError, setJournalError] = useState('')

  const allJournals = [...defaultJournals, ...formState.customJournals]

  const updateFormState = useCallback((updates: Partial<ResearchConfig>) => {
    setFormState((prev:any) => ({ ...prev, ...updates }))
  }, [])

  const toggleJournal = useCallback((journal: string) => {
    updateFormState({
      selectedJournals: formState.selectedJournals.includes(journal)
        ? formState.selectedJournals.filter(j => j !== journal)
        : [...formState.selectedJournals, journal]
    })
  }, [formState.selectedJournals, updateFormState])

  const validateNewJournal = (name: string) => {
    if (allJournals.some(journal => journal.toLowerCase() === name.toLowerCase())) {
      setJournalError('This journal has already been added')
      return false
    }
    setJournalError('')
    return true
  }

  const addNewJournal = () => {
    const journalName = newJournalName.trim()
    if (journalName && validateNewJournal(journalName)) {
      updateFormState({
        customJournals: [...formState.customJournals, journalName]
      })
      setNewJournalName('')
      setShowAddJournal(false)
      setJournalError('')
    }
  }

  const handleSubmit = async () => {
    try {
      console.log(formState)
      setIsSubmitting(true)
      const response = await submitResearchConfig(formState)
      toast({
        title: "Research configuration submitted",
        description: `Research ID: ${1}`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit research configuration",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-lg border border-[#1F2937] bg-[#111827]/50 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-6">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2D9B51]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <h2 className="text-lg font-semibold text-white">Research Configuration</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => updateFormState({ researchType: 'specific' })}
          className={`text-left p-4 rounded-lg transition-colors ${
            formState.researchType === 'specific'
              ? 'bg-[#1A3B2F] border-2 border-[#2D9B51]'
              : 'bg-[#111827] border border-[#1F2937] hover:bg-[#1A3B2F]/50'
          }`}
        >
          <h3 className="text-sm font-medium mb-1">Specific Influencer</h3>
          <p className="text-xs text-gray-400">Research a known health influencer by name</p>
        </button>

        <button
          onClick={() => updateFormState({ researchType: 'discover' })}
          className={`text-left p-4 rounded-lg transition-colors ${
            formState.researchType === 'discover'
              ? 'bg-[#1A3B2F] border-2 border-[#2D9B51]'
              : 'bg-[#111827] border border-[#1F2937] hover:bg-[#1A3B2F]/50'
          }`}
        >
          <h3 className="text-sm font-medium mb-1">Discover New</h3>
          <p className="text-xs text-gray-400">Find and analyze new health influencers</p>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-6">
        <div>
          <h3 className="text-sm font-medium mb-4">Time Range</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Last Week', 'Last Month', 'Last Year', 'All Time'].map((range) => (
              <button
                key={range}
                onClick={() => updateFormState({ timeRange: range.toLowerCase().replace(' ', '-') })}
                className={`px-4 py-2 text-sm rounded-md border ${
                  formState.timeRange === range.toLowerCase().replace(' ', '-')
                    ? 'bg-[#2D9B51] border-transparent text-white'
                    : 'border-[#1F2937] bg-[#111827] text-gray-400 hover:bg-[#1F2937]'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Products to Find Per Influencer</h3>
          <input
            type="number"
            value={formState.productsPerInfluencer}
            onChange={(e) => updateFormState({ productsPerInfluencer: parseInt(e.target.value) || 0 })}
            className="w-full bg-[#111827] text-white rounded-md px-4 py-2 text-sm border border-[#1F2937] focus:outline-none focus:border-[#2D9B51]"
          />
          <p className="text-xs text-gray-400 mt-1">Set to 0 to skip product research</p>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Influencer Name</h3>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter influencer name"
              value={formState.influencerName || ''}
              onChange={(e) => updateFormState({ influencerName: e.target.value })}
              className="w-full bg-[#111827] text-white rounded-md pl-10 pr-4 py-2 text-sm border border-[#1F2937] focus:outline-none focus:border-[#2D9B51]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Include Revenue Analysis</h3>
              <p className="text-xs text-gray-400">Analyze monetization methods and estimate earnings</p>
            </div>
            <Switch
              checked={formState.includeRevenueAnalysis}
              onCheckedChange={(checked) => updateFormState({ includeRevenueAnalysis: checked })}
              className="bg-[#111827]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Verify with Scientific Journals</h3>
              <p className="text-xs text-gray-400">Cross-reference claims with scientific literature</p>
            </div>
            <Switch
              checked={formState.verifyWithScientificJournals}
              onCheckedChange={(checked) => updateFormState({ verifyWithScientificJournals: checked })}
              className="bg-[#111827]"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Claims to Analyze Per Influencer</h3>
          <input
            type="number"
            value={formState.claimsPerInfluencer}
            onChange={(e) => updateFormState({ claimsPerInfluencer: parseInt(e.target.value) || 0 })}
            className="w-full bg-[#111827] text-white rounded-md px-4 py-2 text-sm border border-[#1F2937] focus:outline-none focus:border-[#2D9B51]"
          />
          <p className="text-xs text-gray-400 mt-1">Recommended: 50-100 claims for comprehensive analysis</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Scientific Journals</h3>
          <div className="flex gap-2">
            <button 
              className="text-xs text-[#2D9B51] hover:text-[#2D9B51]/90"
              onClick={() => updateFormState({ selectedJournals: allJournals })}
            >
              Select All
            </button>
            <span className="text-gray-400">|</span>
            <button 
              className="text-xs text-[#2D9B51] hover:text-[#2D9B51]/90"
              onClick={() => updateFormState({ selectedJournals: [] })}
            >
              Deselect All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {allJournals.map((journal) => (
            <button
              key={journal}
              onClick={() => toggleJournal(journal)}
              className={`flex items-center justify-between p-3 text-sm rounded-md transition-colors ${
                formState.selectedJournals.includes(journal)
                  ? 'bg-[#1A3B2F] border-2 border-[#2D9B51]'
                  : 'bg-[#111827] border border-[#1F2937] hover:bg-[#1A3B2F]/50'
              }`}
            >
              <span>{journal}</span>
              <div className={`w-4 h-4 rounded-full border ${
                formState.selectedJournals.includes(journal)
                  ? 'bg-[#2D9B51] border-[#2D9B51]'
                  : 'border-[#1F2937]'
              }`} />
            </button>
          ))}
          {showAddJournal ? (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 p-3 rounded-md border border-[#1F2937] bg-[#111827]">
                <input
                  type="text"
                  value={newJournalName}
                  onChange={(e) => {
                    setNewJournalName(e.target.value)
                    validateNewJournal(e.target.value)
                  }}
                  placeholder="Enter journal name..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={addNewJournal}
                  className="p-1 hover:text-[#2D9B51]"
                  disabled={!newJournalName.trim() || !!journalError}
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setShowAddJournal(false)
                    setNewJournalName('')
                    setJournalError('')
                  }}
                  className="p-1 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {journalError && (
                <span className="text-xs text-red-500 mt-1 ml-1">{journalError}</span>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAddJournal(true)}
              className="flex items-center justify-center gap-2 p-3 text-sm text-[#2D9B51] rounded-md border border-[#1F2937] bg-[#111827] hover:bg-[#1A3B2F]/50"
            >
              <Plus className="w-4 h-4" />
              Add New Journal
            </button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Notes for Research Assistant</h3>
        <textarea
          placeholder="Add any specific instructions or focus areas..."
          value={formState.notes || ''}
          onChange={(e) => updateFormState({ notes: e.target.value })}
          className="w-full h-32 bg-[#111827] text-white rounded-md px-4 py-2 text-sm border border-[#1F2937] focus:outline-none focus:border-[#2D9B51]"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#2D9B51] hover:bg-[#2D9B51]/90 text-white rounded-md py-2 px-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16m8-8H4" />
            </svg>
            Start Research
          </>
        )}
      </button>
    </div>
  )
}