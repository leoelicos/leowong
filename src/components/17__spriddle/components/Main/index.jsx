import { useEffect } from 'react'
import Splash from './components/Splash/index.jsx'
import PreGame from './components/PreGame/index.jsx'
import Game from './components/Game/index.jsx'
import PostGame from './components/PostGame/index.jsx'
import useTimer from '../../hooks/useTimer'
import useRiddle from '../../api/useRiddle.jsx'
import useGame from '../../hooks/useGame'

const Main = ({ stage, goToNextStage }) => {
  const {
    riddleQuestion,
    riddleAnswer,
    riddleUpdate,
    riddleLoading,
    riddleError //
  } = useRiddle()

  const {
    time,
    health
    // startGame,
    // finished //
  } = useGame()

  // console.log({ stage })
  const style = {
    backgroundColor: '#eee',
    flex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }

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
    <main style={style}>
      {stage === 0 ? (
        <Splash
          onClickNewGame={handleClickNewGame}
          riddleLoading={riddleLoading}
          riddleError={riddleError}
          buttonText={riddleLoading ? 'Finding riddle' : riddleError ? 'No riddle found, try again' : 'New Game'}
        />
      ) : stage === 1 ? (
        <PreGame goToNextStage={goToNextStage} />
      ) : stage === 2 ? (
        <Game
          goToNextStage={goToNextStage}
          time={time}
          health={health}
          question={riddleQuestion}
          answer={riddleAnswer}
        />
      ) : (
        <PostGame goToNextStage={goToNextStage} />
      )}
    </main>
  )
}
export default Main
