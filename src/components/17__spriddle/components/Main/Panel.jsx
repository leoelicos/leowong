import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Panel = ({ time, health }) => {
  const style = {
    display: 'flex',
    width: '100%',
    background: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0'
  }
  const blockStyle = {
    display: 'flex',
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'red',
    padding: '4px',
    borderRadius: '8px'
  }
  const iconStyle = {
    fontSize: '14px'
  }
  return (
    <div style={style}>
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
    </div>
  )
}
export default Panel
