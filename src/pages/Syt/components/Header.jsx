import { faChartBar, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ secondsLeft, currentQuestion, page, goHighScores }) => {
  return page === 'High Scores' ? (
    <header className='highscore-header'>
      <FontAwesomeIcon
        id='hsIcon'
        icon={faChartBar}
      />
      &nbsp;
      <span id='hallOfFame'>Hall of Fame</span>
    </header>
  ) : (
    <header>
      <p className='nav-timer'>
        <FontAwesomeIcon icon={faClock} />
        &nbsp;
        {page === 'Splash' ? (
          <span>0:60</span>
        ) : secondsLeft === 0 ? ( //
          "Time's up!"
        ) : (
          <>
            <span>0:</span>
            <span id='seconds'>{secondsLeft.toString().padStart(2, '0')}</span>
          </>
        )}
      </p>
      <p className='nav-question'>
        Question <span id='currentQuestion' />
        {currentQuestion}/6
      </p>
      {page === 'Splash' && (
        <p
          className='nav-view'
          onClick={goHighScores}>
          <FontAwesomeIcon icon={faChartBar} />
        </p>
      )}
    </header>
  )
}

export default Header
