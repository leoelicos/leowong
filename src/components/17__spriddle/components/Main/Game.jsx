import { Button } from 'antd'

const Game = ({ goToNextStage }) => {
  return (
    <div>
      <header>Game Header</header>
      <main>Game Main</main>
      <footer>
        <Button
          type='primary'
          onClick={goToNextStage}>
          Next Stage
        </Button>
      </footer>
    </div>
  )
}
export default Game
