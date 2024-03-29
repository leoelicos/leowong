import { useEffect, useRef, useState } from 'react'

const useTimer = ({ initialTime, callback = () => {} }) => {
  const [time, setTime] = useState(initialTime)
  let timer = useRef(null)

  const startTimer = () => {
    setTime(initialTime)
    timer.current = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          endTimer()
          callback()
          return prev
        }
        return prev - 1
      })
    }, 1000)
  }

  const endTimer = () => {
    clearInterval(timer.current)
  }

  /* cleanup */
  useEffect(() => {
    return () => {
      clearInterval(timer.current)
    }
  }, [])
  return { time, startTimer, endTimer }
}
export default useTimer
