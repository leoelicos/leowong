import { useEffect, useRef, useState } from 'react'

const useTime = () => {
  const [time, setTime] = useState(new Date())
  const timer = useRef(null)

  const incrementTime = () => {
    setTime(new Date())
  }
  useEffect(() => {
    clearInterval(timer.current)
    timer.current = setInterval(incrementTime, 1000)
  }, [])

  return time
}
export default useTime
