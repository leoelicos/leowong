import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/toggle.css'

function CustomFooter({ handleToggle }) {
  return (
    <footer>
      <button
        className='toggle'
        onClick={handleToggle}>
        <FontAwesomeIcon
          className='bulb'
          icon={faLightbulb}
        />
      </button>
    </footer>
  )
}
export default CustomFooter
