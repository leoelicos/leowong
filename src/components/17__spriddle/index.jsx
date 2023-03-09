import { useCallback, useEffect, useState } from 'react'

import App from './components/App.jsx'
import AppBody from './components/AppBody.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main/index.jsx'

import Splash from './components/Main/components/Splash'
import PreGame from './components/Main/components/PreGame'
import Game from './components/Main/components/Game'
import PostGame from './components/Main/components/PostGame'

import useRiddle from './api/useRiddle.jsx'
import useTimer from './hooks/useTimer.jsx'

import './style/index.css'

const Spriddle = () => {
  const PAGE_SPLASH = 0
  const PAGE_PREGAME = 1
  const PAGE_GAME = 2
  const PAGE_POSTGAME = 3

  const ATTEMPT_CORRECT = 2
  const ATTEMPT_INCORRECT = 1
  const ATTEMPT_DEFAULT = 0

  const OUTCOME_SUCCESS = 0
  const OUTCOME_FAIL_TIME = 1
  const OUTCOME_FAIL_GUESSES = 2

  const [page, setPage] = useState(PAGE_SPLASH)

  const { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError } = useRiddle()

  /* splash / pregame */
  var handlePreGameTimerFinished = () => {
    resetKeyboard()
    resetHealth()
    gameStartTimer()
    setPage(PAGE_GAME)
  }

  const { time: preGameTime, startTimer: preGameStartTimer } = useTimer({
    initialTime: 3,
    callback: handlePreGameTimerFinished
  })

  const handleClickNewGame = async () => {
    await riddleUpdate()
    // console.log('update finished', { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError })
    setPage(PAGE_PREGAME)
    preGameStartTimer()
  }

  /* game */

  const [health, setHealth] = useState()
  const [attempt, setAttempt] = useState()
  const [attemptMemo, setAttemptMemo] = useState()

  const [outcome, setOutcome] = useState(undefined)

  useEffect(() => {
    if (riddleAnswer?.length > 0) {
      // console.log({ riddleAnswer })
      setAttempt(riddleAnswer.replace(/[a-zA-Z]/g, '_'))
    }
  }, [riddleAnswer])

  const resetKeyboard = () => {
    const memo = {}
    for (let i = 0; i < 26; i++) {
      memo[String.fromCharCode('a'.charCodeAt(0) + i)] = ATTEMPT_DEFAULT
    }
    setAttemptMemo(memo)
  }

  const resetHealth = () => {
    setHealth(10)
  }

  const handleGameTimerRunsOut = () => {
    setOutcome(OUTCOME_FAIL_TIME)
    setPage(PAGE_POSTGAME)
  }

  const {
    time: gameTime, //
    startTimer: gameStartTimer,
    endTimer: gameEndTimer
  } = useTimer({ initialTime: 60, callback: handleGameTimerRunsOut })

  const handleGameGuessesRunOut = useCallback(() => {
    setOutcome(OUTCOME_FAIL_GUESSES)
    gameEndTimer()
    setPage(PAGE_POSTGAME)
  }, [gameEndTimer])

  const handleGameSuccess = useCallback(() => {
    setOutcome(OUTCOME_SUCCESS)
    gameEndTimer()
    setPage(PAGE_POSTGAME)
  }, [gameEndTimer])

  const handleKey = useCallback(
    (k) => {
      // console.log({ k })
      if (k.length !== 1) return

      if (!(k >= 'a' && k <= 'z')) return

      if (attempt.includes(k)) return

      if (riddleAnswer.includes(k)) {
        setAttempt((prev) => {
          let response = prev
            .split('')
            .map((v, i) => (riddleAnswer[i] === k ? k : v))
            .join('')
          // console.log({ response })
          if (response === riddleAnswer) handleGameSuccess()
          return response
        })
        setAttemptMemo((prev) => {
          let newMemo = { ...prev, [k]: ATTEMPT_CORRECT }
          // console.log(`${k} is inside ${riddleAnswer}`, { newMemo })
          return newMemo
        })
        return
      }
      /* the answer is not correct */
      setHealth((prev) => {
        if (prev === 1) handleGameGuessesRunOut()
        return prev - 1
      })

      if (attemptMemo[k] === ATTEMPT_DEFAULT)
        setAttemptMemo((prev) => {
          let newMemo = { ...prev, [k]: ATTEMPT_INCORRECT }
          // console.log(`${k} is not inside ${riddleAnswer}`, { newMemo })
          return newMemo
        })
    },
    [attempt, handleGameGuessesRunOut, handleGameSuccess, riddleAnswer, attemptMemo]
  )
  const handleKeyDown = useCallback(
    (e) => {
      handleKey(e.key.toLowerCase())
    },
    [handleKey]
  )

  const handleClickKey = (key) => {
    handleKey(key.toLowerCase())
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  /* post game */
  const handlePostGameClickNewGame = () => {
    setPage(PAGE_SPLASH)
  }

  return (
    <App>
      <AppBody>
        <Header />
        <Main>
          {page === PAGE_SPLASH ? (
            <Splash //
              riddleLoading={riddleLoading}
              riddleError={riddleError}
              handleClickNewGame={handleClickNewGame}
            />
          ) : page === PAGE_PREGAME ? (
            <PreGame
              preGameTime={preGameTime}
              attempt={attempt}
            />
          ) : page === PAGE_GAME ? (
            <Game //
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
              gameTime={gameTime}
              health={health}
              handlePostGameClickNewGame={handlePostGameClickNewGame}
              outcome={outcome}
              riddleQuestion={riddleQuestion}
              riddleAnswer={riddleAnswer}
            />
          ) : null}
        </Main>
        <Footer />
      </AppBody>
    </App>
  )
}

export default Spriddle
