import { useEffect, useState } from 'react'

export default function useTally() {
  /* state */
  const [tally, setTally] = useState(() => {
    if (!localStorage.getItem('tally')) return { wins: 0, losses: 0 }
    return JSON.parse(localStorage.getItem('tally'))
  })

  /* effect */
  useEffect(() => {
    if (tally !== null) localStorage.setItem('tally', JSON.stringify(tally))
    return () => {
      localStorage.setItem('tally', JSON.stringify(tally))
    }
  }, [tally])

  /* handler */
  const updateTally = (win) => {
    setTally((prev) => {
      let wins = (prev?.wins || 0) + win ? 1 : 0
      let losses = (prev?.losses || 0) + win ? 0 : 1
      return { wins, losses }
    })
  }

  const handleClickResetTally = () => {
    setTally({ wins: 0, losses: 0 })
  }

  return { tally, updateTally, handleClickResetTally }
}
