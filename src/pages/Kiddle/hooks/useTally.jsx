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
    setTally((prev) =>
      win //
        ? { wins: prev.wins + 1, losses: prev.losses }
        : { wins: prev.wins, losses: prev.losses + 1 }
    )
  }

  const handleClickResetTally = () => {
    setTally({ wins: 0, losses: 0 })
  }

  return { tally, updateTally, handleClickResetTally }
}
