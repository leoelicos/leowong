import { Button } from 'antd'

const PostGame = ({ handlePostGameClickNewGame, outcome }) => {
  return (
    <div>
      <header>{outcome === 0 ? 'You won!' : outcome === 1 ? 'You lose - out of time!' : 'You lose - out of guesses'}</header>
      <main>Outcome {outcome}</main>
      <footer>
        <Button
          type='primary'
          onClick={handlePostGameClickNewGame}>
          New Game
        </Button>
      </footer>
    </div>
  )
}
export default PostGame
