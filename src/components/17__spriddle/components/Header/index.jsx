import { faHourglass } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header className='header'>
      <FontAwesomeIcon icon={faHourglass} />
      &nbsp; SPRIDDLE
    </header>
  )
}
export default Header
