import { Button } from 'antd'
import Action from '../Action.jsx'
import Hero from '../Hero.jsx'
import Panel from '../Panel.jsx'

const Splash = ({ goToNextStage }) => {
  return (
    <div>
      <header>
        <Panel
          time='—'
          health='—'
        />
      </header>
      <main>
        <Hero>Hello, Riddle Master!</Hero>
      </main>
      <footer>
        <Action>
          <Button
            type='primary'
            onClick={goToNextStage}>
            New Game
          </Button>
        </Action>
      </footer>
    </div>
  )
}
export default Splash
