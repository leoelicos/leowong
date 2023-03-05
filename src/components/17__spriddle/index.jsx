import { Button, Empty, Spin } from 'antd'
import { useEffect, useState } from 'react'
import useRiddle from './api/useRiddle'
import Main from './components/Main'

const isAlphaNumeric = (c) => (c >= 65 && c <= 90) || (c >= 48 && c <= 57)
export default function Spriddle() {
  const { riddleQuestion, riddleAnswer, riddleUpdate, riddleLoading, riddleError } = useRiddle()
  const [pressed, setPressed] = useState([])
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    riddleUpdate()
  }, [])

  const handleClickNewGame = async () => {
    await riddleUpdate()
    setGameStarted(true)
  }

  const handleKeyDown = ({ keyCode }) => {
    if (isAlphaNumeric(keyCode) && gameStarted) {
      setPressed((prev) => prev.concat(String.fromCharCode(keyCode).toLowerCase()))
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'auto'
  }
  return (
    <div style={bodyStyle}>
      <Main>
        {riddleLoading ? (
          <section>
            <Spin />
          </section>
        ) : riddleError ? (
          <section>
            <Empty>Couldn't find a riddle. Try again?</Empty>
          </section>
        ) : (
          <section>
            <article>
              {riddleQuestion}
              {pressed}
            </article>
            <article>{riddleAnswer.replace(/./g, '_')}</article>
          </section>
        )}

        <section>
          <Button
            type='primary'
            onClick={handleClickNewGame}>
            New Game
          </Button>
        </section>
      </Main>
    </div>
  )
}
