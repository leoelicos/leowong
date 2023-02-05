import { useEffect, useRef, useState } from 'react'
import { getWord } from './data/wordlist'

import Body from './components/Body'
import Header from './components/Header'
import Main from './components/Main'
import Alarm from './components/Main/Alarm.jsx'
import StartButton from './components/Main/StartButton.jsx'
import Tiles from './components/Main/Tiles'
import Footer from './components/Footer'
import Tally from './components/Footer/Tally.jsx'
import FooterButtons from './components/Footer/FooterButtons.jsx'
import HelpModal from './components/Footer/HelpModal.jsx'

import useTimer from './hooks/useTimer'

export default function WordGuess() {
  /* state */
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [buttonMessage, setButtonMessage] = useState('Start')
  const [tally, setTally] = useState(JSON.parse(localStorage.getItem('tally')))
  const [tiles, setTiles] = useState(['_', '_', '_', '_'])

  /* ref */
  const unguessed = useRef('')
  const started = useRef(false)

  /* hooks */
  const [seconds, startTimer, stopTimer, resetTimer] = useTimer()

  /* effect */
  useEffect(() => {
    if (tally !== null) localStorage.setItem('tally', JSON.stringify(tally))
  }, [tally])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (seconds === 0) endGame(false)
  }, [seconds])

  /* game logic */
  const startGame = () => {
    started.current = true
    setButtonMessage(`Quick! Guess the letters!`)
    resetTimer()
    startTimer()
    resetUnguessed()
    resetTiles()
  }
  const endGame = (win) => {
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
  }
  const updateTally = (win) => {
    setTally((prev) => {
      let wins = prev?.wins || 0
      let losses = prev?.losses || 0
      if (win) wins++
      else losses++

      return { wins, losses }
    })
  }

  const resetUnguessed = () => {
    unguessed.current = getWord().split('')
  }

  const resetTiles = () => {
    setTiles(['_', '_', '_', '_'])
  }

  /* event handlers */
  const handleClickModalOk = () => {
    setIsModalOpen(false)
  }

  const handleClickModalCancel = () => {
    setIsModalOpen(false)
  }

  const handleKeyDown = (e) => {
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
  }

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

  return (
    <div className='app-08'>
      <Body>
        <Header />
        <Main>
          <Alarm seconds={seconds} />
          <Tiles tiles={tiles} />
          <StartButton
            handleClickStart={handleClickStart}
            buttonMessage={buttonMessage}
          />
        </Main>

        <Footer>
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
        </Footer>
      </Body>
    </div>
  )
}
