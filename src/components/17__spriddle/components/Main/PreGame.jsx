import { Button } from 'antd'

const PreGame = ({ goToNextStage }) => {
  return (
    <div>
      <header>PreGame Header</header>
      <main>PreGame Main</main>
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
export default PreGame
