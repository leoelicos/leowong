import { Button } from 'antd'
import { useEffect, useRef } from 'react'
import RiddleAnswer from '../RiddleAnswer'
import RiddleQuestion from '../RiddleQuestion'

import MainFooter from '../MainFooter'
import MainHeader from '../MainHeader'

const PostGame = ({ handlePostGameClickNewGame, outcome, riddleQuestion, riddleAnswer, gameTime, health }) => {
  const OUTCOME_SUCCESS = 0
  const OUTCOME_FAIL_TIME = 1
  const OUTCOME_FAIL_GUESSES = 2

  const buttonEl = useRef(null)
  useEffect(() => {
    buttonEl.current.focus()
  }, [])

  const outcomeTitle =
    outcome === OUTCOME_SUCCESS //
      ? 'YOU WIN'
      : 'YOU LOSE'

  const outcomeParagraph =
    outcome === OUTCOME_SUCCESS //
      ? 'you guessed all the letters'
      : outcome === OUTCOME_FAIL_TIME
      ? 'out of time'
      : outcome === OUTCOME_FAIL_GUESSES
      ? 'out of guesses'
      : ''
  return (
    <>
      <MainHeader
        time={gameTime}
        health={health}
      />

      <RiddleQuestion>
        {riddleQuestion.map((sentence) => (
          <p
            className='riddle-question-paragraph'
            key={sentence}>
            {sentence}
          </p>
        ))}
      </RiddleQuestion>

      <RiddleAnswer>{riddleAnswer}</RiddleAnswer>

      <h2 className='postgame-outcome-heading'>{outcomeTitle}</h2>
      <p className='postgame-outcome-paragraph'>{outcomeParagraph}</p>

      <MainFooter>
        <Button
          block
          ref={buttonEl}
          type='default'
          onClick={handlePostGameClickNewGame}>
          New Game
        </Button>
      </MainFooter>
    </>
  )
}
export default PostGame
