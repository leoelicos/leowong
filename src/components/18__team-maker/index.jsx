/* custom components */
import EmployeeProvider from './context/EmployeeContext'

/* style and icon */
import './style/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import Main from './components/Main'

const TeamMaker = () => {
  return (
    <div className='app-18'>
      <div className='body'>
        <header>
          <h1>Team Maker</h1>
        </header>
        <EmployeeProvider>
          <Main />
        </EmployeeProvider>
        <footer>
          <p>
            <FontAwesomeIcon
              icon={faReact}
              className='react-icon'
            />
          </p>
        </footer>
      </div>
    </div>
  )
}
export default TeamMaker
