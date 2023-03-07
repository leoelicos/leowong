import { Button } from 'antd'
import { useEffect, useState } from 'react'
import MainHeader from '../MainHeader'
// import Keyboard from './components/Keyboard'
import RiddleAnswer from './components/RiddleAnswer'
import RiddleQuestion from './components/RiddleQuestion'

const Game = ({ goToNextStage, time, health, question, answer }) => {
  // const initialKeys = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
  // const [keyboardMemo, setKeyboardMemo] = useState(initialKeys)

  console.log('Game', { question, answer })

  return (
    <div>
      <header>
        <MainHeader
          time={time}
          health={health}
        />
      </header>
      <main>
        <RiddleQuestion>{question}</RiddleQuestion>
        <RiddleAnswer>{answer}</RiddleAnswer>
        {/* <Keyboard keyboardMemo={keyboardMemo} /> */}
      </main>
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
