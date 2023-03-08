import { Button } from 'antd'
import Hero from '../Hero'
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'

const Splash = ({ goToNextStage, riddleUpdate, riddleLoading, riddleError }) => {
  const handleClickNewGame = async () => {
    console.log('onClickNewGame')
    await riddleUpdate()
    // console.log('riddleUpdate', { riddleQuestion, riddleAnswer, riddleLoading, riddleError })
    if (!riddleLoading && !riddleError) {
      // startPreGameTimer()
      goToNextStage()
    }
  }

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
          onClick={handleClickNewGame}>
          {riddleLoading ? 'Finding riddle' : riddleError ? 'No riddle found, try again' : 'New Game'}
        </Button>
      </MainFooter>
    </div>
  )
}
export default Splash
