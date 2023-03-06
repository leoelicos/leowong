import Splash from './Splash/index.jsx'
import PreGame from './PreGame/index.jsx'
import Game from './Game/index.jsx'
import PostGame from './PostGame/index.jsx'

const Main = ({ stage, goToNextStage }) => {
  console.log({ stage })
  const style = {
    backgroundColor: '#eee',
    flex: '1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
  return (
    <main style={style}>
      {stage === 0 ? ( //
        <Splash goToNextStage={goToNextStage} />
      ) : stage === 1 ? (
        <PreGame goToNextStage={goToNextStage} />
      ) : stage === 2 ? (
        <Game goToNextStage={goToNextStage} />
      ) : (
        <PostGame goToNextStage={goToNextStage} />
      )}
    </main>
  )
}
export default Main
