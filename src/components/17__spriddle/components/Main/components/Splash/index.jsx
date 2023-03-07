import { Button } from 'antd'
import Hero from '../Hero'
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'

const Splash = ({ onClickNewGame, riddleLoading, riddleError, buttonText }) => {
  return (
    <div>
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
          onClick={onClickNewGame}>
          {buttonText}
        </Button>
      </MainFooter>
    </div>
  )
}
export default Splash
