/* custom hooks */
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* components */
import Alarm from './components/Alarm.jsx'
import Tiles from './components/Tiles'
import KiddleModal from './components/KiddleModal.jsx'

/* style */
import './style/index.css'
import Elephant from './images/elephantOrange.png'
import useGame from './hooks/useGame'
import useModal from './hooks/useModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faChartColumn } from '@fortawesome/free-solid-svg-icons'

export default function WordGuess() {
  useFavicon('/favicons/kiddle.png')
  useTitle('Kiddle')

  /* hooks */

  const {
    seconds,
    tiles,
    tally,
    handleClickResetTally,

    started,
    startGame //
  } = useGame()

  const {
    isModalOpen: isHelpOpen,
    handleClickOpen: handleClickHelp,
    handleClickModalOk: handleClickHelpOk,
    handleClickModalCancel: handleClickHelpCancel //
  } = useModal()

  const { isModalOpen: isStatsOpen, handleClickOpen: handleClickStatsOpen, handleClickModalOk: handleClickStatsOk, handleClickModalCancel: handleClickStatsCancel } = useModal()

  return (
    <div className='kiddle disable-caret'>
      <header>
        <div className='logo'>
          <img
            src={Elephant}
            alt='elephant logo'
          />
        </div>
        <h1>KIDDLE</h1>

        <div className='extra'>
          <button
            id='stats'
            onClick={handleClickStatsOpen}>
            <FontAwesomeIcon icon={faChartColumn} />
          </button>
          <button
            id='help'
            onClick={handleClickHelp}>
            ?
          </button>
        </div>
      </header>

      <main>
        <Tiles tiles={tiles} />
        {started ? (
          <Alarm seconds={seconds} />
        ) : (
          <button
            type='button'
            onClick={() => {
              startGame()
            }}>
            Start
          </button>
        )}
      </main>

      {/* Stats modal */}
      <KiddleModal
        handleClickModalOk={handleClickStatsOk}
        handleClickModalCancel={handleClickStatsCancel}
        isModalOpen={isStatsOpen}
        title='Stats'>
        <div>Wins: {tally?.wins}</div>
        <div>Losses: {tally?.losses}</div>
        <button
          type='button'
          onClick={handleClickResetTally}
          style={{
            color: 'black',
            backgroundColor: 'transparent',
            borderRadius: '1vmin',
            border: 'none',
            width: 'fit-content',
            cursor: 'pointer',
            margin: 'auto'
          }}>
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </button>
      </KiddleModal>

      {/* Help modal */}
      <KiddleModal
        handleClickModalOk={handleClickHelpOk}
        handleClickModalCancel={handleClickHelpCancel}
        isModalOpen={isHelpOpen}
        title='Help'>
        <p style={{ fontSize: 'max(32px, 4vmin)' }}>
          Click <button>Start</button> to play.
          <br />
          Type the letters to guess the word before the timer hits 0!
        </p>
      </KiddleModal>
    </div>
  )
}
