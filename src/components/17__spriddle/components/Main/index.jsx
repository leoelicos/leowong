import Splash from './Splash'
import PreGame from './PreGame'
import Game from './Game'
import PostGame from './PostGame'

const Main = ({ stage, goToNextStage }) => {
  return stage === 0 ? ( //
    <Splash goToNextStage={goToNextStage} />
  ) : stage === 1 ? (
    <PreGame goToNextStage={goToNextStage} />
  ) : stage === 2 ? (
    <Game goToNextStage={goToNextStage} />
  ) : (
    <PostGame goToNextStage={goToNextStage} />
  )
}
export default Main
