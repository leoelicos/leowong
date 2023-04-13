import { useCallback, useEffect, useState } from 'react'

export default function useKeyDown() {
  const [k, setK] = useState(undefined)

  const handleKeyDown = useCallback(
    (e) => {
      const match = e.key.match(/[a-z]/i)
      if (!match || match[0] === k) return
      else setK(match[0])
    },
    [k]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return { k }
}
