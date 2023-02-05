import Elephant from './images/elephantOrange.png'
import './style/header.css'
const Header = () => (
  <header>
    <div className='logo'>
      <img
        src={Elephant}
        alt='elephant logo'
      />
    </div>
    <div>
      <h1>KIDDLE</h1>
    </div>
  </header>
)
export default Header
