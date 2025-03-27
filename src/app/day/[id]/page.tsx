'use client'

import { format } from 'date-fns'
import { ArrowLeft, Volume2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MouseEvent, use, useState } from 'react'

import { Button } from '@/components/ui/button'
import { wordsByDay } from '@/data/words'

// Types for test functionality
interface TestQuestion {
  word: string
  correctAnswer: string
  options: string[]
}

export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const unwrappedParams = use(params)
  const dayIndex = parseInt(unwrappedParams.id)
  const [expandedWordId, setExpandedWordId] = useState<number | null>(null)
  const [showTest, setShowTest] = useState(false)
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({})
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set())

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

  // Generate test questions
  const generateQuestions = (): TestQuestion[] => {
    return day.words.map(currentWord => {
      // Get all possible Vietnamese translations from this day's words
      const allTranslations = day.words.map(w => w.vietnamese)

      // Filter out the correct answer and get 3 random wrong answers
      const wrongAnswers = allTranslations
        .filter(t => t !== currentWord.vietnamese)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      // Combine correct and wrong answers, then shuffle
      const options = [...wrongAnswers, currentWord.vietnamese].sort(() => Math.random() - 0.5)

      return {
        word: currentWord.english,
        correctAnswer: currentWord.vietnamese,
        options
      }
    })
  }

  const [questions] = useState<TestQuestion[]>(() => generateQuestions())

  // Handle answer selection
  const handleAnswerSelect = (word: string, answer: string) => {
    if (!answeredQuestions.has(word)) {
      setUserAnswers(prev => ({
        ...prev,
        [word]: answer
      }))
      setAnsweredQuestions(prev => new Set(prev).add(word))
    }
  }

  // Calculate score
  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      if (userAnswers[q.word] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

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
    <div className='container mx-auto p-4 sm:p-6 max-w-6xl'>
      <Button variant='outline' onClick={() => router.push('/')}>
        <ArrowLeft className='h-4 w-4 mr-2' />
        Back
      </Button>
      <h1 className='mt-3 text-xl sm:text-xl font-bold'>
        Words for {format(day.date, 'dd/MM/yyyy')}
      </h1>

      <div className='flex justify-end mt-4'>
        <Button
          onClick={() => {
            setShowTest(!showTest)
            setUserAnswers({})
            setAnsweredQuestions(new Set())
          }}
          className={`
            text-white font-semibold px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700
            transition-all duration-300 transform hover:scale-105
          `}
        >
          {showTest ? 'Show Words' : 'Take Test'}
        </Button>
      </div>

      {!showTest ? (
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
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
                    <span className='font-medium'>Dịch:</span> {word.vietnamese}
                  </p>
                  <p>
                    <span className='font-medium'>Ví dụ:</span> {word.example}
                  </p>
                  <p>
                    <span className='font-medium'>Dịch ví dụ:</span> {word.exampleTranslation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className='mt-6 space-y-8'>
          {questions.map((q, index) => {
            const isAnswered = answeredQuestions.has(q.word)
            const selectedAnswer = userAnswers[q.word]
            const isCorrect = selectedAnswer === q.correctAnswer

            return (
              <div
                key={q.word}
                className={`border rounded-lg p-6 shadow-md transition-all duration-300
                  ${
                    isAnswered
                      ? isCorrect
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      : ''
                  }`}
              >
                <h3 className='text-lg font-medium mb-4'>
                  {index + 1}. Từ "{q.word}" nghĩa là gì?
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {q.options.map((option, optionIndex) => {
                    const isSelected = selectedAnswer === option
                    const isCorrectOption = option === q.correctAnswer

                    return (
                      <Button
                        key={optionIndex}
                        variant={
                          isAnswered
                            ? isCorrectOption
                              ? 'default'
                              : isSelected
                                ? 'destructive'
                                : 'outline'
                            : isSelected
                              ? 'default'
                              : 'outline'
                        }
                        className={`p-4 h-auto text-left transition-all duration-300
                          ${isAnswered && isCorrectOption ? 'bg-green-600 hover:bg-green-700 text-white' : ''}
                          ${isAnswered && isSelected && !isCorrectOption ? 'bg-red-600 hover:bg-red-700 text-white' : ''}
                          ${!isAnswered && !isSelected ? 'hover:border-blue-400 hover:text-blue-600' : ''}
                        `}
                        onClick={() => !isAnswered && handleAnswerSelect(q.word, option)}
                        disabled={isAnswered}
                      >
                        {option}
                      </Button>
                    )
                  })}
                </div>
                {isAnswered && !isCorrect && (
                  <div className='mt-4 text-sm text-red-600 dark:text-red-400'>
                    Correct answer: {q.correctAnswer}
                  </div>
                )}
              </div>
            )
          })}

          <div className='mt-6 text-center'>
            <h3 className='text-xl font-bold'>
              Score so far: {calculateScore()} / {questions.length}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}
