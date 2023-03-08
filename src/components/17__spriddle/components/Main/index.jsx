import { useState } from 'react'
import Splash from './components/Splash/index.jsx'
import PreGame from './components/PreGame/index.jsx'
import Game from './components/Game/index.jsx'
import PostGame from './components/PostGame/index.jsx'

import useRiddle from '../../api/useRiddle.jsx'

const Main = ({ stage, goToNextStage }) => {
  const [health, setHealth] = useState()
  const [finished, setFinished] = useState()
  const [attempt, setAttempt] = useState()
  const [attemptMemo, setAttemptMemo] = useState()
  const [outcome, setOutcome] = useState(undefined)
  const answer = useRef(null)

  const { time, startTimer, endTimer } = useTimer({ initialTime: 10000 })

  const {
    riddleQuestion,
    riddleAnswer,
    riddleUpdate,
    riddleLoading,
    riddleError //
  } = useRiddle()

  const startGame = useCallback(({ riddleAnswer }) => {
    const memo = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
    setHealth(10)
    setFinished(false)
    answer.current = riddleAnswer
    setAttempt(riddleAnswer.replace(/[a-zA-Z]/g, '_'))
    setAttemptMemo(memo)

    console.log('useGame startGame')
  }, [])

  const endGame = useCallback(
    (outcome) => {
      endTimer()
      setFinished(true)
      if (outcome === 'success') {
        console.log('end success')
        setOutcome(0)
      } else if (outcome === 'fail_timeout') {
        console.log('end fail timeout')
        setOutcome(1)
      } else if (outcome === 'fail_noMoreGuesses') {
        console.log('end fail no more guesses')
        setOutcome(2)
      }
    },
    [endTimer, setOutcome]
  )

  const handleKeyDown = useCallback(
    (e) => {
      let k = e.key
      if (k.length === 1 && ((k >= 'a' && k <= 'z') || (k >= 'A' && k <= 'Z'))) {
        console.log(e.key)
        if (answer.current.includes(e.key) && !attempt.includes(e.key)) {
          console.log(answer.current, 'includes', e.key)
          setAttempt((prev) =>
            prev //
              .split('')
              .map((v, i) => (answer.current[i] === e.key ? e.key : v))
              .join('')
          )
        }
      }
    },
    [attempt]
  )
  useEffect(() => {
    if (time === 0) {
      endGame()
    }
  }, [time, endGame])
  const start = useCallback(() => {
    startGame({ riddleAnswer })
    startTimer()
  }, [startGame, riddleAnswer, startTimer])

  useEffect(() => {
    if (answer.current === attempt) endGame('success')
  }, [attempt, answer, endGame])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    if (finished === true) goToNextStage()
  }, [finished, goToNextStage])

  // console.log({ stage })
  const style = {
    backgroundColor: '#eee',
    flex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }

  return (
    <main style={style}>
      {stage === 0 ? ( //
        <Splash //
          goToNextStage={goToNextStage}
          riddleUpdate={riddleUpdate}
          riddleLoading={riddleLoading}
          riddleError={riddleError}
        />
      ) : stage === 1 ? (
        <PreGame
          goToNextStage={() => {
            goToNextStage()
            start()
          }}
        />
      ) : stage === 2 ? (
        <Game //
          goToNextStage={goToNextStage}
          riddleQuestion={riddleQuestion}
          riddleAnswer={riddleAnswer}
          setOutcome={setOutcome}
          attempt={attempt}
          attemptMemo={attemptMemo}
        />
      ) : (
        <PostGame
          goToNextStage={goToNextStage}
          outcome={outcome}
        />
      )}
    </main>
  )
}
export default Main
