import { useEffect, useState } from 'react'

const useData = () => {
  const [schedule, setSchedule] = useState()

  const addToSchedule = (time, text) => {
    setSchedule((prev) => prev.map((v) => (v.time === time ? { ...v, text: text } : v)))
  }

  useEffect(() => {
    let s = JSON.parse(localStorage.getItem('schedule') || '[]')
    if (!s.length)
      s.push(
        { time: 9, text: '' }, //
        { time: 10, text: '' },
        { time: 11, text: '' },
        { time: 12, text: '' },
        { time: 13, text: '' },
        { time: 14, text: '' },
        { time: 15, text: '' },
        { time: 16, text: '' },
        { time: 17, text: '' }
      )
    setSchedule(s)
  }, [])

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(schedule))
  }, [schedule])

  return { schedule, addToSchedule }
}
export default useData
