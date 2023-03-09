import { Button } from 'antd'
import RiddleAnswer from '../Game/components/RiddleAnswer'
import RiddleQuestion from '../Game/components/RiddleQuestion'
import MainFooter from '../MainFooter'
import MainHeader from '../MainHeader'

const PostGame = ({ handlePostGameClickNewGame, outcome, riddleQuestion, riddleAnswer, gameTime, health }) => {
  const outcomeTitle = outcome === 0 ? 'YOU WIN' : 'YOU LOSE'
  const outcomeParagraph = outcome === 0 ? 'you guessed all the letters' : outcome === 1 ? 'out of time' : 'out of guesses'
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
      <p style={{ margin: '0' }}>Answer:</p>
      <RiddleAnswer>{riddleAnswer}</RiddleAnswer>

      <MainFooter>
        <Button
          type='primary'
          onClick={handlePostGameClickNewGame}>
          New Game
        </Button>
      </MainFooter>
    </>
  )
}
export default PostGame
