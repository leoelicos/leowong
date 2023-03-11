import { Button } from 'antd'

import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'
import { useEffect, useRef } from 'react'
import RiddleQuestion from '../RiddleQuestion'

const Splash = ({ handleClickNewGame, riddleLoading, riddleError }) => {
  const buttonText = riddleLoading ? 'Finding riddle' : riddleError ? 'No riddle found, try again' : 'New Game'

  const buttonEl = useRef(null)
  useEffect(() => {
    buttonEl.current.focus()
  }, [])

  return (
    <>
      <MainHeader
        time='—'
        health='—'
      />

      <RiddleQuestion>
        <p className='riddle-question-paragraph'>
          Riddle Master, that's my name,
          <br />
          Guess the letters and win the game.
          <br />
          Sixty seconds and ten wrong guesses,
          <br />
          Time is certain but not your successes.
        </p>
      </RiddleQuestion>

      <MainFooter>
        <Button
          ref={buttonEl}
          loading={riddleLoading}
          disabled={riddleError}
          block
          type='default'
          onClick={handleClickNewGame}>
          {buttonText}
        </Button>
      </MainFooter>
    </>
  )
}
export default Splash
