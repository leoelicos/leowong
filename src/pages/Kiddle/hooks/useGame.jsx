import { useCallback, useEffect, useRef, useState } from 'react'
import useKeyDown from './useKeyDown'
import { getWord } from '../data/wordlist.js'
import useTimer from './useTimer'
import useTally from './useTally.jsx'

export default function useGame() {
  /* hooks */
  const [seconds, startTimer, stopTimer, resetTimer] = useTimer()
  const { tally, updateTally, handleClickResetTally } = useTally()

  /* state */
  const [tiles, setTiles] = useState(['_', '_', '_', '_'])
  const [buttonMessage, setButtonMessage] = useState('Start')

  /* ref */

  const started = useRef(false)
  const unguessed = useRef('')

  /* handlers */
  const startGame = useCallback(() => {
    if (started.current) return
    started.current = true
    unguessed.current = getWord().split('')
    setTiles(['_', '_', '_', '_'])
    setButtonMessage(`Quick! Guess the letters!`)
    resetTimer()
    startTimer()
  }, [resetTimer, startTimer])

  const endGame = useCallback(
    (win) => {
      stopTimer()
      started.current = false
      if (win === true) {
        setButtonMessage('You win! Start again?')
        updateTally(true)
      } else {
        setButtonMessage(`Answer: '${unguessed.current.join('')}'. Start again?'`) // fix impure
        updateTally(false)
      }
    },
    [stopTimer, updateTally]
  )

  /* effects */
  useEffect(() => {
    if (seconds === 0 && started.current === true) {
      endGame(false)
    }
  }, [seconds, endGame, tiles])

  // last key
  const { k } = useKeyDown()

  // update tiles
  useEffect(() => {
    console.log('update tiles')
    // game has not started - nothing to update
    if (started.current === false) return
    // already guessed - nothing to update
    else if (tiles.includes(k)) return
    // the key isn't in the answer
    else if (!unguessed.current.includes(k)) return
    // update tiles with new state
    else {
      console.log('k')
      setTiles((prev) => {
        const newTiles = prev.map((tile, i) => (unguessed.current[i] === k ? k : tile))
        if (newTiles.every((v) => v !== '_')) endGame(true)
        return newTiles
      })
    }
  }, [endGame, tiles, k])

  return {
    seconds,
    tiles,

    tally,
    handleClickResetTally,
    buttonMessage,

    started,
    startGame
  }
}
