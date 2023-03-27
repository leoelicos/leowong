import Feedback from '../components/Feedback'

const Game = ({ question, handleClickAnswer, hasFeedback, previousQuestion, previousCorrect, previousQuestionNumber }) => (
  <main>
    <p id='quiz-title'>{question.title}</p>
    <ul>
      {question.choices.map((choice, i) => (
        <li
          key={choice}
          className='btn-wrapper'>
          <button
            className='btn'
            onClick={(e) => {
              e.preventDefault()
              handleClickAnswer(i)
            }}>
            {choice}
          </button>
        </li>
      ))}
    </ul>
    {hasFeedback && (
      <Feedback
        question={previousQuestion}
        correct={previousCorrect}
        questionNumber={previousQuestionNumber}
      />
    )}
  </main>
)

export default Game
