import { Button } from 'antd'

const Splash = ({ goToNextStage }) => {
  return (
    <div>
      <header>Splash Header</header>
      <main>Splash Main</main>
      <footer>
        <Button
          type='primary'
          onClick={goToNextStage}>
          New Game
        </Button>
      </footer>
    </div>
  )
}
export default Splash
