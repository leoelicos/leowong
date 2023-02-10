import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CustomFooter({ toggle, handleToggle }) {
  return (
    <footer>
      <button
        className='toggle'
        onClick={handleToggle}>
        {toggle ? (
          <FontAwesomeIcon
            className='bulb'
            icon={faSun}
          />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </footer>
  )
}
export default CustomFooter
