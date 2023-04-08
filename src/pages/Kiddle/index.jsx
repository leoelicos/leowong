import { useCallback, useEffect, useRef, useState } from 'react'
import { getWord } from './data/wordlist'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

import Alarm from './components/Alarm.jsx'
import StartButton from './components/StartButton.jsx'
import Tiles from './components/Tiles'

import Tally from './components/Tally.jsx'
import FooterButtons from './components/FooterButtons.jsx'
import HelpModal from './components/HelpModal.jsx'

import useTimer from './hooks/useTimer'

import './style/index.css'

import Elephant from './images/elephantOrange.png'
export default function WordGuess() {
  useFavicon('/favicons/kiddle.png')
  useTitle('Kiddle')

  /* state */
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonMessage, setButtonMessage] = useState('Start')
  const [tally, setTally] = useState(localStorage.getItem('tally') === 'undefined' ? [] : JSON.parse(localStorage.getItem('tally')))
  const [tiles, setTiles] = useState(['_', '_', '_', '_'])

  /* ref */
  const unguessed = useRef('')
  const started = useRef(false)

  /* hooks */
  const [seconds, startTimer, stopTimer, resetTimer] = useTimer()

  /* game logic */
  const startGame = () => {
    started.current = true
    unguessed.current = getWord().split('')
    setTiles(['_', '_', '_', '_'])
    setButtonMessage(`Quick! Guess the letters!`)
    resetTimer()
    startTimer()
  }
  const endGame = useCallback(
    (win) => {
      if (!unguessed.current) return
      stopTimer()
      started.current = false
      if (win) {
        setButtonMessage('You win! Start again?')
        updateTally(true)
      } else {
        setButtonMessage(`Answer: '${unguessed.current.join('')}'. Start again?'`) // fix impure
        updateTally(false)
      }
    },
    [stopTimer]
  )
  const updateTally = (win) => {
    setTally((prev) => {
      let wins = (prev?.wins || 0) + win ? 1 : 0
      let losses = (prev?.losses || 0) + win ? 0 : 1
      return { wins, losses }
    })
  }

  /* event handlers */
  const handleClickStart = () => {
    if (started.current) return
    startGame()
  }

  const handleClickResetTally = () => {
    setTally({ wins: 0, losses: 0 })
  }

  const handleClickHelp = () => {
    setIsModalOpen(true)
  }

  const handleClickModalOk = () => {
    setIsModalOpen(false)
  }

  const handleClickModalCancel = () => {
    setIsModalOpen(false)
  }

  const handleKeyDown = useCallback(
    (e) => {
      if (!started.current) return

      let match = e.key.match(/[a-z]/i)
      if (!match) return

      let key = match[0]
      if (!unguessed.current.includes(key)) return

      setTiles((prev) => {
        const newTile = prev.map((letter, i) => (unguessed.current[i] === key ? key : letter))
        if (newTile.every((v) => v !== '_')) endGame(true)
        return newTile
      })
    },
    [endGame]
  )

  /* effect */
  useEffect(() => {
    if (tally !== null) localStorage.setItem('tally', JSON.stringify(tally))
  }, [tally])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (seconds === 0) endGame(false)
  }, [seconds, endGame])

  return (
    <div className='kiddle'>
      <div className='body'>
        <header>
          <div className='logo'>
            <img
              src={Elephant}
              alt='elephant logo'
            />
          </div>
          <div>
            <h1>KIDDLE</h1>
          </div>
        </header>

        <main>
          <Alarm seconds={seconds} />
          <Tiles tiles={tiles} />
          <StartButton
            handleClickStart={handleClickStart}
            buttonMessage={buttonMessage}
          />
        </main>

        <footer>
          <Tally
            wins={tally?.wins || 0}
            losses={tally?.losses || 0}
          />
          <FooterButtons
            handleClickResetTally={handleClickResetTally}
            handleClickHelp={handleClickHelp}
          />
          <HelpModal
            handleClickModalOk={handleClickModalOk}
            handleClickModalCancel={handleClickModalCancel}
            isModalOpen={isModalOpen}
          />
        </footer>
      </div>
    </div>
  )
}
