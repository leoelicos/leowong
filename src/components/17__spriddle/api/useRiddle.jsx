import { useCallback, useState } from 'react'
import data from './data.json'

const useRiddle = () => {
  const [riddleQuestion, setRiddleQuestion] = useState('')
  const [riddleAnswer, setRiddleAnswer] = useState('')

  const [riddleLoading, setRiddleLoading] = useState(false)
  const [riddleError, setRiddleError] = useState(false)

  const fetchRiddle = () =>
    new Promise((res) => {
      res(data[Math.floor(Math.random() * data.length)])
    })

  const spacingRiddle = (str) => str.replace(/([.!?:;])\s+/g, '$1###').split('###')

  const riddleUpdate = useCallback(async () => {
    let riddle = undefined

    try {
      setRiddleLoading(true)
      riddle = await fetchRiddle()
      // console.log('Final', { riddle })
      setRiddleQuestion(spacingRiddle(riddle.riddle))
      setRiddleAnswer(riddle.answer.toLowerCase())
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
