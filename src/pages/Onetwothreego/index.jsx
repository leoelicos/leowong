import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'
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

export default function App() {
  useTitle('123Go')
  useFavicon('/favicons/onetwothreego.png')

  const [playerChoice, setPlayerChoice] = useState(undefined)
  const [computerChoice, setComputerChoice] = useState(undefined)
  const [win, setWin] = useState(undefined)
  const [tally, setTally] = useState({ playerWins: 0, computerWins: 0, draws: 0 })
  const rotateTimer = useRef(null)
  const [isRotating, setIsRotating] = useState(false)
  const handleChoice = (playerChoice) => {
    setIsRotating(true)
    setPlayerChoice(playerChoice)
    const computerChoice = choices[Math.floor(Math.random() * 3)].id
    let win = judge(playerChoice, computerChoice)
    let newTally =
      win === 'draw' //
        ? { ...tally, draws: tally.draws + 1 }
        : win === 'player'
        ? { ...tally, playerWins: tally.playerWins + 1 }
        : { ...tally, computerWins: tally.computerWins + 1 }

    rotateTimer.current = setInterval(() => {
      setComputerChoice((prev) => (prev === undefined || prev === 'scissors' ? 'rock' : prev === 'rock' ? 'paper' : 'scissors'))
    }, 100)

    setTimeout(() => {
      clearInterval(rotateTimer.current)
      setComputerChoice(computerChoice)
      setWin(win)
      setTally(newTally)
      setIsRotating(false)
    }, 1000)
  }
  return (
    <div className='app-06'>
      <div className='body'>
        <section className='instruction'>Choose wisely</section>
        <section className='game-container'>
          {choices.map(({ icon, id }) => (
            <button
              key={id}
              className={id === playerChoice ? 'active' : ''}
              onClick={() => {
                if (isRotating) return
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
          <br />
          {`${tally.playerWins} wins, ${tally.computerWins} losses, ${tally.draws} draws`}
        </section>
      </div>
    </div>
  )
}
