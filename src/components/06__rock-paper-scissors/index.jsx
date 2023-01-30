import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import './style/style.css'
const choices = [
  { id: 'rock', icon: faHandRock },
  { id: 'paper', icon: faHandPaper },
  { id: 'scissors', icon: faHandScissors }
]
const judge = (playerChoice, computerChoice) =>
  computerChoice === playerChoice
    ? 'draw'
    : (computerChoice === 'rock' && playerChoice === 'scissors') || //
      (computerChoice === 'paper' && playerChoice === 'rock') ||
      (computerChoice === 'scissors' && playerChoice === 'paper')
    ? 'computer'
    : 'player'
export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(undefined)
  const [computerChoice, setComputerChoice] = useState(undefined)
  const [win, setWin] = useState(undefined)
  const [tally, setTally] = useState({ wins: 0, losses: 0, tally: 0 })
  const rotateTimer = useRef(null)
  const handleChoice = (choice) => {
    setPlayerChoice(choice)

    rotateTimer.current = setInterval(() => {
      setComputerChoice((prev) => (prev === undefined || prev === 'scissors' ? 'rock' : prev === 'rock' ? 'paper' : 'scissors'))
    }, 100)

    setTimeout(() => {
      clearInterval(rotateTimer.current)
      let computerChoice = choices[Math.floor(Math.random() * 3)].id
      setComputerChoice(computerChoice)
      let win = undefined
      if (computerChoice === choice) {
        win = 'draw'
      } else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') || //
        (computerChoice === 'paper' && playerChoice === 'rock') ||
        (computerChoice === 'scissors' && playerChoice === 'paper')
      )
        win = 'computer'
      else win = 'player'

      setWin(win)
    }, 1000)
  }
  return (
    <div className='app-06'>
      <div className='body'>
        <section className='instruction'>Choose wisely</section>
        <section className='game-container'>
          {choices.map(({ icon, id }, i) => (
            <button
              key={id}
              className={id === playerChoice ? 'active' : ''}
              onClick={() => {
                handleChoice(id)
              }}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={icon} />
              </div>
            </button>
          ))}
        </section>
        <section className='game-container'>
          {choices.map(({ icon, id }, i) => (
            <button
              key={id}
              className={`computer ${id === computerChoice ? 'active' : ''}`}>
              <div className='icon-wrapper'>
                <FontAwesomeIcon icon={icon} />
              </div>
            </button>
          ))}
        </section>
        <section className='result'>
          {win === 'player' //
            ? 'You win'
            : win === 'computer'
            ? 'You lose'
            : win === 'draw'
            ? 'Draw'
            : ''}
        </section>
      </div>
    </div>
  )
}
