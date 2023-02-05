import { useEffect, useRef, useState } from 'react'
import { getWord } from './data/wordlist'
import Elephant from './assets/images/elephantOrange.png'
import './assets/css/body.css'
import './assets/css/footer.css'
import './assets/css/header.css'
import './assets/css/main.css'
import { Modal } from 'antd'

export default function WordGuess() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const [buttonMessage, setButtonMessage] = useState('Start')
  const [tally, setTally] = useState(JSON.parse(localStorage.getItem('tally')))
  const unguessed = useRef('')

  useEffect(() => {
    if (tally !== null) localStorage.setItem('tally', JSON.stringify(tally))
  }, [tally])

  const endGame = (win) => {
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
      if (prev === null) return win ? { wins: 1, losses: 0 } : { wins: 0, losses: 1 }
      const newTally = win ? { ...prev, wins: prev.wins + 1 } : { ...prev, losses: prev.losses + 1 }

      return newTally
    })
  }
  const [seconds, startTimer, stopTimer, resetTimer] = useTimer(endGame)
  const started = useRef(false)
  const blankTiles = ['_', '_', '_', '_']
  const [tiles, setTiles] = useState(blankTiles)

  const resetUnguessed = () => {
    unguessed.current = getWord().split('')
    unguessed.current = 'feet'.split('')
  }

  const resetTiles = () => {
    setTiles(blankTiles)
  }

  const startGame = () => {
    started.current = true
    setButtonMessage(`Quick! Guess the letters!`)
    resetTimer()
    startTimer()
    resetUnguessed()
    resetTiles()
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

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
      <div className='body'>
        <Header />
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

          <div
            id='modal'
            className='hide'>
            <button id='closeModal'>X</button>
            <p>Click start to play. Type the letters to guess the word before the timer hits 0!</p>
          </div>
          <section className='footer-buttons'>
            <button
              className='btn'
              id='button-reset-games'
              onClick={handleClickResetTally}>
              Reset
            </button>
            <button
              className='btn'
              id='button-help'
              onClick={handleClickHelp}>
              ?
            </button>
            <Modal
              title='Instructions'
              centered
              open={isModalOpen}
              okType={'danger'}
              onOk={handleOk}
              onCancel={handleCancel}>
              <p>Click start to play. Type the letters to guess the word before the timer hits 0!</p>
            </Modal>
          </section>
        </footer>
      </div>
    </div>
  )
}

const Header = () => (
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
)

const useTimer = (endGame) => {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) endGame(false)
        return prev - 1
      })
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }
  const resetTimer = () => {
    setSeconds(10)
  }

  return [seconds, startTimer, stopTimer, resetTimer]
}

const Alarm = ({ seconds }) => {
  return (
    <section className='alarm-wrapper'>
      <div className='alarm'>
        0:<span id='secondsLeft'>{seconds.toString().padStart(2, '0')}</span>
      </div>
    </section>
  )
}

const Tiles = ({ tiles }) => {
  return (
    <div className='tile-wrapper'>
      {tiles.map((v, i) => (
        <div
          key={`tile${i}`}
          className='tile'
          id={`tile${i}`}>
          {v}
        </div>
      ))}
    </div>
  )
}

const StartButton = ({ handleClickStart, buttonMessage }) => (
  <section className='start-wrapper'>
    <button
      className='btn'
      id='button-start-games'
      onClick={(e) => {
        e.preventDefault()
        handleClickStart()
      }}>
      {buttonMessage}
    </button>
  </section>
)

const Tally = ({ wins, losses }) => (
  <section className='tally'>
    <button id='button-tally-wins'>
      <div id='tally-wins-label'>Wins:&nbsp;</div>
      <div id='tally-wins-value'>{wins}</div>
    </button>

    <button id='button-tally-losses'>
      <div id='tally-losses-label'>Losses:&nbsp;</div>
      <div id='tally-losses-value'>{losses}</div>
    </button>
  </section>
)
