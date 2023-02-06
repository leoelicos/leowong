export default function HighScores({ startGame, setPage, highScores, clearHighScores }) {
  return (
    <main className='highscore-main'>
      <ul id='hs'>
        <li className='btn-wrapper'>
          <button
            className='btn'
            id='hs-wrapper'>
            <span id='hs-rank'>Rank</span>
            <span id='hs-initial'>Name</span>
            <span id='hs-score'>Score</span>
          </button>
        </li>
        {highScores &&
          highScores
            .sort((a, b) => b.score - a.score)
            .map(({ initials, score, timestamp }, i) => (
              <li
                className='btn-wrapper'
                key={timestamp}>
                <button
                  id='hs-wrapper'
                  className='btn'>
                  <span id='hs-rank'>{i + 1}</span>
                  <span id='hs-initial'>{initials}</span>
                  <span id='hs-score'>{score}</span>
                </button>
              </li>
            ))}
      </ul>
      <button
        className='splash-start-button'
        id='newGame'
        onClick={() => {
          setPage('Splash')
        }}>
        New game
      </button>
      <button
        className='splash-start-button'
        id='clear'
        onClick={clearHighScores}>
        Clear High Scores
      </button>
    </main>
  )
}
