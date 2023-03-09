import { Button } from 'antd'
import Hero from '../Hero'
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'

const Splash = ({ handleClickNewGame, riddleLoading, riddleError }) => {
  const buttonText = riddleLoading ? 'Finding riddle' : riddleError ? 'No riddle found, try again' : 'New Game'
  return (
    <>
      <MainHeader
        time='—'
        health='—'
      />
      <main>
        <Hero>
          <p style={{ margin: '0' }}>
            Riddle Master, that's my name,
            <br />
            Guess the letters and win the game.
            <br />
            Sixty seconds and ten wrong guesses,
            <br />
            Time is certain but not your successes.
          </p>
        </Hero>
      </main>
      <MainFooter>
        <Button
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
