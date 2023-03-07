import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainHeader = ({ time, health }) => {
  const style = {
    display: 'flex',
    width: '100%',
    background: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '1rem 0',
    borderRadius: '8px',
    color: 'red'
  }
  const blockStyle = {
    // display: 'flex',
    // padding: '4px'
  }
  const iconStyle = {
    fontSize: '14px'
  }
  return (
    <header style={style}>
      <div style={blockStyle}>
        <FontAwesomeIcon
          icon={faClock}
          style={iconStyle}
        />
        &nbsp;{time}
      </div>
      &nbsp;
      <div style={blockStyle}>
        <FontAwesomeIcon
          icon={faHeart}
          style={iconStyle}
        />
        &nbsp;{health}
      </div>
    </header>
  )
}
export default MainHeader
