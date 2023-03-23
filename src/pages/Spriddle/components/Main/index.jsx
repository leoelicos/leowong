import Splash from './components/Splash'
import PreGame from './components/PreGame'
import Game from './components/Game'
import PostGame from './components/PostGame'

const PAGE_SPLASH = 0
const PAGE_PREGAME = 1
const PAGE_GAME = 2
const PAGE_POSTGAME = 3

const Main = ({ page, riddleLoading, riddleError, handleClickNewGame, preGameTime, attempt, riddleQuestion, riddleAnswer, setOutcome, attemptMemo, handleClickKey, gameTime, health, handlePostGameClickNewGame, outcome }) => {
  return (
    <main className='main'>
      {page === PAGE_SPLASH ? (
        <Splash //
          riddleLoading={riddleLoading}
          riddleError={riddleError}
          handleClickNewGame={handleClickNewGame}
        />
      ) : page === PAGE_PREGAME ? (
        <PreGame
          preGameTime={preGameTime}
          attempt={attempt}
        />
      ) : page === PAGE_GAME ? (
        <Game //
          riddleQuestion={riddleQuestion}
          riddleAnswer={riddleAnswer}
          setOutcome={setOutcome}
          attempt={attempt}
          attemptMemo={attemptMemo}
          handleClickKey={handleClickKey}
          gameTime={gameTime}
          health={health}
        />
      ) : page === PAGE_POSTGAME ? (
        <PostGame
          gameTime={gameTime}
          health={health}
          handlePostGameClickNewGame={handlePostGameClickNewGame}
          outcome={outcome}
          riddleQuestion={riddleQuestion}
          riddleAnswer={riddleAnswer}
        />
      ) : null}
    </main>
  )
}
export default Main
