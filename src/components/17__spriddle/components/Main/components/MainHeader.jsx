import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainHeader = ({ time, health }) => {
  return (
    <header className='main-header'>
      <FontAwesomeIcon icon={faClock} />
      &nbsp;{time}&emsp;&emsp;
      <FontAwesomeIcon icon={faHeart} />
      &nbsp;{health}
    </header>
  )
}
export default MainHeader
