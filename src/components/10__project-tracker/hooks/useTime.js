import { useEffect, useRef, useState } from 'react'

const useTime = () => {
  const [time, setTime] = useState(new Date().getTime())
  const timer = useRef(null)

  const incrementTime = () => {
    setTime((prev) => prev + 1000)
  }
  useEffect(() => {
    clearInterval(timer.current)
    timer.current = setInterval(incrementTime, 1000)
  }, [])

  return time
}
export default useTime
