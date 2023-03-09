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

  // const deserialiseRiddle = (data) => data.json()

  const spacingRiddle = (str) => str.replace(/([.!?:;])\s+/g, '$1###').split('###')

  const riddleUpdate = useCallback(async () => {
    let riddle = undefined
    let data = undefined

    try {
      setRiddleLoading(true)

      // while (riddle === undefined || riddle.answer.length > 12) {
      // data = await fetchRiddle()
      // if (!data) throw new Error('fetch error')

      // riddle = await deserialiseRiddle(data)
      // if (!riddle) throw new Error()

      // console.log('Search', { riddle })
      // }
      riddle = await fetchRiddle()
      console.log('Final', { riddle })
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
