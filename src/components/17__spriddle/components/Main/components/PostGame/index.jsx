import { Button } from 'antd'
import { useEffect, useRef } from 'react'
import RiddleAnswer from '../Game/components/RiddleAnswer'
import RiddleQuestion from '../Game/components/RiddleQuestion'
import Hero from '../Hero'
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

      <h2 style={{ margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Open Sans, sans-serif' }}>{outcomeTitle}</h2>
      <p style={{ margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Open Sans, sans-serif' }}>{outcomeParagraph}</p>

      <RiddleQuestion>
        {riddleQuestion.map((sentence) => (
          <p
            className='riddle-paragraph'
            key={sentence}>
            {sentence}
          </p>
        ))}
      </RiddleQuestion>

      <RiddleAnswer>{riddleAnswer}</RiddleAnswer>

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
