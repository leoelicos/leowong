import { useRef, useState } from 'react'

const useTimer = (initialState) => {
  const [secondsLeft, setSecondsLeft] = useState(initialState)
  const timerRef = useRef(null)
  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)
  }
  const stopTimer = () => {
    clearInterval(timerRef.current)
  }
  const resetTimer = () => {
    setSecondsLeft(60)
  }
  const penalize = (penalty) => {
    setSecondsLeft((prev) => prev - penalty)
  }
  return [secondsLeft, startTimer, stopTimer, resetTimer, penalize]
}
export default useTimer
