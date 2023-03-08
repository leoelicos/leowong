const Game = ({ riddleQuestion, attempt, attemptMemo }) => {
  return (
    <div>
      <header>
        <h1>
          Time: {time}, Health: {health}, Finished: {finished ? 'True' : 'False'}
        </h1>
      </header>
      <main>
        <h2>{riddleQuestion}</h2>

        <h2>{attempt}</h2>
        <Keyboard keyboardMemo={attemptMemo} />
        {finished && 'Game finished'}
      </main>
    </div>
  )
}

export default Game
