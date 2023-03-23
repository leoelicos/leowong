import RiddleQuestion from '../RiddleQuestion'
import RiddleAnswer from '../RiddleAnswer'
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'
import Keyboard from './components/Keyboard'
import Row from './components/Row'
import Key from './components/Key'

const Game = ({ riddleQuestion, attempt, attemptMemo, handleClickKey, gameTime, health }) => {
  return (
    <>
      <MainHeader
        time={gameTime}
        health={health}
      />

      <RiddleQuestion>
        {riddleQuestion.map((sentence) => (
          <p
            className='riddle-question-paragraph'
            key={sentence}>
            {sentence}
          </p>
        ))}
      </RiddleQuestion>

      <RiddleAnswer>{attempt}</RiddleAnswer>

      <MainFooter>
        <Keyboard>
          <Row>
            {'qwertyuiop'.split('').map((letter) => (
              <Key
                key={letter}
                char={letter}
                stage={attemptMemo[letter]}
                handleClickKey={handleClickKey}
              />
            ))}
          </Row>
          <Row>
            <div style={{ flex: '0.5' }} />
            {'asdfghjkl'.split('').map((letter) => (
              <Key
                key={letter}
                char={letter}
                stage={attemptMemo[letter]}
                handleClickKey={handleClickKey}
              />
            ))}
            <div style={{ flex: '0.5' }} />
          </Row>
          <Row>
            <div style={{ flex: '1' }} />
            {'zxcvbnm'.split('').map((letter) => (
              <Key
                key={letter}
                char={letter}
                stage={attemptMemo[letter]}
                handleClickKey={handleClickKey}
              />
            ))}
            <div style={{ flex: '2' }} />
          </Row>
        </Keyboard>
      </MainFooter>
    </>
  )
}

export default Game
