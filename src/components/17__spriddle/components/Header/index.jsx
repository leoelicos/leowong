import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const style = {
    fontFamily: 'Open Sans,sans-serif',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 0',
    fontWeight: 'bold',
    letterSpacing: '2px'
  }
  return (
    <header style={style}>
      <FontAwesomeIcon icon={faHourglass} />
      &nbsp; SPRIDDLE
    </header>
  )
}
export default Header
