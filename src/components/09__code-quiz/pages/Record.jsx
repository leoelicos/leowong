import { useState } from 'react'

/* components */
import Feedback from '../components/Feedback'

const affirmations = [
  { score: 0, text: "Don't worry, everyone starts at 0!  😶‍🌫️" },
  { score: 1, text: 'One for the road, 5 for the study table! 🐥' },
  { score: 2, text: 'Two is better than one! ⛅' },
  { score: 3, text: "That's 50% correct! 🌤️" },
  { score: 4, text: 'Four correct! Not bad! 🌻' },
  { score: 5, text: 'Five correct! Beautiful! ✨' },
  { score: 6, text: 'Bingo! Hats off to you! 🎩' } //
]

const Record = ({ score, secondsLeft, addHighScore, goHighScores, numQuestions, hasFeedback, previousQuestion, previousCorrect, previousQuestionNumber }) => {
  const [inputInitials, setInputInitials] = useState('')
  const [inputValid, setInputValid] = useState(true)

  const handleClickSubmit = () => {
    var initials = inputInitials.toString().toUpperCase()

    if (initials.length === 0) {
      setInputValid(false)
      setTimeout(() => {
        setInputValid(true)
      }, 500)
      return
    }
    addHighScore(initials)
    goHighScores()
  }

  const affirmation = affirmations.find((a) => a.score === score).text

  return (
    <main className='recordSection'>
      {hasFeedback && (
        <Feedback
          question={previousQuestion}
          correct={previousCorrect}
          questionNumber={previousQuestionNumber}
        />
      )}
      <hr />
      <h1 id='victoryMessage'>{`${score}/${numQuestions}`}</h1>
      <h1 id='affirmation'>{affirmation}</h1>
      <p id='victoryScoreLabel'>{`Seconds remaining: ${Math.max(secondsLeft, 0)}`}</p>
      <hr />
      <label
        id='recordInitialLabel'
        htmlFor='initials'>
        Please enter your initials below:
      </label>
      <input
        type='text'
        maxLength={2}
        id='initials'
        value={inputInitials}
        onChange={(e) => {
          setInputInitials(e.target.value)
        }}
      />
      <button
        type='submit'
        id='submit'
        onClick={handleClickSubmit}
        className={inputValid ? '' : 'redfeedback'}>
        {inputValid ? 'Submit' : 'Your initials please'}
      </button>
    </main>
  )
}
export default Record
