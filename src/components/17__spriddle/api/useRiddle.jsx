import { useCallback, useState } from 'react'

const useRiddle = () => {
  const [riddleQuestion, setRiddleQuestion] = useState('')
  const [riddleAnswer, setRiddleAnswer] = useState('')

  const [riddleLoading, setRiddleLoading] = useState(false)
  const [riddleError, setRiddleError] = useState(false)

  const fetchRiddle = () => fetch('https://riddles-api.vercel.app/random', { method: 'GET', headers: { 'Content-Type': 'application/json' } })

  const parseRiddle = (data) => data.json()

  const riddleUpdate = useCallback(async () => {
    let riddle = undefined
    let data = undefined

    try {
      setRiddleLoading(true)

      while (riddle === undefined || riddle.answer.length > 12) {
        data = await fetchRiddle()
        if (!data) throw new Error('fetch error')

        riddle = await parseRiddle(data)
        if (!riddle) throw new Error()

        console.log('Search', { riddle })
      }
      console.log('Final', { riddle })
      setRiddleQuestion(riddle.riddle)
      setRiddleAnswer(riddle.answer)
    } catch (error) {
      console.error(error)
      setRiddleError(true)
      setTimeout(() => {
        setRiddleError(false)
      }, 2000)
    } finally {
      setRiddleLoading(false)
    }
  }, [])

  return { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError }
}
export default useRiddle
