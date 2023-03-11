import { useRef, useState } from 'react'

const useTimer = () => {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        return prev - 1
      })
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }
  const resetTimer = () => {
    setSeconds(10)
  }

  return [seconds, startTimer, stopTimer, resetTimer]
}
export default useTimer
