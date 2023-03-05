import { useCallback, useState } from 'react'

const useRiddle = () => {
  const [riddleQuestion, setRiddleQuestion] = useState('')
  const [riddleAnswer, setRiddleAnswer] = useState('')

  const [riddleLoading, setRiddleLoading] = useState(false)
  const [riddleError, setRiddleError] = useState(false)

  const riddleUpdate = useCallback(async () => {
    /*  mock */
    let mockData = { question: 'I am a tree, but I am very small... Who am I?', answer: 'grass' }
    setRiddleLoading(true)
    setRiddleError(false)

    /* mock loading time */
    setTimeout(() => {
      setRiddleQuestion(mockData.question)
      setRiddleAnswer(mockData.answer)
      setRiddleError(false)
      setRiddleLoading(false)
    }, 1000)

    /* mock error */
    /*     setTimeout(() => {
      setRiddleError(true)
      setRiddleLoading(false)
    }, 1000) */

    /* try {
      setRiddleLoading(true)
      setRiddleError(false)
      let result = await fetch('https://riddles-api.vercel.app/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await result.json()
      if (!data) throw new Error('no riddle found')
      setRiddleQuestion(data.riddle)
      setRiddleAnswer(data.answer)
    } catch (error) {
      setRiddleError(true)
      console.error(error)
    } finally {
      setRiddleLoading(false)
    } */
  }, [])

  return { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError }
}
export default useRiddle
