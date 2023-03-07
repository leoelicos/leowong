import { useCallback, useEffect, useState } from 'react'

const useGame = () => {
  const [time, setTime] = useState(60)
  const [health, setHealth] = useState(10)
  const [finished, setFinished] = useState(false)

  /*   const handleKeyDown = useCallback(() => {
    console.log('handleKeyDown')
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown]) */

  const startGame = () => {
    setFinished(false)
    setTime(60)
    setHealth(10)
    console.log('useGame startGame')
  }
  const endGame = () => {
    setFinished(true)
    console.log('useGame endGame')
  }
  return { startGame, endGame, time, health, finished }
}
export default useGame
