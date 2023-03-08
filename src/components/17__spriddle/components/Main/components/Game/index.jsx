import Keyboard from './components/Keyboard'
import RiddleQuestion from './components/RiddleQuestion'
import RiddleAnswer from './components/RiddleAnswer'
const Game = ({ riddleQuestion, attempt, attemptMemo, handleClickKey, time, health, finished }) => {
  console.log({ attempt })
  return (
    <div>
      <header>
        <h1>
          Time: {time}, Health: {health}, Finished: {finished ? 'True' : 'False'}
        </h1>
      </header>
      <main>
        <RiddleQuestion>{riddleQuestion}</RiddleQuestion>

        <RiddleAnswer>{attempt}</RiddleAnswer>
        <Keyboard
          keys={attemptMemo}
          handleClickKey={handleClickKey}
        />
        {finished && 'Game finished'}
      </main>
    </div>
  )
}

export default Game
