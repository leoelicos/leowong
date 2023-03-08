import { useCallback, useEffect, useRef, useState } from 'react'
import Splash from './components/Splash/index.jsx'
import PreGame from './components/PreGame/index.jsx'
import Game from './components/Game/index.jsx'
import PostGame from './components/PostGame/index.jsx'

import useRiddle from '../../api/useRiddle.jsx'
import useTimer from '../../hooks/useTimer.jsx'

const PAGE_SPLASH = 0
const PAGE_PREGAME = 1
const PAGE_GAME = 2
const PAGE_POSTGAME = 3

const usePage = () => {
  const [page, setStage] = useState(PAGE_SPLASH)

  const goToSplash = () => {
    setStage(PAGE_SPLASH)
  }
  const goToPreGame = () => {
    setStage(PAGE_PREGAME)
  }
  const goToGame = () => {
    setStage(PAGE_GAME)
  }
  const goToPostGame = () => {
    setStage(PAGE_POSTGAME)
  }

  return { page, goToSplash, goToPreGame, goToGame, goToPostGame }
}

const Main = () => {
  const { page, goToSplash, goToPreGame, goToGame, goToPostGame } = usePage()

  const { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError } = useRiddle()

  /* splash / pregame */
  var handlePreGameTimerFinished = () => {
    startGame({ riddleAnswer })
    goToGame()
  }

  const { time: preGameTime, startTimer: preGameStartTimer } = useTimer({ initialTime: 1, callback: handlePreGameTimerFinished })

  const handleClickNewGame = async () => {
    await riddleUpdate()
    goToPreGame()
    preGameStartTimer()
  }

  /* game */

  const [health, setHealth] = useState()
  const [attempt, setAttempt] = useState()
  const [attemptMemo, setAttemptMemo] = useState()

  const [outcome, setOutcome] = useState(undefined)
  const answer = useRef(null)

  const startGame = useCallback(({ riddleAnswer }) => {
    const memo = {}
    for (let i = 0; i < 26; i++) {
      memo[String.fromCharCode('a'.charCodeAt(0) + i)] = 0
    }

    setHealth(10)

    answer.current = riddleAnswer
    setAttempt(riddleAnswer.replace(/[a-zA-Z]/g, '_'))
    setAttemptMemo(memo)

    console.log('useGame startGame')
  }, [])

  const handleGameTimerRunsOut = () => {
    setOutcome(1)
    goToPostGame()
  }

  const {
    time: gameTime, //
    startTimer: gameStartTimer,
    endTimer: gameEndTimer
  } = useTimer({ initialTime: 10000, callback: handleGameTimerRunsOut })

  const handleGameGuessesRunOut = () => {
    setOutcome(2)
    gameEndTimer()
    goToPostGame()
  }

  const handleGameSuccess = () => {
    setOutcome(0)
    gameEndTimer()
    goToPostGame()
  }

  const handleKey = (k) => {
    /* the key is not a letter */
    if (k.length !== 1) return

    /* the key is not a letter */
    if (!(k >= 'a' && k <= 'z')) return

    /* the letter has already been guessed */
    if (attempt.includes(k)) return

    /* the letter is correct */
    if (answer.current.includes(k)) {
      setAttempt((prev) => {
        let response = prev
          .split('')
          .map((v, i) => (answer.current[i] === k ? k : v))
          .join('')
        if (response === answer.current) handleGameSuccess()
        return response
      })
      setAttemptMemo((prev) => ({ ...prev, [k]: 2 }))
      return
    }

    /* the letter is incorrect */
    setHealth((prev) => {
      if (prev === 0) {
        console.log('handleKeyDown no more guesses')
        handleGameGuessesRunOut()
      }
      return prev - 1
    })

    setAttemptMemo((prev) => ({ ...prev, [k]: 1 }))
  }
  const handleKeyDown = (e) => {
    handleKey(e.key.toLowerCase())
  }

  const handleClickKey = (key) => {
    handleKey(key.toLowerCase())
  }

  const start = useCallback(() => {
    startGame({ riddleAnswer })
    gameStartTimer()
  }, [startGame, riddleAnswer, gameStartTimer])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  /* post game */
  const handlePostGameClickNewGame = () => {
    goToSplash()
  }

  const style = {
    backgroundColor: '#eee',
    flex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }

  return (
    <main style={style}>
      {page === PAGE_SPLASH ? ( //
        <Splash //
          riddleLoading={riddleLoading}
          riddleError={riddleError}
          handleClickNewGame={handleClickNewGame}
        />
      ) : page === PAGE_PREGAME ? (
        <PreGame preGameTime={preGameTime} />
      ) : page === PAGE_GAME ? (
        <Game //
          goToPostGame={goToPostGame}
          riddleQuestion={riddleQuestion}
          riddleAnswer={riddleAnswer}
          setOutcome={setOutcome}
          attempt={attempt}
          attemptMemo={attemptMemo}
          handleClickKey={handleClickKey}
          gameTime={gameTime}
          health={health}
        />
      ) : page === PAGE_POSTGAME ? (
        <PostGame
          handlePostGameClickNewGame={handlePostGameClickNewGame}
          outcome={outcome}
        />
      ) : null}
    </main>
  )
}
export default Main
