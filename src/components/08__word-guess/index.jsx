import { useEffect, useState } from 'react'
import './assets/css/body.css'
import './assets/css/footer.css'
import './assets/css/header.css'
import './assets/css/main.css'

import Elephant from './assets/images/elephantOrange.png'

import { getWord } from './data/wordlist'

export default function WordGuess() {
  const [word, setWord] = useState(null)
  const [secondsLeft, setSecondsLeft] = useState(null)
  const [finished, setFinished] = useState(true)
  const [buttonMessage, setButtonMessage] = useState('Start')
  const resetWord = () => {
    setWord(getWord())
  }
  const resetTimer = () => {
    setSecondsLeft(10)
  }
  useEffect(() => {
    resetWord()
    resetTimer()
  }, [])
  return (
    <div className='app-08'>
      <div className='body'>
        <Header />
        <main>
          <section className='alarm-wrapper'>
            <div className='alarm'>
              0:<span id='secondsLeft'>10</span>
            </div>
          </section>
          <div className='tile-wrapper'>
            <div
              className='tile'
              id='tile0'>
              _
            </div>
            <div
              className='tile'
              id='tile1'>
              _
            </div>
            <div
              className='tile'
              id='tile2'>
              _
            </div>
            <div
              className='tile'
              id='tile3'>
              _
            </div>
          </div>
          <section className='start-wrapper'>
            <button
              className='btn'
              id='button-start-games'
              onClick={(e) => {
                e.preventDefault()
                if (!finished) return
                setFinished(false)
                resetWord()
                resetTimer()
              }}>
              {buttonMessage}
            </button>
          </section>
        </main>

        <footer>
          <section className='tally'>
            <button id='button-tally-wins'>
              <div id='tally-wins-label'>Wins:&nbsp;</div>
              <div id='tally-wins-value'>0</div>
            </button>

            <button id='button-tally-losses'>
              <div id='tally-losses-label'>Losses:&nbsp;</div>
              <div id='tally-losses-value'>0</div>
            </button>
          </section>
          <div
            id='modal'
            className='hide'>
            <button id='closeModal'>X</button>
            <p>Click start to play. Type the letters to guess the word before the timer hits 0!</p>
          </div>
          <section className='footer-buttons'>
            <button
              className='btn'
              id='button-reset-games'>
              Reset
            </button>
            <button
              className='btn'
              id='button-help'>
              ?
            </button>
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
