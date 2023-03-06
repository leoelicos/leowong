import { Button } from 'antd'
import Panel from '../Panel.jsx'

const PreGame = ({ goToNextStage }) => {
  const time = 0
  const health = 0
  return (
    <div>
      <header>
        <Panel
          time={time}
          health={health}
        />
      </header>
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
