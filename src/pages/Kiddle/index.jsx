/* custom hooks */
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* data */

/* components */
import Alarm from './components/Alarm.jsx'
import StartButton from './components/StartButton.jsx'
import Tiles from './components/Tiles'
import HelpModal from './components/HelpModal.jsx'

/* style */
import './style/index.css'
import Elephant from './images/elephantOrange.png'
import useGame from './hooks/useGame'
import useModal from './hooks/useModal'

export default function WordGuess() {
  console.log('render')

  useFavicon('/favicons/kiddle.png')
  useTitle('Kiddle')

  /* hooks */

  const {
    seconds,
    tiles,
    tally,
    handleClickResetTally,
    buttonMessage,
    started,
    startGame //
  } = useGame()

  const {
    isModalOpen,
    handleClickHelp,
    handleClickModalOk,
    handleClickModalCancel //
  } = useModal()

  return (
    <div className='kiddle'>
      <header>
        <div className='logo'>
          <img
            src={Elephant}
            alt='elephant logo'
          />
        </div>
        <div>
          <h1>KIDDLE</h1>
        </div>
        <Alarm seconds={seconds} />
        <StartButton
          disabled={!started}
          handleClickStart={startGame}
          buttonMessage={buttonMessage}
        />
      </header>

      <main>
        <Tiles tiles={tiles} />
      </main>

      <footer>
        <button id='button-tally-wins'>Wins: {tally?.wins}</button>
        <button id='button-tally-losses'>Losses: {tally?.losses}</button>
        <button onClick={handleClickResetTally}>Reset</button>
        <button onClick={handleClickHelp}>?</button>

        <HelpModal
          handleClickModalOk={handleClickModalOk}
          handleClickModalCancel={handleClickModalCancel}
          isModalOpen={isModalOpen}
        />
      </footer>
    </div>
  )
}
