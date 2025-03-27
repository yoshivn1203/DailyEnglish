'use client'

import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

import { wordsByDay } from '@/data/words'

// Comprehensive data structure with 10 days of words

export default function HomePage() {
  const router = useRouter()

  // Navigate to day detail page
  const navigateToDay = (dayIndex: number) => {
    router.push(`/day/${dayIndex}`)
  }

  return (
    <div className='container mx-auto p-4 sm:p-6 max-w-7xl'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-center'>10 English Words a day</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>
        {wordsByDay.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className='border rounded-lg p-4 sm:p-6 shadow-md cursor-pointer transition-all duration-300 h-full hover:bg-gray-50 dark:hover:bg-gray-900'
            onClick={() => navigateToDay(dayIndex)}
          >
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
              <span className='text-sm text-gray-500'>{format(day.date, 'dd/MM/yyyy')}</span>
            </div>

            <div className='mt-3 sm:mt-4'>
              <div className='mt-2 flex flex-wrap gap-1 sm:gap-2'>
                {day.words.map(word => (
                  <span
                    key={word.id}
                    className='px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs sm:text-sm text-foreground'
                  >
                    {word.english}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
