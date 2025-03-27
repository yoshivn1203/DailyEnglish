'use client'

import { format } from 'date-fns'
import { ArrowLeft, Volume2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MouseEvent, use, useState } from 'react'

import { Button } from '@/components/ui/button'
import { wordsByDay } from '@/data/words'

export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const unwrappedParams = use(params)
  const dayIndex = parseInt(unwrappedParams.id)
  const [expandedWordId, setExpandedWordId] = useState<number | null>(null)

  // Handle invalid index
  if (isNaN(dayIndex) || dayIndex < 0 || dayIndex >= wordsByDay.length) {
    return (
      <div className='container mx-auto p-4 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Day not found</h1>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    )
  }

  const day = wordsByDay[dayIndex]

  // Function to speak the word using the Web Speech API
  const speakWord = (word: string, event: MouseEvent) => {
    event.stopPropagation() // Prevent card from toggling when button is clicked

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      window.speechSynthesis.speak(utterance)
    } else {
      alert('Sorry, your browser does not support text-to-speech!')
    }
  }

  // Toggle expanded state for a word
  const toggleWord = (wordId: number, event: MouseEvent) => {
    event.stopPropagation()

    if (expandedWordId === wordId) {
      setExpandedWordId(null)
    } else {
      setExpandedWordId(wordId)
    }
  }

  return (
    <div className='container mx-auto p-4 sm:p-6 max-w-4xl'>
      <Button variant='outline' onClick={() => router.push('/')}>
        <ArrowLeft className='h-4 w-4 mr-2' />
        Back
      </Button>
      <h1 className='mt-3 text-xl sm:text-xl font-bold'>
        Words for {format(day.date, 'dd/MM/yyyy')}
      </h1>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {day.words.map(word => (
          <div
            key={word.id}
            className={`border rounded-lg p-4 shadow-md transition-all duration-300 ${
              expandedWordId === word.id
                ? 'bg-blue-50 dark:bg-gray-900'
                : 'hover:bg-gray-50 dark:hover:bg-gray-900'
            }`}
            onClick={e => toggleWord(word.id, e)}
          >
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-medium'>{word.english}</h3>
              <Button
                size='sm'
                onClick={e => speakWord(word.english, e)}
                className='ml-2 h-8 w-8 p-0'
              >
                <Volume2 className='h-4 w-4' />
              </Button>
            </div>

            {expandedWordId === word.id && (
              <div className='mt-3 space-y-2 animate-fadeIn'>
                <p>
                  <span className='font-medium'>Meaning:</span> {word.vietnamese}
                </p>
                <p>
                  <span className='font-medium'>Example:</span> {word.example}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
