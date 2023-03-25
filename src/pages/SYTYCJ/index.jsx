/* hooks */
import { useEffect, useState } from 'react'
import useTimer from './hooks/useTimer'

/* data */
import questions from './data/questions'

/* pages */
import Splash from './pages/Splash'
import Game from './pages/Game'
import Record from './pages/Record'
import HighScores from './pages/HighScores'

/* components */
import Header from './components/Header'

/* style */
import './style/style.css'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function CodeQuiz() {
  /* state */
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [page, setPage] = useState('Splash') // pages: ['Splash','Game','Record','High Scores']

  const initialResults = questions.map(() => false)
  const [results, setResults] = useState(initialResults)

  const [highScores, setHighScores] = useState(JSON.parse(localStorage.getItem('hs')) || [])

  /* hook */
  const [secondsLeft, startTimer, stopTimer, resetTimer, penalize] = useTimer(60)

  /* effect */
  useTitle('SYTYCJ')
  useFavicon('favicons/sytycj.png')

  useEffect(() => {
    localStorage.setItem('hs', JSON.stringify(highScores))
  }, [highScores])

  useEffect(() => {
    if (secondsLeft <= 0) stopTimer()
  }, [secondsLeft, stopTimer])

  const clearHighScores = () => {
    setHighScores([])
  }

  const resetResults = () => {
    setResults(initialResults)
  }

  /* game logic */
  function startGame() {
    setCurrentQuestion(0)
    resetResults()
    resetTimer()
    startTimer()

    goGame()
  }

  function endGame() {
    stopTimer()
    goRecord()
  }

  const handleClickAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer
    setResults((prev) => prev.map((v, i) => (i === currentQuestion ? isCorrect : v)))

    if (!isCorrect) penalize(10)

    setCurrentQuestion((prev) => {
      if (currentQuestion === questions.length - 1) endGame()
      return prev + 1
    })
  }

  const addHighScore = (initials) => {
    const timestamp = new Date().getTime()
    const score = Math.max(secondsLeft, 0)
    setHighScores((prev) => [...prev, { initials, timestamp, score }])
  }

  const goHighScores = () => {
    setPage('High Scores')
  }
  const goSplash = () => {
    setPage('Splash')
  }
  const goGame = () => {
    setPage('Game')
  }
  const goRecord = () => {
    setPage('Record')
  }

  return (
    <div className='app-09'>
      <div className='body'>
        <Header
          secondsLeft={secondsLeft}
          currentQuestion={currentQuestion}
          page={page}
          goHighScores={goHighScores}
        />
        {page === 'Game' ? (
          <Game
            question={questions[currentQuestion]}
            handleClickAnswer={handleClickAnswer}
            results={results}
            hasFeedback={currentQuestion > 0}
            previousQuestion={currentQuestion > 0 ? questions[currentQuestion - 1] : undefined}
            previousCorrect={currentQuestion > 0 ? results[currentQuestion - 1] : undefined}
            previousQuestionNumber={currentQuestion > 0 ? currentQuestion - 1 : undefined}
          />
        ) : page === 'Record' ? (
          <Record
            score={results.reduce((a, b) => (b ? a + 1 : a), 0)}
            secondsLeft={secondsLeft}
            addHighScore={addHighScore}
            goHighScores={goHighScores}
            numQuestions={questions.length}
            hasFeedback={currentQuestion > 0}
            previousQuestion={currentQuestion > 0 ? questions[currentQuestion - 1] : undefined}
            previousCorrect={currentQuestion > 0 ? results[currentQuestion - 1] : undefined}
            previousQuestionNumber={currentQuestion > 0 ? currentQuestion - 1 : undefined}
          />
        ) : page === 'High Scores' ? (
          <HighScores
            startGame={startGame}
            goSplash={goSplash}
            highScores={highScores}
            clearHighScores={clearHighScores}
          />
        ) : (
          <Splash
            startGame={startGame}
            goGame={goGame}
            numQuestions={questions.length}
          /> //
        )}
      </div>
    </div>
  )
}
