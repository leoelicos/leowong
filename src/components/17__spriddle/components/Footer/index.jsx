import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const style = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 0',
    backgroundColor: '#fff'
  }
  return (
    <footer style={style}>
      <FontAwesomeIcon icon={faReact} />
    </footer>
  )
}
export default Footer
